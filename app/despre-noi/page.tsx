import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Despre noi",
  description:
    "Misiunea și echipa Barber changes lives – frizerie premium în București. Povestea noastră și valorile care ne definesc.",
};

const TEAM = [
  { name: "Alexandru M.", role: "Frizer senior", desc: "Peste 10 ani experiență. Specializat în tunsori clasice și moderne." },
  { name: "Andrei P.", role: "Barber", desc: "Expert în conturare barbă și ras cu brici. Atenție la fiecare detaliu." },
  { name: "Mihai D.", role: "Frizer", desc: "Tunsori și îngrijire. Pasionat de stiluri contemporane și de îngrijirea clientului." },
];

export default function DespreNoiPage() {
  return (
    <>
      <section className="page-hero section-dark" aria-labelledby="about-hero-title">
        <div className="page-hero-inner">
          <h1 id="about-hero-title" className="page-hero-title">
            Despre noi
          </h1>
          <p className="page-hero-desc">
            Unde stilul întâlnește experiența – povestea Barber changes lives.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionStory}`} aria-labelledby="story-title">
        <div className={styles.storyInner}>
          <div className={styles.storyMedia}>
            <div className={styles.storyImgWrap}>
              <Image
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=640&q=80"
                alt="Interior frizerie – atmosferă"
                width={560}
                height={400}
                sizes="(max-width: 768px) 100vw, 560px"
              />
            </div>
          </div>
          <div className={styles.storyContent}>
            <h2 id="story-title" className={styles.sectionTitle}>
              Misiune & viziune
            </h2>
            <p>
              <strong>Barber changes lives</strong> a luat naștere din ideea că o tunsorie sau o barbă bine făcută
              nu e doar estetică – e încredere, respect și un moment doar al tău. Vrem ca fiecare client să plece
              nu doar arătat bine, ci simțindu-se bine.
            </p>
            <p>
              Ne aflăm în <strong>Bloc 4, Str. Lăptari Tei 16, București</strong> – un punct accesibil,
              unde atmosfera e relaxată și profesionalismul e la locul lui. Fie că vii pentru un quick cut
              sau pentru o experiență completă, echipa noastră e pregătită.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} section-offwhite`} aria-labelledby="team-title">
        <div className={styles.teamInner}>
          <h2 id="team-title" className={styles.sectionTitleCenter}>
            Echipa noastră
          </h2>
          <p className={styles.teamIntro}>
            Profesioniști pasionați, cu experiență în tunsori și îngrijire – gata să te ajute să arăți și să te simți bine.
          </p>
          <div className={styles.teamGrid}>
            {TEAM.map((member) => (
              <article key={member.name} className={styles.teamCard}>
                <div className={styles.teamCardPlaceholder} aria-hidden>
                  <span className={styles.teamCardInitials}>
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
                <p className={styles.teamDesc}>{member.desc}</p>
                <Link href="/contact#programare" className="btn-primary" style={{ padding: "0.6rem 1.2rem", fontSize: "0.8rem" }}>
                  Programează-te
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cta section-dark" aria-labelledby="about-cta-title">
        <div className="cta-inner">
          <h2 id="about-cta-title" className="cta-title">
            Vino să ne cunoști
          </h2>
          <p className="cta-desc">
            Te așteptăm la Bloc 4, Str. Lăptari Tei 16. Programează-te sau sună la 0768 584 036.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact
          </Link>
        </div>
      </section>
    </>
  );
}
