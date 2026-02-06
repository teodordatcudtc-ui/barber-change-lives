# Barber changes lives – Site web

Site multi-pagină Next.js pentru frizeria **Barber changes lives** (București). Design anti-template, asimetric, cu identitate vizuală distinctă pe secțiuni.

---

## Stack

- **Next.js 14** (App Router) – routing real multi-pagină, SEO, metadata, sitemap/robots generați
- **React 18** – componente client unde e nevoie (formular contact, meniu mobil)
- **TypeScript** – tipizare
- **Fonturi Google** – Syne (titluri), DM Sans (body)

**De ce App Router:** layout unic, Server Components implicit, metadata per pagină, sitemap/robots prin `sitemap.ts` / `robots.ts`, fără navigație pe anchor – fiecare pagină are URL propriu.

---

## Structură pagini

| URL | Descriere |
|-----|-----------|
| `/` | Acasă – hero puternic, welcome, preview servicii, CTA |
| `/despre-noi` | Misiune, viziune, echipă |
| `/servicii` | Listă servicii + linkuri către pagini dedicate |
| `/servicii/tunsori` | Pagină dedicată Tunsori |
| `/servicii/barba` | Pagină dedicată Barbă |
| `/servicii/ingrijire` | Pagină dedicată Îngrijire |
| `/galerie` | Galerie imagini – layout non-clasic (grid asimetric) |
| `/contact` | Formular programare validat + date contact + Google Maps |
| `/legal/confidentialitate` | Politica de confidențialitate |
| `/legal/termeni` | Termeni și condiții |
| `/sitemap.xml` | Generat din `app/sitemap.ts` |
| `/robots.txt` | Generat din `app/robots.ts` |

---

## Comenzi (copy-paste)

```bash
# Instalare dependențe
npm install

# Development (localhost:3000)
npm run dev

# Build pentru producție
npm run build

# Rulare după build
npm start

# Lint
npm run lint
```

**Variabilă opțională:** pentru sitemap și robots cu domeniul tău real, creează `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://barberchangeslives.ro
```

---

## Design

- **Paletă:** fundal întunecat (#0d0d0d) / crem (#f5f0e8), accent principal portocaliu (#c85a28), accent secundar roșu (#c41e3a) – dungă în hero/contact.
- **Tipografie:** Syne (titluri), DM Sans (body).
- **Hero:** layout asimetric, titlu dominant, CTA „Programează-te”, imagine + dungă roșie skew.
- **Secțiuni:** ritm rupt intenționat (dark / cream / offwhite), fără grile repetitive.

---

## SEO & accesibilitate

- Metadata (title, description) pe layout și pe pagini.
- `lang="ro"` pe `<html>`.
- Skip link „Sari la conținut” pentru tastatură.
- Focus visible pe butoane/linkuri.
- Formular contact: label, aria-required, aria-invalid, mesaje de eroare asociate.
- Iframe Google Maps cu `title` pentru screen readers.
- Sitemap și robots pentru indexare.

---

## TO-DO list verificare post-generare

- [ ] Rulează `npm install` apoi `npm run dev`; verifică că site-ul pornește fără erori.
- [ ] Parcurge toate paginile din meniu (Acasă, Despre noi, Servicii, Galerie, Contact) și verifică că se încarcă corect.
- [ ] Deschide `/servicii/tunsori`, `/servicii/barba`, `/servicii/ingrijire` – conținut și link „Programează-te”.
- [ ] Pe Contact: completează formularul cu date invalide (ex. email greșit) – trebuie să apară mesaje de validare.
- [ ] Pe Contact: completează formularul valid și trimite – trebuie să apară mesajul de succes.
- [ ] Verifică că harta Google Maps se încarcă pe pagina Contact.
- [ ] Deschide `/legal/confidentialitate` și `/legal/termeni` – conținut și link înapoi.
- [ ] Deschide `/sitemap.xml` și `/robots.txt` în browser – conținut generat corect.
- [ ] Testează pe mobil: meniul hamburger se deschide/închide, secțiunile sunt lizibile.
- [ ] Verifică că toate linkurile din footer (Despre noi, Servicii, Galerie, Contact, Confidentialitate, Termeni, Harta site) funcționează.
- [ ] (Opțional) Setează `NEXT_PUBLIC_SITE_URL` în `.env.local` și refă build; verifică sitemap/robots cu URL-ul corect.

---

## Conținut actual

- **Business:** Barber changes lives  
- **Telefon:** 0768 584 036  
- **Adresă:** Bloc 4, Str. Lăptari Tei 16, 023628 București  
- **Email:** contact@barberchangeslives.ro  
- **Google Maps:** iframe-ul din brief este integrat pe pagina Contact.

Imaginile folosesc Unsplash (barber/frizerie); pentru producție poți înlocui cu fotografii reale ale salonului.
