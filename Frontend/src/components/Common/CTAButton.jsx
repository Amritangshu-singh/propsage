import { useLead } from "../../context/LeadContext";

function CTAButton({
  children,

  source,

  onSuccess,

  className,
}) {
  const { openLeadPopup } = useLead();

  return (
    <button
      className={className}
      onClick={() => openLeadPopup(source, onSuccess)}
    >
      {children}
    </button>
  );
}

export default CTAButton;
