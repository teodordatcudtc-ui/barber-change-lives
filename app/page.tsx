import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { IconScissors, IconRazor, IconCare } from "@/components/ServiceIcons";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className={`${styles.section} ${styles.sectionWelcome}`} aria-labelledby="welcome-title">
        <div className={styles.welcomeInner}>
          <div className={styles.welcomeMedia}>
            <div className={styles.welcomeImgWrap}>
              <Image
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80"
                alt="Atmosferă la Barber changes lives"
                width={520}
                height={400}
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </div>
            <div className={styles.welcomeShape} aria-hidden />
          </div>
          <div className={styles.welcomeContent}>
            <h2 id="welcome-title" className={styles.sectionTitle}>
              Bine ai venit la<br />
              <span className="highlight">Barber changes lives</span>
            </h2>
            <p>
              În Bloc 4, pe Str. Lăptari Tei 16, am creat un spațiu unde fiecare tuns și fiecare barbă contează.
              Nu vindem doar servicii – oferim experiență, încredere și un moment de răgaz.
            </p>
            <p>
              Echipa noastră lucrează cu pasiune pentru a-ți oferi un look la care te simți bine.
              Fie că alegi un classic cut sau ceva mai bold, suntem aici pentru tine.
            </p>
            <Link href="/despre-noi" className="btn-primary">
              Despre noi
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.section} section-dark ${styles.sectionDark}`} aria-labelledby="services-preview-title">
        <div className={styles.servicesPreviewInner}>
          <h2 id="services-preview-title" className={styles.sectionTitleLight}>
            Serviciile noastre
          </h2>
          <p className={styles.sectionIntro}>
            De la tunsori clasice la îngrijire completă a bărbii – totul la un nivel care face diferența.
          </p>
          <div className={styles.servicesCards}>
            <Link href="/servicii/tunsori" className={styles.serviceCard}>
              <span className={styles.serviceCardIcon} aria-hidden><IconScissors /></span>
              <h3>Tunsori</h3>
              <p>Tunsori pentru bărbați și femei, clasice sau moderne.</p>
            </Link>
            <Link href="/servicii/barba" className={styles.serviceCard}>
              <span className={styles.serviceCardIcon} aria-hidden><IconRazor /></span>
              <h3>Barbă</h3>
              <p>Conturare, modelare și îngrijire profesională.</p>
            </Link>
            <Link href="/servicii/ingrijire" className={styles.serviceCard}>
              <span className={styles.serviceCardIcon} aria-hidden><IconCare /></span>
              <h3>Îngrijire</h3>
              <p>Tratamente și produse pentru piele și păr.</p>
            </Link>
          </div>
          <Link href="/servicii" className={`btn-primary ${styles.btnLight}`}>
            Toate serviciile
          </Link>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionWhy}`} aria-labelledby="why-title">
        <div className={styles.whyInner}>
          <h2 id="why-title" className={styles.sectionTitle}>
            De ce Barber changes lives?
          </h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <span className={styles.whyNumber}>01</span>
              <h3>Experiență & atenție la detaliu</h3>
              <p>Fiecare tuns și fiecare barbă sunt tratate cu același nivel de profesionalism și grijă.</p>
            </div>
            <div className={styles.whyCard}>
              <span className={styles.whyNumber}>02</span>
              <h3>Locație accesibilă</h3>
              <p>Ne găsești ușor în Bloc 4, Str. Lăptari Tei 16 – parcare și transport la îndemână.</p>
            </div>
            <div className={styles.whyCard}>
              <span className={styles.whyNumber}>03</span>
              <h3>Atmosferă relaxată</h3>
              <p>Un spațiu unde te simți bine – de la primul contact până la rezultatul final.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionCta} section-dark`} aria-labelledby="cta-title">
        <div className={styles.ctaInner}>
          <h2 id="cta-title" className={styles.ctaTitle}>
            Pregătit pentru o experiență nouă?
          </h2>
          <p className={styles.ctaDesc}>
            Programează-te online sau dă-ne un semn. Te așteptăm la Bloc 4, Str. Lăptari Tei 16.
          </p>
          <Link href="/contact#programare" className="btn-primary">
            Programează-te
          </Link>
        </div>
      </section>
    </>
  );
}
