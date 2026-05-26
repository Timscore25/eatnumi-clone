'use client';

import { useEffect, useState } from 'react';

const BRAND_RED = '#a6171f';
const BRAND_CREAM = '#fffaf6';
const DURATION_LIMIT = 3600; // 1 hour in seconds

export default function Section1() {
  const [remaining, setRemaining] = useState<number>(DURATION_LIMIT);

  useEffect(() => {
    const STORAGE_KEY = 'countdownStart';
    const now = Date.now();
    let startTimestamp: number;

    const stored =
      typeof window !== 'undefined'
        ? window.localStorage.getItem(STORAGE_KEY)
        : null;

    if (stored) {
      const parsed = parseInt(stored, 10);
      const elapsed = Math.floor((now - parsed) / 1000);
      if (elapsed >= DURATION_LIMIT) {
        startTimestamp = now;
        window.localStorage.setItem(STORAGE_KEY, String(now));
      } else {
        startTimestamp = parsed;
      }
    } else {
      startTimestamp = now;
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, String(now));
      }
    }

    const tick = () => {
      const elapsed = Math.floor((Date.now() - startTimestamp) / 1000);
      const left = DURATION_LIMIT - elapsed;
      setRemaining(left > 0 ? left : 0);
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(remaining / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;
  const pad = (n: number) => ('0' + n).slice(-2);

  return (
    <section
      className="w-full"
      style={{ backgroundColor: BRAND_RED, paddingTop: 5, paddingBottom: 5 }}
    >
      <div className="mx-auto max-w-[1920px] px-3 sm:px-6">
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 md:gap-8 flex-wrap">
          {/* Heading */}
          <h2
            className="font-semibold tracking-wide whitespace-nowrap"
            style={{
              color: BRAND_CREAM,
              fontSize: 'clamp(13px, 1.4vw, 18px)',
              margin: 0,
            }}
          >
            BUY 2 GET 4 FREE — ENDS TONIGHT
          </h2>

          {/* CTA Button */}
          <a
            href="/product"
            className="inline-flex items-center justify-center font-semibold tracking-wide rounded-sm px-3 py-1 sm:px-4 sm:py-1.5 transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{
              color: BRAND_RED,
              backgroundColor: BRAND_CREAM,
              fontSize: 'clamp(10px, 1vw, 13px)',
            }}
          >
            SHOP NOW
          </a>

          {/* Timer */}
          <div className="flex items-center">
            <div
              className="flex items-center gap-1.5 sm:gap-2"
              style={{ color: BRAND_RED }}
            >
              <TimeBlock value={pad(hours)} unit="HOURS" />
              <TimeBlock value={pad(minutes)} unit="Mins" />
              <TimeBlock value={pad(seconds)} unit="Secs" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimeBlock({ value, unit }: { value: string; unit: string }) {
  return (
    <div className="flex items-center gap-1">
      <span
        className="inline-flex items-center justify-center font-bold rounded-sm px-1.5 py-0.5 sm:px-2 sm:py-1 min-w-[26px] sm:min-w-[32px] tabular-nums"
        style={{
          backgroundColor: BRAND_CREAM,
          color: BRAND_RED,
          fontSize: 'clamp(11px, 1.1vw, 14px)',
          lineHeight: 1.1,
        }}
      >
        {value}
      </span>
      <span
        className="font-medium tracking-wide"
        style={{
          color: BRAND_CREAM,
          fontSize: 'clamp(9px, 0.85vw, 12px)',
        }}
      >
        {unit}
      </span>
    </div>
  );
}
