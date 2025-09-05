"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

export default function Page() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="relative w-full">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <NavbarButton variant="secondary">Login</NavbarButton>
              <NavbarButton variant="primary">Book a call</NavbarButton>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-''{idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Login
                </NavbarButton>
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                >
                  Book a call
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
      <HeroParallax products={products} />
   
    {/* Feature section */}
      <section className="relative overflow-hidden rounded-3xl mt-4 mr-6 mb-4 ml-6 border border-black/10 px-6">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-100 to-lime-100"></div>
      <div className="max-w-7xl md:py-20 mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="FeatureMain">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-neutral-900 tracking-tight break-words" style={{}}>Turn bold ideas into products — <span className="font-normal italic font-instrument-serif" style={{}}>growth without the noise</span></h1>
            <p className="mt-5 text-neutral-700 leading-relaxed font-sans">
              We partner with ambitious teams to craft delightful interfaces, validate quickly, and scale with data-backed decisions.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 hover:bg-black transition text-sm font-medium text-white bg-neutral-900 rounded-full pt-3 pr-6 pb-3 pl-6">
                
                Get started
              </a>
              <a href="#" className="inline-flex items-center gap-2 hover:bg-white/60 transition text-sm font-medium border-black/10 border rounded-full pt-3 pr-6 pb-3 pl-6">
                
                See our work
              </a>
            </div><div className="mt-8 space-y-6">
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600">
        <polyline points="20 6 9 17 5 11"></polyline>
      </svg>
    </div>
    <div>
      <h4 className="text-base font-semibold text-neutral-900 mb-1">Design-First Approach</h4>
      <p className="text-sm text-neutral-600 leading-relaxed">We start with deep user research and strategic thinking before touching any pixels. Every interface decision is backed by data and user insights.</p>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    </div>
    <div className="">
      <h4 className="text-base font-semibold text-neutral-900 mb-1">Growth-Driven Results</h4>
      <p className="text-sm text-neutral-600 leading-relaxed">Our designs don't just look beautiful—they convert. We optimize for key metrics like user engagement, retention, and revenue growth.</p>
    </div>
  </div>

  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
      </svg>
    </div>
    <div className="">
      <h4 className="text-base font-semibold text-neutral-900 mb-1">Lightning-Fast Delivery</h4>
      <p className="text-sm text-neutral-600 leading-relaxed">Ship features in days, not months. Our streamlined process and experienced team means you get professional results without the typical agency overhead.</p>
    </div>
  </div>
</div>

            {/* Client love */}
            
          </div>

          {/* Product demo card */}
          <div className="relative">
            <article className="group relative overflow-hidden transition-shadow hover:shadow-md shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-neutral-900 border-neutral-800 border rounded-3xl">
  <div className="sm:p-8 pt-6 pr-6 pb-6 pl-6">
    <div className="relative h-56 sm:h-64 rounded-2xl bg-neutral-900 ring-1 ring-inset ring-white/5 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full text-neutral-800" aria-hidden="true">
        <defs>
          <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" fill="none" stroke="currentColor" strokeWidth="1"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" className=""></rect>
      </svg>
      <span className="absolute left-6 top-4 h-0.5 w-10 rounded bg-sky-500"></span>
      <div className="absolute right-6 top-8 sm:right-10 sm:top-10 w-[78%] rounded-2xl border border-neutral-800 bg-neutral-900 shadow-lg">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800">
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-800"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-800"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-800"></span>
          <div className="ml-3 h-2 w-24 rounded bg-neutral-800"></div>
        </div>
        <div className="grid grid-cols-3 gap-3 p-4">
          <div className="col-span-2 rounded-lg border border-neutral-800 overflow-hidden">
            <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ca446c1b-d6e1-4316-9864-4d6306b13cf4_800w.jpg" alt="Minimal 3D render" className="h-28 w-full object-cover"/>
          </div>
          <div className="rounded-lg border border-neutral-800 overflow-hidden">
            <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7e430a8d-376b-4aba-8993-1350529e5946_800w.jpg" alt="Mountain landscape" className="h-28 w-full object-cover"/>
          </div>
          <div className="rounded-lg border border-neutral-800 bg-neutral-900 h-24"></div>
          <div className="rounded-lg border border-neutral-800 bg-neutral-900 h-24"></div>
          <div className="rounded-lg border border-neutral-800 bg-neutral-900 h-24"></div>
        </div>
      </div>
    </div>
    <div className="sm:mt-8 mt-6">
  <div className="flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-neutral-400">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" className=""></path>
      <circle cx="12" cy="12" r="4"></circle>
    </svg>
    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-100">Data-Driven Growth Engine</h3>
  </div>
  <p className="mt-3 text-neutral-400 text-sm">Transform your product metrics with our proven design systems and growth optimization framework that scales with ambitious teams.</p>
  <div className="mt-4">
    <a href="#" className="inline-flex items-center gap-2 text-xs font-medium text-neutral-100 hover:text-neutral-300">
      See growth results
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
      </svg>
    </a>
  </div>
</div>
  </div>
</article>
            {/* Sub card */}
            <div className="relative w-full max-w-xl mt-8">
  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] h-9 shadow-[0_6px_20px_rgba(16,185,129,0.25)] bg-emerald-900/10 rounded-2xl"></div>
  <article className="relative overflow-hidden ring-1 ring-white/15 text-white bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl shadow-2xl">
    <div className="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-white/40 to-transparent"></div>
    <div className="sm:p-5 pt-4 pr-4 pb-4 pl-4">
      <div className="flex items-start gap-3">
        <div className="shrink-0 rounded-xl bg-gradient-to-b from-slate-900 to-slate-800 p-2.5 ring-1 ring-white/10 shadow-md">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" className=""></path>
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-[15px] sm:text-base font-semibold tracking-tight truncate">Growth Opportunity: Sustainability Focus</h3>
            <span className="text-xs sm:text-sm text-white/85 shrink-0">2m ago</span>
          </div>
          <p className="mt-1 text-sm leading-6 text-white/90">
            Consider highlighting your eco-friendly practices and sustainable approach. This resonates strongly with modern consumers and builds trust.
          </p>
        </div>
      </div>
    </div>
  </article>
