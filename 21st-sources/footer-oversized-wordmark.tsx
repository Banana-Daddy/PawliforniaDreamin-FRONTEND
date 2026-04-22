// Source: 21st.dev
// Query: "footer oversized typographic serif"
// Component: Modem Animated Footer
// Saved: 2026-04-22
//
// What we borrowed for Pawlifornia Dreamin':
// - Huge low-opacity brand wordmark behind the footer content (our oversized Fraunces "Pawlifornia Dreamin'")
// - Centered brand icon in a bordered card floating over the background text
// - Border-top section + min-height footer that gets its own "page"
// - Gradient fade at the bottom that tucks the oversized text into the page
// - Translated to vanilla HTML with `clamp()` fontSize and `bg-clip-text` gradient

"use client";
import React from "react";

interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: Array<{ icon: React.ReactNode; href: string; label: string }>;
  navLinks?: Array<{ label: string; href: string }>;
  creatorName?: string;
  creatorUrl?: string;
  brandIcon?: React.ReactNode;
  className?: string;
}

export const Footer = ({ brandName = "YourBrand", brandDescription, socialLinks = [], navLinks = [], creatorName, creatorUrl, brandIcon }: FooterProps) => {
  return (
    <section className="relative w-full mt-0 overflow-hidden">
      <footer className="border-t bg-background mt-20 relative">
        <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[40rem] relative p-4 py-10">
          <div className="flex flex-col mb-20 md:mb-0 w-full">
            <div className="w-full flex flex-col items-center">
              <span className="text-foreground text-3xl font-bold">{brandName}</span>
              <p className="text-muted-foreground text-center">{brandDescription}</p>
              {navLinks.length > 0 && (
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  {navLinks.map((link, i) => (<a key={i} href={link.href}>{link.label}</a>))}
                </div>
              )}
            </div>
          </div>
          <div className="mt-24 flex flex-col gap-2 items-center justify-between md:flex-row">
            <p className="text-base text-muted-foreground">©{new Date().getFullYear()} {brandName}. All rights reserved.</p>
          </div>
        </div>
        {/* The borrowed move: oversized brand text bleeding out the bottom, masked by a gradient */}
        <div className="bg-gradient-to-b from-foreground/20 via-foreground/10 to-transparent bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-32 font-extrabold tracking-tighter pointer-events-none select-none text-center px-4"
          style={{ fontSize: 'clamp(3rem, 12vw, 10rem)', maxWidth: '95vw' }}>
          {brandName.toUpperCase()}
        </div>
        <div className="absolute bottom-20 backdrop-blur-sm rounded-3xl bg-background/60 left-1/2 border-2 flex items-center justify-center p-3 -translate-x-1/2 z-10">
          <div className="w-24 h-24 bg-gradient-to-br from-foreground to-foreground/80 rounded-2xl flex items-center justify-center shadow-lg">
            {brandIcon}
          </div>
        </div>
        <div className="absolute bottom-34 h-1 bg-gradient-to-r from-transparent via-border to-transparent w-full left-1/2 -translate-x-1/2"></div>
        <div className="bg-gradient-to-t from-background via-background/80 blur-[1em] absolute bottom-28 w-full h-24"></div>
      </footer>
    </section>
  );
};
