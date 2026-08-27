import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer-inner">
        <Link className="site-logo" href="/" aria-label="NGO home">
          NGO
        </Link>
      </div>
    </footer>
  );
}