</div>
</div>
        </div>

        {/* Logo strip */}
        <div className="border-black/10 border-t mt-12 pt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 place-items-center text-neutral-500">
            <div className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="asterisk" className="lucide lucide-asterisk h-4 w-4"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg><span className="text-sm font-medium font-sans">Lumen</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="sparkles" className="lucide lucide-sparkles h-4 w-4"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg><span className="text-sm font-medium font-sans">Oxide</span>
            </div>
            <div className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="orbit" className="lucide lucide-orbit w-[16px] h-[16px]" style={{width: "16px", height: "16px", color: "rgb(115, 115, 115)"}}><path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"></path><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"></path><circle cx="12" cy="12" r="3"></circle><circle cx="19" cy="5" r="2"></circle><circle cx="5" cy="19" r="2"></circle></svg><span className="text-sm font-medium font-sans">Orbit</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="blocks" className="lucide lucide-blocks h-4 w-4"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect x="14" y="2" width="8" height="8" rx="1"></rect></svg><span className="text-sm font-medium font-sans">Miloove</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="beaker" className="lucide lucide-beaker h-4 w-4"><path d="M4.5 3h15"></path><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path><path d="M6 14h12"></path></svg><span className="text-sm font-medium font-sans">Labify</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="box" className="lucide lucide-box h-4 w-4"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg><span className="text-sm font-medium font-sans">Pallet</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Metrics band */}
    

    {/* Services */}
    <section className="md:py-20 bg-white pt-16 pb-16">
      <div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
        <div className="flex items-end justify-between gap-6">
          <div className="">
            
            <h2 className="sm:text-4xl text-3xl font-medium text-neutral-900 tracking-tight" id="aura-emeegzwus">Our services —<span className="font-normal italic font-instrument-serif">designed to scale</span></h2><p className="mt-3 text-neutral-600 max-w-2xl font-sans">
              We build exceptional product experiences with a focus on clarity, speed, and measurable outcomes.
            </p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-black font-sans">
            Explore services <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
  <div className="hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-slate-50 border-slate-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-lg">
    <div className="flex items-start justify-between mb-4">
      <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-emerald-600">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      </div>
      <button className="text-slate-400 hover:text-slate-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
    </div>
    <h3 className="text-lg font-semibold text-slate-900 mb-2">Product Strategy</h3>
    <p className="text-sm text-slate-600 mb-6">Transform ideas into actionable roadmaps with user research, competitive analysis, and strategic planning.</p>
    <div className="space-y-3 text-sm">
      <div className="flex items-center justify-between">
        <span className="text-slate-700">Research &amp; Discovery</span>
        <span className="text-emerald-600 font-medium">✓</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-slate-700">Market Analysis</span>
        <span className="text-emerald-600 font-medium">✓</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-slate-700">Product Roadmap</span>
        <span className="text-emerald-600 font-medium">✓</span>
      </div>
    </div>
  </div>

  <div className="hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-lg">
    <div className="flex items-start justify-between mb-4">
      <div className="h-10 w-10 rounded-full bg-blue-900 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-400">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" className=""></path>
          <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
          <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
          <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" x2="12" y1="22.08" y2="12"></line>
        </svg>
      </div>
      <button className="text-gray-500 hover:text-gray-300 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
    </div>
    <h3 className="text-lg font-semibold text-white mb-2">Design Systems</h3>
    <p className="text-sm text-gray-300 mb-6">Create scalable design foundations with components, patterns, and guidelines that grow with your product.</p>
    <div className="space-y-3 text-sm">
      <div className="flex items-center justify-between">
        <span className="text-gray-300">Component Library</span>
        <span className="text-blue-400 font-medium">✓</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-300">Brand Guidelines</span>
        <span className="text-blue-400 font-medium">✓</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-300">Design Tokens</span>
        <span className="text-blue-400 font-medium">✓</span>
      </div>
    </div>
  </div>

  <div className="hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-slate-50 border-slate-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-lg">
    <div className="flex items-start justify-between mb-4">
      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-purple-600">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      </div>
      <button className="text-slate-400 hover:text-slate-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
    </div>
    <h3 className="text-lg font-semibold text-slate-900 mb-2">Growth Optimization</h3>
    <p className="text-sm text-slate-600 mb-6">Data-driven optimization to increase conversions, retention, and user engagement through testing and analytics.</p>
    <div className="space-y-3 text-sm">
      <div className="flex items-center justify-between">
        <span className="text-slate-700">A/B Testing</span>
        <span className="text-purple-600 font-medium">✓</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-slate-700">Analytics Setup</span>
        <span className="text-purple-600 font-medium">✓</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-slate-700">Conversion Rate</span>
        <span className="text-purple-600 font-medium">+24%</span>
      </div>
    </div>
  </div>
