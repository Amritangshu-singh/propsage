import { useState } from "react";
import "./LeadPopup.css";
import { useLead } from "../../context/LeadContext";
import { submitLead } from "../../services/leadService";

function LeadPopup() {
  const {
    popupOpen,

    closeLeadPopup,

    submitSuccess,

    source,
  } = useLead();

  const [form, setForm] = useState({
    name: "",

    phone: "",

    email: "",

    interest: "",

    message: "",
  });

  const [loading, setLoading] = useState(false);

  console.log("LeadPopup rendered");
  console.log("popupOpen =", popupOpen);

  if (!popupOpen) return null;

  const handleChange = (e) => {
    setForm({
      ...form,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await submitLead({
        ...form,

        source,
      });

      submitSuccess();
    } catch (err) {
      alert("Unable to submit lead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="lead-popup">
        <button className="popup-close" onClick={closeLeadPopup}>
          ✕
        </button>

        <h2>Schedule Your Private Visit</h2>

        <p>Fill in your details and our team will contact you shortly.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <select name="interest" value={form.interest} onChange={handleChange}>
            <option value="">Select Residence</option>

            <option value="3 BHK">3 BHK</option>

            <option value="4 BHK">4 BHK</option>

            {/* <option value="Master Terrace">Master Terrace</option> */}
          </select>

          <textarea
            rows="4"
            name="message"
            placeholder="Message (Optional)"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LeadPopup;
