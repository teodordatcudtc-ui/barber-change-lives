import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description: "Politica de confidențialitate și protecția datelor – Barber changes lives.",
};

export default function ConfidentialitatePage() {
  return (
    <article className="legal-page">
      <div className="legal-inner">
        <h1>Politica de confidențialitate</h1>
        <p className="legal-updated">
          Ultima actualizare: februarie 2025
        </p>
        <section aria-labelledby="intro">
          <h2 id="intro">Introducere</h2>
          <p>
            Barber changes lives (&quot;noi&quot;) respectă confidențialitatea vizitatorilor și clienților.
            Această politică descrie ce date colectăm, cum le folosim și ce drepturi ai în legătură cu ele.
          </p>
        </section>
        <section aria-labelledby="date">
          <h2 id="date">Ce date colectăm</h2>
          <p>
            Putem colecta: nume, număr de telefon, adresă de email, preferințe de servicii și data/oră programării,
            atunci când completezi formularul de contact sau programare. Datele sunt folosite exclusiv pentru a răspunde
            la solicitări și pentru a gestiona programările.
          </p>
        </section>
        <section aria-labelledby="folosire">
          <h2 id="folosire">Cum folosim datele</h2>
          <p>
            Folosim datele pentru: comunicare cu tine, programări, îmbunătățirea serviciilor și, dacă ai dat consimțământul,
            pentru informări despre oferte sau noutăți (opțional, poți renunța oricând).
          </p>
        </section>
        <section aria-labelledby="drepturi">
          <h2 id="drepturi">Drepturile tale</h2>
          <p>
            În conformitate cu GDPR, poți solicita acces la datele tale, rectificarea, ștergerea sau restricționarea
            prelucrării. Poți trimite o cerere la contact@barberchangeslives.ro.
          </p>
        </section>
        <section aria-labelledby="contact-dp">
          <h2 id="contact-dp">Contact</h2>
          <p>
            Pentru întrebări despre confidențialitate: contact@barberchangeslives.ro sau 0768 584 036.
          </p>
        </section>
        <p className="legal-back">
          <Link href="/">← Înapoi la pagina principală</Link>
        </p>
      </div>
    </article>
  );
}
