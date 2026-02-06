import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerMain}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.footerLogo}>
              <span className={styles.footerLogoIcon} aria-hidden>✂</span>
              Barber changes lives
            </Link>
            <p className={styles.footerDesc}>
              Frizerie premium în București. Unde stilul întâlnește experiența – tunsori, barbă, îngrijire.
            </p>
            <div className={styles.footerSocial} aria-label="Rețele sociale">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">ig</a>
            </div>
          </div>
          <nav className={styles.footerLinks} aria-label="Linkuri utile">
            <h3 className={styles.footerHeading}>Linkuri</h3>
            <ul>
              <li><Link href="/despre-noi">Despre noi</Link></li>
              <li><Link href="/servicii">Servicii</Link></li>
              <li><Link href="/galerie">Galerie</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
          <nav className={styles.footerLegal} aria-label="Legal">
            <h3 className={styles.footerHeading}>Legal</h3>
            <ul>
              <li><Link href="/legal/confidentialitate">Confidentialitate</Link></li>
              <li><Link href="/legal/termeni">Termeni și condiții</Link></li>
              <li><Link href="/sitemap.xml">Harta site</Link></li>
            </ul>
          </nav>
          <div className={styles.footerContact}>
            <h3 className={styles.footerHeading}>Contact</h3>
            <p><a href="tel:0768584036">0768 584 036</a></p>
            <p><a href="mailto:contact@barberchangeslives.ro">contact@barberchangeslives.ro</a></p>
            <p>Bloc 4, Str. Lăptari Tei 16<br />023628 București</p>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomInner}>
          <p>© {new Date().getFullYear()} Barber changes lives. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}
