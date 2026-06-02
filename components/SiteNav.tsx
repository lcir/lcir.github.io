"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";

const navItems = [
  { href: "/", label: { cz: "Home", en: "Home" } },
  { href: "/cv", label: { cz: "CV", en: "Resume" } },
  { href: "/portfolio", label: { cz: "Portfolio", en: "Portfolio" } }
];

export function SiteNav() {
  const pathname = usePathname();
  const { lang } = useLanguage();

  return (
    <header className="site-nav" aria-label="Primary navigation">
      <nav className="nav-links">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              className={isActive ? "active" : ""}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label[lang]}
            </Link>
          );
        })}
      </nav>
      <LanguageToggle />
    </header>
  );
}
