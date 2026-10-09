"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav } from "@/data/site";
import { Logo } from "./ui";
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (e.key === "Tab") {
        const links = panel.current?.querySelectorAll<HTMLAnchorElement>("a");
        if (!links?.length) return;
        const first = links[0],
          last = links[links.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          toggle.current?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          toggle.current?.focus();
        } else if (document.activeElement === toggle.current) {
          e.preventDefault();
          (e.shiftKey ? last : first).focus();
        }
      }
    };
    const resize = () => {
      if (window.innerWidth >= 1100) setOpen(false);
    };
    document.addEventListener("keydown", escape);
    window.addEventListener("resize", resize);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", escape);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  return (
    <>
      <div className="demo-bar">
        A fictional dental studio. A real design perspective.{" "}
        <Link href="/terms/">Explore the demo</Link>
        <ArrowUpRight size={12} aria-hidden="true" />
      </div>
      <header className="header">
        <div className="container nav-inner">
          <Logo />
          <nav aria-label="Main navigation" className="desktop-nav">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                aria-current={pathname.startsWith(n.href) ? "page" : undefined}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link href="/book-appointment/" className="button nav-cta">
            <span className="nav-label-desktop">Book a consultation</span>
            <span className="nav-label-mobile">Book a visit</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <button
            className="menu-toggle"
            ref={toggle}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        <div
          ref={panel}
          id="mobile-menu"
          className={`mobile-menu ${open ? "is-open" : ""}`}
          hidden={!open}
        >
          <nav aria-label="Mobile navigation">
            {nav.map((n, i) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                aria-current={pathname.startsWith(n.href) ? "page" : undefined}
              >
                <span className="small-label">0{i + 1}</span>
                {n.label}
                <ArrowUpRight size={22} aria-hidden="true" />
              </Link>
            ))}
            <Link
              href="/book-appointment/"
              className="button"
              onClick={() => setOpen(false)}
            >
              Book a consultation
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </nav>
          <p>
            Thoughtful dentistry. Confident smiles.
            <br />
            Brampton, Ontario · A demo by MSPixelPulse
          </p>
        </div>
      </header>
    </>
  );
}
