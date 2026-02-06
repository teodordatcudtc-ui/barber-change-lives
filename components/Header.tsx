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
            Barber changes lives
          </Link>

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
            <Link href="/contact#programare" className="btn-primary">
              Programează-te
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