</div>
      </div>
    </section><section className="pt-10 pb-10" id="aura-emeeh0qpk">
      <div className="max-w-7xl mx-auto px-6">
        <div className="sm:p-10 text-white bg-emerald-900 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5dcd0c14-fe23-45bd-8342-afa6ed57a1ad_3840w.jpg)] bg-cover rounded-3xl pt-8 pr-8 pb-8 pl-8" style={{}}>
          <div className="grid md:grid-cols-4 gap-8 items-start">
            <div className="">
              <p className="text-3xl font-medium tracking-tight" style={{}}>68k+</p>
              <p className="text-sm text-emerald-100 mt-1 font-sans">Interfaces shipped</p>
            </div>
            <div className="">
              <p className="text-3xl font-medium tracking-tight" style={{}}>15×</p>
              <p className="text-sm text-emerald-100 mt-1 font-sans">Faster iterations</p>
            </div>
            <div className="">
              <p className="text-3xl font-medium tracking-tight" style={{}}>10M</p>
              <p className="text-sm text-emerald-100 mt-1 font-sans">Targeted conversions</p>
            </div>
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="map-pin" className="lucide lucide-map-pin h-5 w-5 mt-1"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <p className="text-sm text-green-950">
                Seamless mobile and web experiences backed by research, design systems, and clear communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section><section className="relative md:py-20 bg-neutral-50 pt-16 pb-16">
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-100 to-white"></div>
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900">Pricing plans — <span className="font-normal italic font-instrument-serif">for every team</span></h2>
      <p className="mt-3 text-neutral-600">Transparent pricing for startups to enterprises, with room to scale as you grow.</p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {/* Basic */}
      <div className="relative rounded-2xl border border-neutral-200 bg-gradient-to-b from-emerald-50/60 to-white p-8 shadow-sm hover:shadow-lg transition-shadow">
        <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">Starter</span>
        <div className="mt-6">
          <div className="">
            <div className="text-4xl font-medium tracking-tight text-neutral-900">$1250<span className="ml-1 text-neutral-600 text-base italic font-normal">/month</span></div>
            <p className="mt-2 text-sm text-neutral-600">Best for small one‑off projects and quick experiments.</p>
          </div>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"></path></svg>
              <span className="text-neutral-700">2 social media platforms</span>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"></path></svg>
              <span className="text-neutral-700">Essential SEO</span>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"></path></svg>
              <span className="text-neutral-700">Monthly report</span>
            </li>
          </ul>
          <a href="#" className="mt-8 w-full inline-flex items-center justify-center rounded-full border border-emerald-300 px-6 py-3 text-sm font-medium text-neutral-800 hover:bg-emerald-50 transition">
            Choose Starter
          </a>
        </div>
      </div>

      {/* Standard (featured) */}
      <div className="relative rounded-2xl border-2 border-emerald-900 bg-emerald-900 p-8 shadow-lg">
        <span className="inline-flex items-center rounded-full bg-emerald-800 px-3 py-1 text-xs font-medium text-emerald-100">Growth</span>
        <div className="mt-6 text-white">
          <div className="">
            <div className="text-4xl font-medium tracking-tight text-white">$3200<span className="ml-1 text-emerald-100 text-base italic font-normal">/month</span></div>
            <p className="mt-2 text-sm text-emerald-100">For growing teams with a steady roadmap and increasing scope.</p>
          </div>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"></path></svg>
              <span className="text-emerald-100">5 social media platforms</span>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"></path></svg>
              <span className="text-emerald-100">SEO + content marketing</span>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"></path></svg>
              <span className="text-emerald-100">PPC management</span>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"></path></svg>
              <span className="text-emerald-100">Weekly reports</span>
            </li>
          </ul>
          <a href="#" className="mt-8 w-full inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-900 px-6 py-3 text-sm font-medium hover:bg-emerald-200 transition">
            Choose Growth
          </a>
        </div>
      </div>

      {/* Premium */}
      <div className="relative rounded-2xl border border-neutral-200 bg-gradient-to-b from-white to-emerald-50/40 p-8 shadow-sm hover:shadow-lg transition-shadow">
        <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">Scale</span>
        <div className="mt-6">
          <div className="">
            <div className="text-4xl font-medium tracking-tight text-neutral-900">$5900<span className="ml-1 text-neutral-600 text-base italic font-normal">/month</span></div>
            <p className="mt-2 text-sm text-neutral-600">Dedicated, ongoing partnership for complex, multi‑channel programs.</p>
          </div>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"></path></svg>
              <span className="text-neutral-700">Full‑service, multi‑channel marketing</span>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"></path></svg>
              <span className="text-neutral-700">Advanced SEO + content strategy</span>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 " stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"></path></svg>
              <span className="text-neutral-700">Lifecycle email &amp; CRM</span>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M20 6 9 17l-5-5"></path></svg>
              <span className="text-neutral-700">Dedicated account team</span>
            </li>
          </ul>
          <a href="#" className="mt-8 w-full inline-flex items-center justify-center rounded-full border border-emerald-300 px-6 py-3 text-sm font-medium text-neutral-800 hover:bg-emerald-50 transition">
            Choose Scale
          </a>
        </div>
      </div>
    </div>

    <div className="mt-12 text-center">
      <p className="text-sm text-neutral-600">Simple, flexible plans. Cancel anytime.</p>
    </div>
  </div>
