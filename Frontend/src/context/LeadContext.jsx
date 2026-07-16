import { createContext, useEffect, useContext, useRef, useState } from "react";

const LeadContext = createContext();

export function LeadProvider({ children }) {
  const [popupOpen, setPopupOpen] = useState(false);
  const [source, setSource] = useState("Lead Popup");
  const autoPopupTriggeredRef = useRef(false);
  const autoPopupTimerRef = useRef(null);

  function openLeadPopup(nextSource = "Lead Popup") {
    autoPopupTriggeredRef.current = true;

    if (autoPopupTimerRef.current) {
      clearTimeout(autoPopupTimerRef.current);
      autoPopupTimerRef.current = null;
    }

    setSource(nextSource);
    setPopupOpen(true);
  }

  function closeLeadPopup() {
    if (autoPopupTimerRef.current) {
      clearTimeout(autoPopupTimerRef.current);
      autoPopupTimerRef.current = null;
    }

    setPopupOpen(false);
  }

  function submitSuccess() {
    if (autoPopupTimerRef.current) {
      clearTimeout(autoPopupTimerRef.current);
      autoPopupTimerRef.current = null;
    }

    setPopupOpen(false);
  }

  useEffect(() => {
    function scheduleAutoPopup() {
      if (autoPopupTriggeredRef.current || popupOpen) {
        return;
      }

      if (autoPopupTimerRef.current) {
        clearTimeout(autoPopupTimerRef.current);
      }

      autoPopupTimerRef.current = setTimeout(() => {
        if (!autoPopupTriggeredRef.current) {
          autoPopupTriggeredRef.current = true;
          setSource("Lead Popup");
          setPopupOpen(true);
        }

        autoPopupTimerRef.current = null;
      }, 2500);
    }

    function handleScroll() {
      scheduleAutoPopup();
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (autoPopupTimerRef.current) {
        clearTimeout(autoPopupTimerRef.current);
        autoPopupTimerRef.current = null;
      }
    };
  }, [popupOpen]);

  return (
    <LeadContext.Provider
      value={{
        openLeadPopup,
        closeLeadPopup,
        submitSuccess,
        popupOpen,
        source,
      }}
    >
      {children}
    </LeadContext.Provider>
  );
}

export function useLead() {
  return useContext(LeadContext);
}
