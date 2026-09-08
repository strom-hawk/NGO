import Image from "next/image";
import Link from "next/link";
import { contactDetails } from "@/app/lib/contact-data";
import styles from "./site-footer.module.css";

const quickLinks = [
  "About Events",
  "Mailing List Discussion",
  "APNIC 62 CFP",
  "Register for Active Event",
];

const socialLinks = [
  { label: "Twitter", href: "#", icon: "𝕏" },
  { label: "LinkedIn", href: "#", icon: "in" },
];

function FooterBrand() {
  return (
    <div className={styles.brand}>
      <div className={styles.branding} aria-label="Rajvika Welfare Foundation home">
        <Image
          src="/ic_logo_footer_background.png"
          alt="Rajvika Welfare Foundation logo"
          width={420}
          height={180}
        />
      </div>

      <p className={styles.description}>
        Rajvika Welfare Foundation is a non-profit organisation dedicated to community welfare,
        social development, and empowering lives through sustainable impact.
      </p>

      <div className={styles.socials} aria-label="Social media links">
        {socialLinks.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className={styles.social}
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}

function FooterQuickLinks() {
  return (
    <div className={styles.column}>
      <h3>QUICK LINKS</h3>
      <ul>
        {quickLinks.map((link) => (
          <li key={link}>
            <Link href="#">{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterContact() {
  return (
    <div className={styles.column}>
      <h3>CONTACT US</h3>
      <ul className={styles.contactList}>
        <li>
          <span className={styles.icon} aria-hidden="true">
            ◉
          </span>
          <span>
            {contactDetails.location.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < contactDetails.location.split("\n").length - 1 && <br />}
              </span>
            ))}
          </span>
        </li>
        <li>
          <span className={styles.icon} aria-hidden="true">
            ☎
          </span>
          <span>Phone: {contactDetails.phone}</span>
        </li>
        <li>
          <span className={styles.icon} aria-hidden="true">
            ✉
          </span>
          <span>Email: {contactDetails.email}</span>
        </li>
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} site-container`}>
        <FooterBrand />
        <FooterQuickLinks />
        <FooterContact />
      </div>
    </footer>
  );
}