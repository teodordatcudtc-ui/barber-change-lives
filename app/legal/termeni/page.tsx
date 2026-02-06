import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  description: "Termeni și condiții de utilizare – Barber changes lives.",
};

export default function TermeniPage() {
  return (
    <article className="legal-page">
      <div className="legal-inner">
        <h1>Termeni și condiții</h1>
        <p className="legal-updated">
          Ultima actualizare: februarie 2025
        </p>
        <section aria-labelledby="scope">
          <h2 id="scope">Aplicabilitate</h2>
          <p>
            Acești termeni se aplică utilizării site-ului Barber changes lives și serviciilor oferite.
            Accesând site-ul sau făcând o programare, accepți acești termeni.
          </p>
        </section>
        <section aria-labelledby="servicii">
          <h2 id="servicii">Servicii și programări</h2>
          <p>
            Programările făcute prin site sau telefon sunt supuse disponibilității. Ne rezervăm dreptul
            de a confirma sau reprograma. Anulările sunt acceptate cu un preaviz rezonabil (cel puțin câteva ore).
          </p>
        </section>
        <section aria-labelledby="prețuri">
          <h2 id="prețuri">Prețuri</h2>
          <p>
            Prețurile afișate sunt orientative și pot fi actualizate. Prețul final va fi comunicat la salon
            în funcție de serviciul ales.
          </p>
        </section>
        <section aria-labelledby="prop">
          <h2 id="prop">Proprietate intelectuală</h2>
          <p>
            Conținutul site-ului (texte, imagini, logo) aparține Barber changes lives și este protejat.
            Nu este permisă copierea sau utilizarea fără acord.
          </p>
        </section>
        <section aria-labelledby="contact-termeni">
          <h2 id="contact-termeni">Contact</h2>
          <p>
            Pentru întrebări legate de termeni: contact@barberchangeslives.ro sau 0768 584 036.
          </p>
        </section>
        <p className="legal-back">
          <Link href="/">← Înapoi la pagina principală</Link>
        </p>
      </div>
    </article>
  );
}
