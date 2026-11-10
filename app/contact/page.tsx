import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <section className="page-hero light">
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <h1 className="page-hero__title">Let&rsquo;s build<br />something</h1>
        </div>
      </section>
      <section className="section light" style={{ paddingTop: 0 }}>
        <div className="wrap contact">
          <div className="contact__info">
            <p className="eyebrow">Landowners &amp; agents</p>
            <p>Offering a site? We respond to every enquiry, in confidence.</p>
            <p className="eyebrow">Buyers</p>
            <p>Register your interest to receive pricing and floorplans first.</p>
            <p className="eyebrow">Studio</p>
            <p>
              Level 12, 100 Example Street
              <br />
              Melbourne VIC 3000
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
