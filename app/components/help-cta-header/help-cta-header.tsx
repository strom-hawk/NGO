import { contactDetails } from "@/app/lib/contact-data";
import styles from "./help-cta-header.module.css";

export function HelpCtaHeader() {
  const displayPhone = contactDetails.phone.replace(/-/g, " ");

  return (
    <div className={styles.helpCtaHeader}>
      <span className={styles.helpCtaHeaderIcon} aria-hidden="true">
        ☎
      </span>
      <span className={styles.helpCtaHeaderCopy}>
        <span className={styles.helpCtaHeaderLabel}>Call us on</span>
        <span className={styles.helpCtaHeaderNumber}>{displayPhone}</span>
      </span>
    </div>
  );
}
