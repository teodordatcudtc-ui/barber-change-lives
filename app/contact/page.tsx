"use client";

import { useState } from "react";
import styles from "./page.module.css";

const INITIAL = {
  nume: "",
  telefon: "",
  email: "",
  serviciu: "",
  data: "",
  ora: "",
  mesaj: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function validate(): boolean {
    const e: Record<string, string> = {};
    if (!form.nume.trim()) e.nume = "Numele este obligatoriu.";
    if (!form.telefon.trim()) e.telefon = "Telefonul este obligatoriu.";
    if (!form.email.trim()) e.email = "Emailul este obligatoriu.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Introdu un email valid.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSent(true);
    setForm(INITIAL);
  }

  return (
    <>
      <section className="page-hero section-dark" aria-labelledby="contact-hero-title">
        <div className="page-hero-inner">
          <h1 id="contact-hero-title" className="page-hero-title">
            Contact
          </h1>
          <p className="page-hero-desc">
            Programează-te sau scrie-ne. Te așteptăm la Bloc 4, Str. Lăptari Tei 16.
          </p>
        </div>
      </section>

      <section id="programare" className={`${styles.section} ${styles.sectionContact} section-cream`} aria-labelledby="contact-form-title">
        <div className={styles.contactInner}>
          <div className="contact-form-wrap">
            <h2 id="contact-form-title" className={styles.sectionTitle}>
              Programează-te
            </h2>
            {sent ? (
              <p className={styles.formSuccess}>
                Mulțumim! Mesajul tău a fost trimis. Te contactăm în curând.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className={styles.contactForm} noValidate>
                <div className={styles.formRow}>
                  <label htmlFor="nume">Nume *</label>
                  <input
                    id="nume"
                    type="text"
                    value={form.nume}
                    onChange={(e) => setForm((f) => ({ ...f, nume: e.target.value }))}
                    aria-required="true"
                    aria-invalid={!!errors.nume}
                    aria-describedby={errors.nume ? "err-nume" : undefined}
                  />
                  {errors.nume && <span id="err-nume" className={styles.formError} role="alert">{errors.nume}</span>}
                </div>
                <div className={styles.formRow}>
                  <label htmlFor="telefon">Telefon *</label>
                  <input
                    id="telefon"
                    type="tel"
                    value={form.telefon}
                    onChange={(e) => setForm((f) => ({ ...f, telefon: e.target.value }))}
                    aria-required="true"
                    aria-invalid={!!errors.telefon}
                    aria-describedby={errors.telefon ? "err-telefon" : undefined}
                  />
                  {errors.telefon && <span id="err-telefon" className={styles.formError} role="alert">{errors.telefon}</span>}
                </div>
                <div className={styles.formRow}>
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "err-email" : undefined}
                  />
                  {errors.email && <span id="err-email" className={styles.formError} role="alert">{errors.email}</span>}
                </div>
                <div className={styles.formRow}>
                  <label htmlFor="serviciu">Serviciu</label>
                  <select
                    id="serviciu"
                    value={form.serviciu}
                    onChange={(e) => setForm((f) => ({ ...f, serviciu: e.target.value }))}
                  >
                    <option value="">Alege</option>
                    <option value="tunsori">Tunsori</option>
                    <option value="barba">Barbă</option>
                    <option value="ingrijire">Îngrijire</option>
                    <option value="combo">Combo</option>
                  </select>
                </div>
                <div className={`${styles.formRow} ${styles.formRowTwoCols}`}>
                  <div>
                    <label htmlFor="data">Data preferată</label>
                    <input
                      id="data"
                      type="date"
                      value={form.data}
                      onChange={(e) => setForm((f) => ({ ...f, data: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label htmlFor="ora">Ora preferată</label>
                    <input
                      id="ora"
                      type="time"
                      value={form.ora}
                      onChange={(e) => setForm((f) => ({ ...f, ora: e.target.value }))}
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <label htmlFor="mesaj">Mesaj</label>
                  <textarea
                    id="mesaj"
                    rows={4}
                    value={form.mesaj}
                    onChange={(e) => setForm((f) => ({ ...f, mesaj: e.target.value }))}
                  />
                </div>
                <button type="submit" className="btn-primary">
                  Trimite programarea
                </button>
              </form>
            )}
          </div>
          <div className={styles.contactInfo}>
            <h3 className={styles.contactInfoTitle}>Date contact</h3>
            <p><strong>Telefon:</strong><br /><a href="tel:0768584036">0768 584 036</a></p>
            <p><strong>Email:</strong><br /><a href="mailto:contact@barberchangeslives.ro">contact@barberchangeslives.ro</a></p>
            <p><strong>Adresă:</strong><br />Bloc 4, Str. Lăptari Tei 16<br />023628 București</p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionMap} section-offwhite`} aria-labelledby="map-title">
        <h2 id="map-title" className="visually-hidden">
          Locație pe hartă
        </h2>
        <div className={styles.mapWrap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2464.590705038076!2d26.12739743186221!3d44.46450765190103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f9e24f3d548f%3A0xa6ba05c25fea30c6!2sBarber%20changes%20lives!5e0!3m2!1sen!2sro!4v1770385462223!5m2!1sen!2sro"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Barber changes lives pe Google Maps"
          />
        </div>
      </section>
    </>
  );
}
