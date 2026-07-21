const API_URL = import.meta.env.VITE_API_URL || "https://propsage.onrender.com";

function normalizePhone(phone) {
  const digits = String(phone || "").replace(/\D/g, "");

  if (digits.length === 12 && digits.startsWith("91")) {
    return digits.slice(2);
  }

  return digits;
}

export async function submitLead(data) {
  const payload = {
    ...data,
    name: String(data.name || "").trim(),
    phone: normalizePhone(data.phone),
    email: String(data.email || "").trim(),
    interest: String(data.interest || "").trim(),
    message: String(data.message || "").trim(),
    source: String(data.source || "").trim(),
  };

  const response = await fetch(`${API_URL}/leads`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(errorText || "Failed to submit lead");
  }

  return response.json();
}
