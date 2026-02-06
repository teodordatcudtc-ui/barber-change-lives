import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Tunsori, barbă, îngrijire – serviciile Barber changes lives. Prețuri și descrieri pentru fiecare serviciu.",
};

const SERVICES = [
  {
    slug: "tunsori",
    title: "Tunsori",
    shortDesc: "Tunsori pentru bărbați și femei – clasice, moderne sau la cererea ta.",
    price: "de la 50 RON",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80",
  },
  {
    slug: "barba",
    title: "Barbă",
    shortDesc: "Conturare, modelare, ras și îngrijire profesională a bărbii.",
    price: "de la 35 RON",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80",
  },
  {
    slug: "ingrijire",
    title: "Îngrijire",
    shortDesc: "Tratamente pentru piele, spălături și produse profesionale.",
    price: "de la 25 RON",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80",
  },
] as const;

export default function ServiciiPage() {
  return (
    <>
      <section className="page-hero section-dark" aria-labelledby="services-hero-title">
        <div className="page-hero-inner">
          <h1 id="services-hero-title" className="page-hero-title">
            Serviciile noastre
          </h1>
          <p className="page-hero-desc">
            De la tunsori la îngrijire completă – calitate și atenție la detaliu.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionServicesList}`} aria-labelledby="services-list-title">
        <div className={styles.servicesListInner}>
          <h2 id="services-list-title" className="visually-hidden">
            Lista servicii
          </h2>
          <div className={styles.servicesList}>
            {SERVICES.map((s) => (
              <article key={s.slug} className={styles.serviceItem}>
                <div className={styles.serviceItemMedia}>
                  <Image
                    src={s.image}
                    alt=""
                    width={400}
                    height={300}
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className={styles.serviceItemContent}>
                  <h3>{s.title}</h3>
                  <p>{s.shortDesc}</p>
                  <p className={styles.servicePrice}>{s.price}</p>
                  <Link href={`/servicii/${s.slug}`} className="btn-primary">
                    Detalii & programare
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
