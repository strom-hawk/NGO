import Image from "next/image";
import Link from "next/link";
import { contactDetails } from "@/app/lib/contact-data";

const quickLinks = [
  "About NGO Events",
  "Mailing List Discussion",
  "Present at NGO",
  "APNIC 62 CFP",
  "Register for Active Event",
];

const socialLinks = [
  { label: "Twitter", href: "#", icon: "𝕏" },
  { label: "LinkedIn", href: "#", icon: "in" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer-inner">
        <div className="site-footer-brand">
          <div className="site-footer-branding" aria-label="Rajvika Welfare Foundation home">
            <Image
              src="/ic_logo_footer_background.png"
              alt="Rajvika Welfare Foundation logo"
              width={420}
              height={180}
            />
          </div>

          <p className="site-footer-description">
            NGO (NGO) is a community forum dedicated to
            sharing operational knowledge, improving internet infrastructure, and
            fostering collaboration among network engineers and ISPs in India.
          </p>

          <div className="site-footer-socials" aria-label="Social media links">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="site-footer-social"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="site-footer-column">
          <h3>QUICK LINKS</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link}>
                <Link href="#">{link}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer-column">
          <h3>CONTACT US</h3>
          <ul className="site-footer-contact-list">
            <li>
              <span className="site-footer-icon" aria-hidden="true">
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
              <span className="site-footer-icon" aria-hidden="true">
                ☎
              </span>
              <span>Phone: {contactDetails.phone}</span>
            </li>
            <li>
              <span className="site-footer-icon" aria-hidden="true">
                ✉
              </span>
              <span>Email: {contactDetails.email}</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}