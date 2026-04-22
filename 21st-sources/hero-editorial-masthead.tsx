// Source: 21st.dev
// Query: "hero editorial magazine serif"
// Component: Hero 03 / Hero 04 by Ali Imam
// Saved: 2026-04-22
//
// What we borrowed for Pawlifornia Dreamin':
// - Oversized display wordmark with tight negative tracking as an editorial masthead
// - Tiny marginalia paragraphs flanking the big type (our "№ 01 · Vol II" treatment)
// - Asymmetric image placement with rotation + shadow (our polaroid hero frame)
// - Small metadata chips floating in negative space (our "Est. 2022" ring seal)
// - The "stacked overlapping photo cards" with slight offsets (adapted for hero polaroid)

import { Separator } from "@/components/ui/separator";
import { BadgeQuestionMark } from "@aliimam/icons";
import { Instagram, Threads, X } from "@aliimam/logos";
import React from "react";

export function HeroSection03() {
  return (
    <div className="min-h-screen relative">
      <div className="w-full absolute h-full z-0 bg-[radial-gradient(circle,_black_1px,_transparent_1px)] dark:bg-[radial-gradient(circle,_white_1px,_transparent_1px)] opacity-15 [background-size:20px_20px]"/>
        <header className="flex justify-between items-center px-8 pt-6">
          <div className="text-2xl font-bold italic">aliimam.in</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#" className="font-semibold hover:opacity-60 transition-opacity">Index</a>
            <a href="#" className="text-gray-400 hover:opacity-60 transition-opacity">About</a>
            <a href="#" className="text-gray-400 hover:opacity-60 transition-opacity">Work</a>
            <a href="#" className="text-gray-400 hover:opacity-60 transition-opacity">Archive</a>
            <a href="#" className="text-gray-400 hover:opacity-60 transition-opacity">Contact</a>
          </nav>
        </header>

        <main className="relative pt-20 pb-20">
          <div className="flex relative gap-2 px-6 md:items-center w-full flex-col justify-center">
            <div className="md:flex gap-6 items-center">
              <p className="text-xs text-muted-foreground md:text-sm text-start md:text-right leading-5 max-w-[220px] md:max-w-[180px]">
                I am india digital product designer based in Bokaro Steel City, India.
              </p>
              <h1 className="text-6xl md:text-7xl xl:text-[10rem] font-light leading-none tracking-wider">
                DIGITAL
              </h1>
            </div>

            <div className="md:flex gap-6 items-center">
              <h1 className="text-6xl md:text-7xl xl:text-[10rem] flex font-light leading-none tracking-wider">
                <span>PR</span>
                <BadgeQuestionMark type="solid" className="lg:size-40 size-14 md:size-18 text-primary" />
                <span>DUCTS</span>
              </h1>
              <p className="text-xs text-muted-foreground md:text-sm pt-8 leading-5 max-w-[250px] md:max-w-[180px]">
                Open to all forms of design collaboration, regardless of location and language.
              </p>
            </div>
          </div>
        </main>
    </div>
  );
}