</section><section className="py-16 md:py-20 bg-white">
  <div className="max-w-4xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="sm:text-4xl text-3xl font-medium text-neutral-900 tracking-tight">Frequently asked — <span className="font-normal italic font-instrument-serif">questions</span></h2>
      <p className="mt-3 text-neutral-600">Everything you need to know about working with NOVA.</p>
    </div>

    <div className="space-y-6">
      <div className="border border-neutral-200 rounded-2xl p-6 hover:shadow-sm transition-shadow">
        <h3 className="text-lg font-semibold text-neutral-900 mb-3">How does the subscription model work?</h3>
        <p className="text-neutral-600 text-sm leading-relaxed">Our subscription model gives you access to our full design and development team for a flat monthly rate. You can request unlimited projects, pause or cancel anytime, and get consistent quality without the overhead of hiring in-house talent.</p>
      </div>

      <div className="border border-neutral-200 rounded-2xl p-6 hover:shadow-sm transition-shadow">
        <h3 className="text-lg font-semibold text-neutral-900 mb-3">What's included in each plan?</h3>
        <p className="text-neutral-600 text-sm leading-relaxed">Each plan includes different levels of service intensity. Starter focuses on core design work, Pro adds development and systems thinking, while Scale provides dedicated team resources and growth optimization. All plans include project management, regular communication, and our proven process.</p>
      </div>

      <div className="border border-neutral-200 rounded-2xl p-6 hover:shadow-sm transition-shadow">
        <h3 className="text-lg font-semibold text-neutral-900 mb-3">How quickly will I receive my designs?</h3>
        <p className="text-neutral-600 text-sm leading-relaxed">Most requests are completed within 2-3 business days on average. Complex requests may take longer, but we'll always communicate timelines upfront. Our response times vary by plan, from 48 hours (Starter) to 12 hours (Scale) for initial feedback and updates.</p>
      </div>

      <div className="border border-neutral-200 rounded-2xl p-6 hover:shadow-sm transition-shadow">
        <h3 className="text-lg font-semibold text-neutral-900 mb-3">What if I don't like the work?</h3>
        <p className="text-neutral-600 text-sm leading-relaxed">We'll continue to revise the design until you're 100% satisfied. Our process includes regular check-ins and feedback loops to ensure we're aligned on direction. If you're ever unsatisfied, we offer a full refund for your first month.</p>
      </div>

      <div className="border border-neutral-200 rounded-2xl p-6 hover:shadow-sm transition-shadow">
        <h3 className="text-lg font-semibold text-neutral-900 mb-3">Can I pause my subscription?</h3>
        <p className="text-neutral-600 text-sm leading-relaxed">Absolutely. You can pause your subscription at any time and resume when ready. Paused time doesn't count toward your billing cycle, so you only pay for the time you're actively using our services.</p>
      </div>

      <div className="border border-neutral-200 rounded-2xl p-6 hover:shadow-sm transition-shadow">
        <h3 className="text-lg font-semibold text-neutral-900 mb-3">Do you work with existing design systems?</h3>
        <p className="text-neutral-600 text-sm leading-relaxed">Yes! We're experienced working within existing design systems and brand guidelines. We can also help evolve and improve your current system, or create a new one from scratch if needed.</p>
      </div>

      <div className="border border-neutral-200 rounded-2xl p-6 hover:shadow-sm transition-shadow">
        <h3 className="text-lg font-semibold text-neutral-900 mb-3">What tools do you use?</h3>
        <p className="text-neutral-600 text-sm leading-relaxed">We primarily use Figma for design work, React/Next.js for development, and integrate with your existing tools like Slack, Linear, or Notion. We're flexible and can adapt to your team's preferred workflow and toolchain.</p>
      </div>
    </div>

    <div className="mt-12 text-center">
      <p className="text-neutral-600 mb-4">Still have questions?</p>
      <a href="#" className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-black transition">
        Get in touch
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
      </a>
    </div>
  </div>
