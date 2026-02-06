import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Atmosferă și momente la Barber changes lives – frizerie București. Imagini din salon și servicii.",
};

const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80", alt: "Tunsorie" },
  { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80", alt: "Interior" },
  { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80", alt: "Barbă" },
  { src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80", alt: "Îngrijire" },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80", alt: "Atmosferă" },
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80", alt: "Detaliu" },
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4e035?w=600&q=80", alt: "Servicii" },
  { src: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600&q=80", alt: "Frizer la lucru" },
];

export default function GaleriePage() {
  return (
    <>
      <section className="page-hero section-dark" aria-labelledby="gallery-hero-title">
        <div className="page-hero-inner">
          <h1 id="gallery-hero-title" className="page-hero-title">
            Galerie
          </h1>
          <p className="page-hero-desc">
            Atmosferă, momente și detalii la Barber changes lives.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionGallery}`} aria-labelledby="gallery-grid-title">
        <h2 id="gallery-grid-title" className="visually-hidden">
          Imagini galerie
        </h2>
        <div className={styles.galleryWrap}>
          <div className={styles.galleryGrid}>
            {GALLERY_IMAGES.map((img, i) => {
              const layoutClass = [styles.galleryItem1, null, styles.galleryItem3, null, styles.galleryItem5, null, styles.galleryItem7, null][i];
              return (
              <div key={i} className={`${styles.galleryItem} ${layoutClass ?? ""}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={300}
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
              </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
