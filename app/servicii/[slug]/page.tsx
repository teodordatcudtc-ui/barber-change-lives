import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

const SERVICES: Record<
  string,
  { title: string; description: string; longDesc: string; price: string; image: string }
> = {
  tunsori: {
    title: "Tunsori",
    description: "Tunsori pentru bărbați și femei – clasice, moderne sau la cererea ta.",
    longDesc:
      "Oferim tunsori pentru toate preferințele: de la classic cut și fade la tunsori moderne și creative. Folosim echipament de calitate și tehnici adaptate tipului tău de păr. Fiecare tunsorie include consultație și finisare (spălare, uscare, produse).",
    price: "de la 50 RON",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80",
  },
  barba: {
    title: "Barbă",
    description: "Conturare, modelare, ras și îngrijire profesională a bărbii.",
    longDesc:
      "Servicii complete pentru barbă: conturare și modelare cu mașină și lama, ras clasic cu brici, tratamente cu uleiuri și balsam. Te ajutăm să alegi forma potrivită și îți oferim sfaturi de îngrijire acasă.",
    price: "de la 35 RON",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80",
  },
  ingrijire: {
    title: "Îngrijire",
    description: "Tratamente pentru piele, spălături și produse profesionale.",
    longDesc:
      "Spălături profesionale, măști și tratamente pentru scalp și piele. Folosim produse de calitate pentru a menține părul și pielea sănătoase. Poți adăuga aceste servicii la orice tunsorie sau barbă.",
    price: "de la 25 RON",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80",
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES[slug];
  if (!service) return { title: "Serviciu" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES[slug];
  if (!service) notFound();

  return (
    <>
      <section className="page-hero section-dark" aria-labelledby="service-hero-title">
        <div className="page-hero-inner">
          <h1 id="service-hero-title" className="page-hero-title">
            {service.title}
          </h1>
          <p className="page-hero-desc">{service.description}</p>
          <p className="page-hero-price">{service.price}</p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionServiceDetail}`} aria-labelledby="detail-title">
        <div className={styles.detailInner}>
          <div className={styles.detailMedia}>
            <div className={styles.detailImgWrap}>
              <Image
                src={service.image}
                alt=""
                width={600}
                height={450}
                sizes="(max-width: 768px) 100vw, 600px"
                priority
              />
            </div>
          </div>
          <div className={styles.detailContent}>
            <h2 id="detail-title" className={styles.sectionTitle}>
              Ce include
            </h2>
            <p>{service.longDesc}</p>
            <p className={styles.detailPrice}>{service.price}</p>
            <Link href="/contact#programare" className="btn-primary">
              Programează-te
            </Link>
          </div>
        </div>
        <nav className={styles.detailBack} aria-label="Navigare secundară">
          <Link href="/servicii">← Toate serviciile</Link>
        </nav>
      </section>
    </>
  );
}
