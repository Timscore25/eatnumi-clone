'use client';

import { useEffect, useState } from 'react';
import { openReserve } from '@/lib/reserve';

/**
 * PSection7 — Pre-page overlays: cookie consent banner + promotional
 * countdown announcement bar that appears above the header.
 *
 * Design template: all prose replaced with generic Lorem ipsum.
 */

const BRAND_RED = '#a31621';
const BRAND_CREAM = '#fff9f5';

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

function CountdownBar() {
  // Static placeholder countdown (24h window) — not wired to a real backend.
  const [target] = useState(() => Date.now() + 1000 * 60 * 60 * 12);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div
      className="w-full"
      style={{ backgroundColor: BRAND_RED, color: BRAND_CREAM }}
      role="region"
      aria-label="Promotional countdown"
    >
      <div className="max-w-[1440px] mx-auto px-4 py-2 flex flex-wrap items-center justify-center gap-3 md:gap-6 text-xs md:text-sm">
        <span className="font-semibold uppercase tracking-wider">Lorem Ipsum Sale</span>

        <button
          type="button"
          onClick={() => openReserve()}
          className="inline-flex items-center px-3 py-1 rounded-full text-[11px] md:text-xs font-bold uppercase tracking-wider"
          style={{ backgroundColor: BRAND_CREAM, color: BRAND_RED }}
        >
          Shop Now
        </button>

        <div className="flex items-center gap-1.5 md:gap-2 font-mono">
          <TimeBlock value={pad(hours)} label="Hours" />
          <span aria-hidden>:</span>
          <TimeBlock value={pad(minutes)} label="Mins" />
          <span aria-hidden>:</span>
          <TimeBlock value={pad(seconds)} label="Secs" />
        </div>
      </div>
    </div>
  );
}

function TimeBlock({ value, label }: { value: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1">
      <span
        className="inline-flex h-6 min-w-[28px] px-1.5 items-center justify-center rounded text-[12px] font-bold"
        style={{ backgroundColor: BRAND_CREAM, color: BRAND_RED }}
      >
        {value}
      </span>
      <span className="hidden sm:inline text-[10px] uppercase tracking-widest opacity-90">{label}</span>
    </span>
  );
}

function CookieBanner({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 md:inset-auto md:bottom-6 md:right-6 md:max-w-md z-50 shadow-2xl rounded-t-2xl md:rounded-2xl"
      style={{ backgroundColor: '#ffffff' }}
      role="alertdialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
    >
      <div className="p-6 md:p-7">
        <h2 id="cookie-title" className="text-base md:text-lg font-semibold mb-2" style={{ color: BRAND_RED }}>
          Cookie consent
        </h2>
        <p className="text-sm leading-relaxed text-neutral-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.{' '}
          <a href="#" className="underline" style={{ color: BRAND_RED }}>
            Privacy Policy
          </a>
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={onClose}
            className="text-sm font-medium px-4 py-2 rounded-full border transition-colors"
            style={{ borderColor: BRAND_RED, color: BRAND_RED }}
          >
            Manage preferences
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-sm font-semibold px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: BRAND_RED }}
          >
            Accept
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-sm font-medium px-4 py-2 rounded-full text-neutral-700 hover:bg-neutral-100"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PSection7() {
  const [showCookie, setShowCookie] = useState(true);

  return (
    <>
      {/* Skip link for accessibility (visually hidden until focused) */}
      <a
        href="#MainContent"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2 focus:rounded focus:text-white"
        style={{ backgroundColor: BRAND_RED }}
      >
        Skip to content
      </a>

      <CountdownBar />

      {showCookie && <CookieBanner onClose={() => setShowCookie(false)} />}
    </>
  );
}
