import { contactDetails } from "@/app/lib/contact-data";
import styles from "./help-cta-footer.module.css";

export function HelpCtaFooter() {
  const displayPhone = contactDetails.phone.replace(/-/g, " ");

  return (
    <div className={styles.helpCtaFooter}>
      <span className={styles.helpCtaFooterIcon} aria-hidden="true">
        ☎
      </span>
      <span className={styles.helpCtaFooterCopy}>
        <span className={styles.helpCtaFooterLabel}>Call us on</span>
        <span className={styles.helpCtaFooterNumber}>{displayPhone}</span>
      </span>
    </div>
  );
}
