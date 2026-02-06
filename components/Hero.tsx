"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroBg} aria-hidden />
      {/* Pe mobil: imagine ca fundal + overlay */}
      <div className={styles.heroMobileBg} aria-hidden>
        <Image
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80"
          alt=""
          fill
          priority
          className={styles.heroMobileBgImg}
          sizes="100vw"
        />
      </div>
      <div className={styles.heroOverlay} aria-hidden />
      <div className={styles.heroContent}>
        <div className={`${styles.heroTextWrap} ${styles.heroAnim}`}>
          <h1 id="hero-title" className={styles.heroTitle}>
            <span className={styles.heroTitleLine1}>Barber changes</span>
            <br />
            <span className={styles.heroTitleLine2}>lives</span>
          </h1>
          <p className={styles.heroDesc}>
            Experiență premium de frizerie în București. Tunsori precise, barbă îngrijită și un moment doar al tău – unde stilul întâlnește experiența.
          </p>
          <div className={styles.heroCta}>
            <Link href="/contact#programare" className="btn-primary">
              Programează-te acum
            </Link>
            <Link href="/servicii" className={styles.heroLinkSec}>
              Vezi serviciile
            </Link>
          </div>
        </div>
        <div className={styles.heroImageWrap}>
          <div className={styles.heroImageInner}>
            <Image
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80"
              alt="Frizer la lucru – tuns și barbă"
              width={700}
              height={520}
              priority
              className={styles.heroImg}
              sizes="(max-width: 900px) 100vw, 700px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
