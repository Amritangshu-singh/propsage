const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export async function submitLead(data) {
  const response = await fetch(`${API_URL}/leads`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to submit lead");
  }

  return response.json();
}
