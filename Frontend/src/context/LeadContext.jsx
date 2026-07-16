import { createContext, useContext, useState } from "react";

const LeadContext = createContext();

export function LeadProvider({ children }) {
  const [popupOpen, setPopupOpen] = useState(false);
  const [source, setSource] = useState("Lead Popup");

  function openLeadPopup(nextSource = "Lead Popup") {
    setSource(nextSource);
    setPopupOpen(true);
  }

  function closeLeadPopup() {
    setPopupOpen(false);
  }

  function submitSuccess() {
    setPopupOpen(false);
  }

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
