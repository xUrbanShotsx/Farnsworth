"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="form form--sent">
        <h2 className="h3">Thank you.</h2>
        <p>We&rsquo;ve received your message and will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: connect to an email service / CRM endpoint.
        setSent(true);
      }}
    >
      <label>
        <span>Name</span>
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        <span>I am a</span>
        <select name="role" defaultValue="Landowner">
          <option>Landowner</option>
          <option>Agent</option>
          <option>Buyer</option>
          <option>Investor</option>
          <option>Other</option>
        </select>
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" rows={5} required />
      </label>
      <button className="btn btn--dark" type="submit">
        Send message <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
