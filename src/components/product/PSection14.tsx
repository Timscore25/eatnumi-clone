'use client';

import { useState } from 'react';
import { openReserve } from '@/lib/reserve';

const BRAND_RED = '#a31621';
const BRAND_CREAM = '#fff9f5';
const BRAND_PINK = '#ffeaea';

const RECENT_PRODUCTS = [
  {
    title: 'Yuko Cutting Jelly',
    price: '$59',
    img: '//eatnumi.com/cdn/shop/files/p1-8.png?v=1775174196&width=500',
  },
  {
    title: 'Collagen Glow Sticks',
    price: '$49',
    img: '//eatnumi.com/cdn/shop/files/NumiPDP_10.png?v=1775174196&width=500',
  },
  {
    title: 'Bloat Relief',
    price: '$42',
    img: '//eatnumi.com/cdn/shop/files/0lAnm_G7D0QcHJBYCR2J_1OgpwX0a.png?v=1774770757&width=500',
  },
  {
    title: 'Keep It Moving Jelly',
    price: '$48',
    img: '//eatnumi.com/cdn/shop/files/s8jXaChFgbVwy94DK2Gnr_sWXrl2dh.png?v=1775795871&width=500',
  },
];

const CURRENCIES = [
  'US Dollar (USD)',
  'Euro (EUR)',
  'British Pound (GBP)',
  'Canadian Dollar (CAD)',
  'Australian Dollar (AUD)',
  'Japanese Yen (JPY)',
  'Swiss Franc (CHF)',
  'New Zealand Dollar (NZD)',
];

