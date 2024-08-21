import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";
function Contactform() {
  const [state, handleSubmit] = useForm("xzzpjzgp");
  if (state.succeeded) {
    return (
      <p>Thanks for Contacting us we will be shortly in touch with you !</p>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="text"
        type="text"
        name="text"
        placeholder="Your Name"
        className="p-2 mt-3 contact-input"
        required
      />
      <ValidationError prefix="Text" field="text" errors={state.errors} />
      <br />
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Your Email"
        className="p-2 mt-3 contact-input"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <br />
      <input
        id="text"
        type="text"
        name="text"
        placeholder="Subject"
        className="p-2 mt-3 contact-input"
        required
      />
      <ValidationError prefix="Text" field="text" errors={state.errors} />
      <br />
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        rows="3"
        className="p-2 mt-4 contact-input"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <br />
      <button
        type="submit"
        className="sumbit-btn mt-3"
        disabled={state.submitting}
      >
        Send Message
      </button>
    </form>
  );
}

export default Contactform;
