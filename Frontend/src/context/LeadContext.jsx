import { createContext, useContext } from "react";

const LeadContext = createContext();

export function LeadProvider({ children }) {
  function openLeadPopup() {
    const section = document.getElementById("bookvisit");

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <LeadContext.Provider
      value={{
        openLeadPopup,
      }}
    >
      {children}
    </LeadContext.Provider>
  );
}

export function useLead() {
  return useContext(LeadContext);
}
