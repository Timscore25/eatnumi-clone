'use client';

import { useState } from 'react';
import { openReserve } from '@/lib/reserve';

/**
 * PSection6 — Site header / top navigation.
 * Includes: utility benefits row, primary nav with logo, search, account, cart,
 * and a hover/click-to-open mega menu preview of bestsellers.
 *
 * This is a design template populated with Yuko brand copy.
 */

const BRAND_RED = '#a31621';
const BRAND_CREAM = '#fff9f5';
const BRAND_PINK = '#ffeaea';

const LOGO_SRC =
  'https://eatnumi.com/cdn/shop/files/Numi_PDP_7_424f8209-e9a9-4a68-9276-0af7ea921f7e.png?height=38&v=1773206511';

const BESTSELLER_IMG =
  'https://eatnumi.com/cdn/shop/files/p1-8.png?v=1775174196&width=235';

const utilityItems = [
  '10,000+ Happy Customers',
  '90-Day Risk-Free Returns',
  'Free Shipping On Orders $75+',
];

const primaryNav: { label: string; href: string }[] = [
  { label: 'Shop All', href: '#' },
  { label: 'Featured Products', href: '#' },
  { label: 'Subscriptions', href: '#' },
  { label: 'About', href: '#' },
];

export default function PSection6() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="w-full sticky top-0 z-40"
      style={{ backgroundColor: BRAND_CREAM, color: '#1a1a1a' }}
    >
      {/* Utility / benefits ribbon */}
      <div
        className="hidden md:block w-full text-xs"
        style={{ backgroundColor: BRAND_PINK, color: BRAND_RED }}
      >
        <div className="max-w-[1440px] mx-auto px-6 py-2 flex items-center justify-center gap-10">
          {utilityItems.map((item) => (
            <span key={item} className="flex items-center gap-2 font-medium">
              <span
                aria-hidden
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: BRAND_RED }}
              />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Main navigation row */}
      <div className="border-b" style={{ borderColor: 'rgba(163,22,33,0.12)' }}>
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between gap-4">
          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full"
            style={{ color: BRAND_RED }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Desktop primary nav (left) */}
          <nav className="hidden md:flex items-center gap-7">
            {primaryNav.slice(0, 2).map((item) => (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={() => item.label === 'Shop All' && setMegaOpen(true)}
                onMouseLeave={() => item.label === 'Shop All' && setMegaOpen(false)}
                className="text-sm font-medium uppercase tracking-wide hover:opacity-70 transition-opacity"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Logo (centered) */}
          <a href="#" className="flex items-center" aria-label="Brand home">
            <img
              src={LOGO_SRC}
              alt="Brand logo"
              loading="lazy"
              className="h-7 md:h-9 w-auto object-contain"
            />
          </a>

          {/* Desktop primary nav (right) */}
          <nav className="hidden md:flex items-center gap-7">
            {primaryNav.slice(2).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium uppercase tracking-wide hover:opacity-70 transition-opacity"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right utility cluster */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              type="button"
              aria-label="Search"
              className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Account"
              className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
              </svg>
            </button>
            <a
              href="#"
              aria-label="Cart"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6h15l-1.5 9h-12z" />
                <circle cx="9" cy="20" r="1.5" />
                <circle cx="18" cy="20" r="1.5" />
                <path d="M6 6L5 3H2" />
              </svg>
              <span
                className="absolute -top-1 -right-1 text-[10px] font-bold rounded-full h-4 min-w-[16px] px-1 flex items-center justify-center text-white"
                style={{ backgroundColor: BRAND_RED }}
              >
                0
              </span>
            </a>
          </div>
        </div>

        {/* Mega menu panel */}
        <div
          onMouseEnter={() => setMegaOpen(true)}
          onMouseLeave={() => setMegaOpen(false)}
          className={`hidden md:block overflow-hidden transition-[max-height,opacity] duration-300 ${
            megaOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ backgroundColor: BRAND_CREAM, borderTop: `1px solid rgba(163,22,33,0.12)` }}
        >
          <div className="max-w-[1440px] mx-auto px-6 py-8 grid grid-cols-12 gap-8">
            <div className="col-span-3">
              <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: BRAND_RED }}>
                Bestsellers
              </h3>
              <ul className="space-y-2 text-sm">
                {['Korean Cutting Jelly', 'Collagen Glow Sticks', 'Keep It Moving', 'Bloat Relief Gummies'].map(
                  (t) => (
                    <li key={t}>
                      <a href="#" className="hover:opacity-70">
                        {t}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="col-span-3">
              <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: BRAND_RED }}>
                Categories
              </h3>
              <ul className="space-y-2 text-sm">
                {['Best Sellers', 'Cutting', 'Skin', 'Gut Health', 'Bundles'].map(
                  (t) => (
                    <li key={t}>
                      <a href="#" className="hover:opacity-70">
                        {t}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="col-span-3">
              <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: BRAND_RED }}>
                Help
              </h3>
              <ul className="space-y-2 text-sm">
                {['FAQ', 'Manage Subscription', 'Log In', 'Contact'].map((t) => (
                  <li key={t}>
                    <a href="#" className="hover:opacity-70">
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Featured product card */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openReserve();
              }}
              className="col-span-3 block rounded-xl overflow-hidden transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: BRAND_PINK }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={BESTSELLER_IMG}
                  alt="Featured product"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-[11px] uppercase tracking-widest" style={{ color: BRAND_RED }}>
                  Featured
                </p>
                <p className="text-sm font-semibold mt-1">Yuko Cutting Jelly Sticks</p>
                <p className="text-sm mt-1">$59.00</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div
          className="md:hidden border-b"
          style={{ backgroundColor: BRAND_CREAM, borderColor: 'rgba(163,22,33,0.12)' }}
        >
          <nav className="px-4 py-4 flex flex-col gap-3">
            {primaryNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium uppercase tracking-wide py-2 border-b border-black/5"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2 text-sm">
              <a href="#" className="underline">
                Search
              </a>
              <a href="#" className="underline">
                Account
              </a>
              <a href="#" className="underline">
                FAQ
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
