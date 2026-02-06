"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "/", label: "Acasă" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/servicii", label: "Servicii" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header} role="banner">
      <div className={styles.headerTop}>
        <div className={styles.headerTopInner}>
          <span className={styles.headerWelcome}>Barber changes lives – Frizerie București</span>
          <a href="tel:0768584036" className={styles.headerPhone}>0768 584 036</a>
          <span className={styles.headerSep}>|</span>
          <a href="mailto:contact@barberchangeslives.ro" className={styles.headerEmail}>
            contact@barberchangeslives.ro
          </a>
          <nav className={styles.headerSocial} aria-label="Rețele sociale">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <span aria-hidden>f</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <span aria-hidden>ig</span>
            </a>
          </nav>
        </div>
      </div>

      <div className={styles.headerMain}>
        <div className={styles.headerMainInner}>
          <Link href="/" className={styles.headerLogo} aria-label="Barber changes lives – Acasă">
            <span className={styles.headerLogoIcon} aria-hidden>✂</span>
            <span className={styles.headerLogoText}>Barber changes lives</span>
          </Link>

          <nav
            id="main-nav"
            className={`${styles.headerNav} ${menuOpen ? styles.isOpen : ""}`}
            aria-label="Navigare principală"
          >
            <ul className={styles.headerNavList}>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={pathname === href ? styles.isActive : ""}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.headerCta}>
            <Link href="/contact#programare" className={styles.headerCtaBtn} aria-label="Programează-te">
              <span className={styles.headerCtaIcon} aria-hidden>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </span>
              <span className={styles.headerCtaText}>Programează-te</span>
            </Link>
          </div>

          <button
            type="button"
            className={styles.headerMenuBtn}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
