import "./BookVisit.css";
import { useEffect, useRef, useState } from "react";
import { submitLead } from "../../services/leadService";

function BookVisit() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const popupTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (popupTimerRef.current) {
        clearTimeout(popupTimerRef.current);
      }
    };
  }, []);

  const handleChange = (event) => {
    setForm((currentForm) => ({
      ...currentForm,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await submitLead({
        ...form,
        source: "Book Visit",
      });

      setShowSuccessPopup(true);

      if (popupTimerRef.current) {
        clearTimeout(popupTimerRef.current);
      }

      popupTimerRef.current = setTimeout(() => {
        setShowSuccessPopup(false);
      }, 2500);

      setForm({
        name: "",
        phone: "",
        email: "",
        interest: "",
        message: "",
      });
    } catch (error) {
      setStatus("Unable to submit right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="book-visit" id="bookvisit">
      <div className="book-left">
        <span>BOOK A PRIVATE VISIT</span>

        <h2>
          Experience POSCH
          <br />
          In Person
        </h2>

        <p>
          Schedule a personalized site visit and let our experts guide you
          through every detail of your future home.
        </p>
      </div>

      <div className="book-right">
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

            {/* <option>Master Terrace</option> */}
          </select>

          {/* <input type="date" placeholder="Preferred Date for Visit" /> */}

          <textarea
            rows="4"
            name="message"
            placeholder="Message (Optional)"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Schedule Visit"}
          </button>

          {status ? <p className="form-status">{status}</p> : null}
        </form>
      </div>

      {showSuccessPopup ? (
        <div className="form-popup" role="status" aria-live="polite">
          Thanks for Visiting. We will reach out to you soon.
        </div>
      ) : null}
    </section>
  );
}

export default BookVisit;
