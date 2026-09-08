"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HelpCtaHeader } from "./help-cta-header/help-cta-header";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="site-container site-header-inner">
        <Link className="site-logo" href="/" aria-label="Rajvika Welfare Foundation home">
          <Image
            src="/ic_logo.png"
            alt="Rajvika Welfare Foundation logo"
            width={440}
            height={170}
            priority
          />
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="site-navigation">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <HelpCtaHeader />
      </div>
    </header>
  );
}