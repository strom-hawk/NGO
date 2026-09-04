import Link from "next/link";
import styles from "./help-cta.module.css";

export function HelpCta() {
  return (
    <section className={styles.helpCta} aria-labelledby="help-cta-title">
      <div className={`site-container ${styles.helpCtaInner}`}>
        <div className={styles.helpCtaMark} aria-hidden="true">
          <span>?</span>
        </div>

        <div className={styles.helpCtaCopy}>
          <p className={styles.helpCtaEyebrow}>Let&apos;s make a difference together</p>
          <h2 className={styles.helpCtaHeading} id="help-cta-title">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className={styles.helpCtaDescription}>
            Have an idea, a question, or a way to help? Start a conversation with our team.
          </p>
        </div>

        <div className={styles.helpCtaActions}>
          <Link className={styles.helpCtaPrimary} href="/contact">
            Contact us <span aria-hidden="true">-&gt;</span>
          </Link>
          <Link className={styles.helpCtaSecondary} href="/events">
            Explore events
          </Link>
        </div>
      </div>
    </section>
  );
}