export default function PSection14() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <section
      className="relative w-full"
      style={{ backgroundColor: BRAND_CREAM }}
    >
      {/* ===== Utility Action Bar (replaces shopify drawers) ===== */}
      <div
        className="w-full border-t"
        style={{
          borderColor: 'rgba(163,22,33,0.15)',
          backgroundColor: BRAND_CREAM,
        }}
      >
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-4 py-6 md:px-8 md:py-8">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="rounded-full border px-5 py-2 text-sm font-semibold transition-colors"
              style={{
                borderColor: BRAND_RED,
                color: BRAND_RED,
                backgroundColor: 'transparent',
              }}
            >
              Search
            </button>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="rounded-full px-5 py-2 text-sm font-semibold"
              style={{ backgroundColor: BRAND_RED, color: BRAND_CREAM }}
            >
              Your Cart (0)
            </button>
            <button
              type="button"
              onClick={() => setPopupOpen(true)}
              className="rounded-full border px-5 py-2 text-sm font-semibold"
              style={{
                borderColor: BRAND_RED,
                color: BRAND_RED,
                backgroundColor: BRAND_PINK,
              }}
            >
              Get 10% Off
            </button>
          </div>

          <div className="text-xs uppercase tracking-widest opacity-70">
            Auto Location &middot; AUD
          </div>
        </div>
      </div>

      {/* ===== Decorative spacer block (placeholder for tall popup region) ===== */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${BRAND_CREAM} 0%, ${BRAND_PINK} 50%, ${BRAND_CREAM} 100%)`,
        }}
      >
        <div className="mx-auto max-w-[1200px] px-4 py-20 text-center md:py-28">
          <p
            className="mb-4 text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: BRAND_RED }}
          >
            Stay Connected
          </p>
          <h2
            className="mb-4 text-3xl font-extrabold leading-tight md:text-5xl"
            style={{ color: BRAND_RED, fontFamily: 'serif' }}
          >
            Get 10% off your first
            <br />
            <span className="italic">Yuko box.</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-neutral-700 md:text-base">
            Plus first dibs on restocks, new flavors, and Yuko-only deals
            straight to your inbox.
          </p>
          <button
            type="button"
            onClick={() => openReserve()}
            className="inline-block rounded-full px-10 py-3 text-sm font-bold uppercase tracking-wider transition-opacity hover:opacity-90 md:text-base"
            style={{ backgroundColor: BRAND_RED, color: BRAND_CREAM }}
          >
            Reserve Yours
          </button>
        </div>
      </div>

      {/* ===== Search Drawer (overlay) ===== */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          <button
            type="button"
            aria-label="Close search"
            onClick={() => setSearchOpen(false)}
            className="absolute inset-0 bg-black/40"
          />
          <div
            className="relative z-10 mt-16 w-full max-w-[640px] rounded-2xl p-6 shadow-2xl"
            style={{ backgroundColor: BRAND_CREAM }}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3
                className="text-xl font-extrabold"
                style={{ color: BRAND_RED, fontFamily: 'serif' }}
              >
                Search
              </h3>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-2xl leading-none"
                style={{ color: BRAND_RED }}
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <input
              type="search"
              placeholder="Search"
              className="w-full rounded-full border-2 px-5 py-3 text-sm outline-none"
              style={{ borderColor: BRAND_RED, color: BRAND_RED }}
            />
            <div className="mt-3 text-xs uppercase tracking-widest opacity-70">
              <button type="button">Clear</button>
            </div>
          </div>
        </div>
      )}

      {/* ===== Cart Drawer ===== */}
      {cartOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Your cart"
        >
          <button
            type="button"
            aria-label="Close cart"
            onClick={() => setCartOpen(false)}
            className="absolute inset-0 bg-black/50"
          />
          <aside
            className="relative z-10 flex h-full w-full max-w-[420px] flex-col shadow-2xl"
            style={{ backgroundColor: BRAND_CREAM }}
          >
            <div
              className="flex items-center justify-between px-6 py-5"
              style={{ borderBottom: `1px solid rgba(163,22,33,0.15)` }}
            >
              <h3
                className="text-xl font-extrabold"
                style={{ color: BRAND_RED, fontFamily: 'serif' }}
              >
                Your cart (0)
              </h3>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="text-2xl leading-none"
                style={{ color: BRAND_RED }}
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
              <div
                className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                style={{ backgroundColor: BRAND_PINK, color: BRAND_RED }}
                aria-hidden
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 3h2l2 12h12l2-9H6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-sm font-semibold" style={{ color: BRAND_RED }}>
                Empty cart
              </p>
              <p className="mt-2 text-xs leading-relaxed opacity-70">
                Your cart is empty. Add your first Yuko box to get started.
              </p>
            </div>

            {/* Recently viewed */}
            <div
              className="px-6 py-5"
              style={{ borderTop: `1px solid rgba(163,22,33,0.15)` }}
            >
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: BRAND_RED }}>
                Recently viewed
              </h4>
              <div className="flex gap-3 overflow-x-auto">
                {RECENT_PRODUCTS.slice(0, 3).map((p, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex w-32 flex-shrink-0 flex-col gap-1"
                  >
                    <img
                      src={p.img}
                      alt="Product"
                      loading="lazy"
                      className="h-32 w-32 rounded-md object-cover"
                    />
                    <div className="text-xs font-medium leading-tight" style={{ color: '#1a1a1a' }}>
                      {p.title}
                    </div>
                    <div className="text-xs font-bold" style={{ color: BRAND_RED }}>
                      {p.price}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div
              className="px-6 py-5"
              style={{ borderTop: `1px solid rgba(163,22,33,0.15)` }}
            >
              <div className="mb-3 flex items-center justify-between">
                <span
                  className="text-sm font-semibold uppercase tracking-widest"
                  style={{ color: BRAND_RED }}
                >
                  Total
                </span>
                <span className="text-lg font-extrabold" style={{ color: BRAND_RED }}>
                  $0.00
                </span>
              </div>
              <button
                type="button"
                onClick={() => openReserve()}
                className="block w-full rounded-full py-3 text-center text-sm font-bold uppercase tracking-widest"
                style={{ backgroundColor: BRAND_RED, color: BRAND_CREAM }}
              >
                Reserve My Spot &rarr;
              </button>
              <p className="mt-3 text-center text-xs opacity-70">
                Try it risk-free for 90 days &mdash; full refund, zero hassle.
              </p>
            </div>
          </aside>
        </div>
      )}

      {/* ===== Currency Selector (inline collapsed list) ===== */}
      <div
        className="w-full"
        style={{ backgroundColor: BRAND_CREAM, borderTop: '1px solid rgba(163,22,33,0.15)' }}
      >
        <details className="mx-auto max-w-[1400px] px-4 py-6 md:px-8 md:py-8">
          <summary
            className="cursor-pointer text-sm font-semibold uppercase tracking-widest"
            style={{ color: BRAND_RED }}
          >
            Currency &middot; AUD
          </summary>
          <ul className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-4">
            {CURRENCIES.map((c) => (
              <li key={c}>
                <button
                  type="button"
                  className="w-full rounded-md px-3 py-2 text-left text-xs hover:opacity-80"
                  style={{
                    backgroundColor: BRAND_PINK,
                    color: BRAND_RED,
                  }}
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </details>
      </div>

      {/* ===== Newsletter Popup ===== */}
      {popupOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Newsletter signup"
        >
          <button
            type="button"
            aria-label="Close popup"
            onClick={() => setPopupOpen(false)}
            className="absolute inset-0 bg-black/55"
          />
          <div
            className="relative z-10 grid w-full max-w-[820px] grid-cols-1 overflow-hidden rounded-2xl shadow-2xl md:grid-cols-2"
            style={{ backgroundColor: BRAND_CREAM }}
          >
            {/* Image side */}
            <div
              className="relative hidden md:block"
              style={{
                background: `linear-gradient(135deg, ${BRAND_PINK} 0%, ${BRAND_CREAM} 100%)`,
              }}
            >
              <img
                src="//eatnumi.com/cdn/shop/files/p1-8.png?v=1775174196&width=500"
                alt="Product"
                loading="lazy"
                className="h-full w-full object-contain p-8"
              />
            </div>

            {/* Content side */}
            <div className="relative px-6 py-10 md:px-10 md:py-14">
              <button
                type="button"
                onClick={() => setPopupOpen(false)}
                className="absolute right-4 top-4 text-2xl leading-none"
                style={{ color: BRAND_RED }}
                aria-label="Close"
              >
                &times;
              </button>

              <p
                className="mb-2 text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: BRAND_RED }}
              >
                Special Offer
              </p>
              <h3
                className="mb-3 text-2xl font-extrabold leading-tight md:text-3xl"
                style={{ color: BRAND_RED, fontFamily: 'serif' }}
              >
                Get 10% off your first Yuko box
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-neutral-700">
                Plus first dibs on restocks, new flavors, and Yuko-only deals.
              </p>
              <form
                className="flex flex-col gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setPopupOpen(false);
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Email"
                  aria-label="Email"
                  className="w-full rounded-full border-2 px-5 py-3 text-sm outline-none"
                  style={{ borderColor: BRAND_RED, color: BRAND_RED }}
                />
                <button
                  type="submit"
                  className="w-full rounded-full py-3 text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-90"
                  style={{ backgroundColor: BRAND_RED, color: BRAND_CREAM }}
                >
                  Get My 10% Off
                </button>
                <button
                  type="button"
                  onClick={() => setPopupOpen(false)}
                  className="text-xs uppercase tracking-widest opacity-70 hover:opacity-100"
                  style={{ color: BRAND_RED }}
                >
                  No thanks
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