</section>

    {/* CTA */}
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-neutral-200">
          <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1e4989cc-80c7-45b1-9eb3-3f72b473d778_1600w.jpg" alt="mountain minimal" className="absolute inset-0 h-full w-full object-cover"/>
          <div className="relative bg-black/40">
            <div className="px-8 py-16 sm:px-12 sm:py-20">
              <div className="max-w-2xl text-white">
                <h3 className="text-3xl sm:text-4xl tracking-tight font-sans font-medium" style={{}}>Ready to ship something people love?</h3>
                <p className="mt-3 text-white/80 font-sans">Bring your roadmap. We’ll bring velocity.</p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-100 font-sans">
                    Book a discovery call
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="calendar" className="lucide lucide-calendar h-4 w-4"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/50 text-white px-5 py-3 text-sm font-medium hover:bg-white/10 font-sans">
                    Download overview
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="file-text" className="lucide lucide-file-text h-4 w-4"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-white border-neutral-200 border-t pt-10 pb-10">
  <div className="max-w-7xl mx-auto px-6">
    <div className="sm:p-8 bg-gradient-to-r from-neutral-100 to-white border-neutral-200 border rounded-3xl pt-6 pr-6 pb-6 pl-6">
  <div className="grid md:grid-cols-2 gap-10">
    {/* Left: Brand, copy, social */}
    <div className="">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-8 w-8 rounded-full bg-neutral-900 items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="triangle" className="lucide lucide-triangle h-4 w-4"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg>
        </span>
        <span className="text-lg font-semibold tracking-tight">NOVA</span>
      </div>
      <p className="mt-3 text-sm text-neutral-600 font-sans">
        We empower modern businesses to transform their digital presence. From innovative web applications to strategic growth initiatives, we deliver cutting-edge solutions that align with your vision. Our expert team is committed to providing exceptional service that accelerates your success.
      </p>

      <ul className="mt-6 space-y-2">
        <li className="">
          <a href="#" className="flex items-center justify-between border-b border-neutral-200 py-3 text-sm">
            <span className="flex items-center gap-3 text-neutral-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="facebook" className="lucide lucide-facebook h-4 w-4 text-neutral-600"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              Facebook
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right h-4 w-4 text-neutral-500"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </li>
        <li className="">
          <a href="#" className="flex items-center justify-between border-b border-neutral-200 py-3 text-sm">
            <span className="flex items-center gap-3 text-neutral-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="instagram" className="lucide lucide-instagram h-4 w-4 text-neutral-600"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              Instagram
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right h-4 w-4 text-neutral-500"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </li>
        <li className="">
          <a href="#" className="flex items-center justify-between border-b border-neutral-200 py-3 text-sm">
            <span className="flex items-center gap-3 text-neutral-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="linkedin" className="lucide lucide-linkedin h-4 w-4 text-neutral-600"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right h-4 w-4 text-neutral-500"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </li>
        <li className="">
          <a href="#" className="flex items-center justify-between border-b border-neutral-200 py-3 text-sm">
            <span className="flex items-center gap-3 text-neutral-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="twitter" className="lucide lucide-twitter h-4 w-4 text-neutral-600"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              Twitter
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right h-4 w-4 text-neutral-500"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </li>
        <li className="">
          <a href="#" className="flex items-center justify-between border-b border-neutral-200 py-3 text-sm">
            <span className="flex items-center gap-3 text-neutral-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="youtube" className="lucide lucide-youtube h-4 w-4 text-neutral-600"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
              YouTube
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right h-4 w-4 text-neutral-500"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </li>
      </ul>
    </div>

    {/* Right: Newsletter + links */}
    <div className="">
      <p className="text-sm font-medium text-neutral-800 font-sans">Join our innovation newsletter</p>
      <form className="mt-3">
        <label htmlFor="footer-email" className="sr-only">Email address</label>
        <div className="flex items-center gap-3 sm:max-w-sm">
          <input id="footer-email" type="email" placeholder="Your email address" className="flex-1 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm placeholder-neutral-500 focus:outline-none"/>
          <button type="button" className="inline-flex items-center rounded-full bg-neutral-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-black">
            Get Updates
          </button>
        </div>
      </form>

      <ul className="mt-6 space-y-2">
        <li className="">
          <a href="#" className="flex items-center justify-between border-b border-neutral-200 py-3 text-sm text-neutral-800">
            Solutions
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right h-4 w-4 text-neutral-500"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center justify-between border-b border-neutral-200 py-3 text-sm text-neutral-800">
            Portfolio
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right h-4 w-4 text-neutral-500"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </li>
        <li className="">
          <a href="#" className="flex items-center justify-between border-b border-neutral-200 py-3 text-sm text-neutral-800">
            Our Story
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right h-4 w-4 text-neutral-500"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </li>
        <li className="">
          <a href="#" className="flex items-center justify-between border-b border-neutral-200 py-3 text-sm text-neutral-800">
            Insights
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right h-4 w-4 text-neutral-500"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </li>
        <li className="">
          <a href="#" className="flex items-center justify-between border-b border-neutral-200 py-3 text-sm text-neutral-800">
            Plans
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right h-4 w-4 text-neutral-500"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><p className="text-neutral-600 font-sans">© <span id="year" className="font-sans">2025</span> NEXUS. All rights reserved.</p>
    </a>
  </li></ul></div>
</div></div>
  </div>
</footer>
    </>
  );
}
