'use client';

import { useEffect, useState } from 'react';
import { openReserve } from '@/lib/reserve';

const IMG = {
  numiLogo:
    '//eatnumi.com/cdn/shop/files/Numi_PDP_7_424f8209-e9a9-4a68-9276-0af7ea921f7e.png?height=38&v=1773206511',
};

const BRAND_RED = '#a6171f';
const BRAND_CREAM = '#fffaf6';

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

export default function PSection1() {
  // 1-hour rolling countdown (matches the source 3600s duration)
  const [remaining, setRemaining] = useState(3600);

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((r) => (r <= 0 ? 3600 : r - 1));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const hours = Math.floor(remaining / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;

  return (
    <header className="w-full">
      {/* Announcement / countdown bar */}
      <section
        className="w-full"
        style={{ backgroundColor: BRAND_RED, color: BRAND_CREAM }}
      >
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-center gap-2 px-4 py-2 text-center md:flex-row md:gap-6 md:py-[5px]">
          <h2
            className="font-semibold tracking-wide"
            style={{ color: BRAND_CREAM }}
          >
            <span className="text-[13px] md:text-[18px]">
              YUKO LAUNCH SALE
            </span>
          </h2>

          <button
            type="button"
            onClick={() => openReserve()}
            className="inline-block rounded-md px-3 py-1 font-bold tracking-wider"
            style={{ backgroundColor: BRAND_CREAM, color: BRAND_RED }}
          >
            <span className="text-[10px] md:text-[13px]">BUY 2 GET 3 FREE</span>
          </button>

          <div className="flex items-center gap-2">
            <CountBlock value={pad(hours)} unit="HOURS" />
            <CountBlock value={pad(minutes)} unit="Mins" />
            <CountBlock value={pad(seconds)} unit="Secs" />
          </div>
        </div>
      </section>

      {/* Header / nav */}
      <div
        className="w-full border-b border-black/5"
        style={{ backgroundColor: BRAND_CREAM }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 md:px-8 md:py-4">
          {/* Left: nav (desktop) / hamburger (mobile) */}
          <div className="flex items-center gap-6">
            <button
              type="button"
              aria-label="Menu"
              className="md:hidden"
            >
              <svg
                width="22"
                height="16"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="2" fill="black" />
                <rect y="8" width="24" height="2" fill="black" />
                <rect y="16" width="24" height="2" fill="black" />
              </svg>
            </button>

            <nav className="hidden items-center gap-6 md:flex">
              <a
                href="/"
                className="text-sm font-medium text-black hover:opacity-70"
              >
                Shop All
              </a>
              <a
                href="#"
                className="text-sm font-medium text-black hover:opacity-70"
              >
                Subscription
              </a>
            </nav>
          </div>

          {/* Center: logo */}
          <a href="/" className="flex items-center" aria-label="Brand home">
            <img
              src={IMG.numiLogo}
              alt="Brand logo"
              width={92}
              height={38}
              loading="lazy"
              className="h-8 w-auto md:h-[38px]"
            />
          </a>

          {/* Right: account + cart */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Account"
              className="hidden text-black hover:opacity-70 md:inline-flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 20 20"
                fill="none"
              >
                <circle
                  cx="10"
                  cy="6.5"
                  r="2.75"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.4"
                  d="m5.172 14.591-.437.786a.588.588 0 0 0 .514.873h9.502a.588.588 0 0 0 .514-.873l-.437-.786a5.523 5.523 0 0 0-9.656 0"
                />
              </svg>
            </button>

            <a
              href="#"
              aria-label="Cart"
              className="relative inline-flex items-center text-black hover:opacity-70"
            >
              <svg
                width="24"
                height="22"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.9437 3.6002H23.76L21.2 12.0002H6.32219M22.48 16.8002H7.12L4.56 1.2002H0.720001M8.4 21.6002C8.4 22.263 7.82692 22.8002 7.12 22.8002C6.41308 22.8002 5.84 22.263 5.84 21.6002C5.84 20.9374 6.41308 20.4002 7.12 20.4002C7.82692 20.4002 8.4 20.9374 8.4 21.6002ZM22.48 21.6002C22.48 22.263 21.9069 22.8002 21.2 22.8002C20.493 22.8002 19.92 22.263 19.92 21.6002C19.92 20.9374 20.493 20.4002 21.2 20.4002C21.9069 20.4002 22.48 20.9374 22.48 21.6002Z"
                  stroke="black"
                  strokeWidth="1.44"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function CountBlock({ value, unit }: { value: string; unit: string }) {
  return (
    <div className="flex flex-col items-center">
      <span
        className="rounded-md px-2 py-0.5 text-sm font-bold leading-none md:px-3 md:py-1 md:text-base"
        style={{ backgroundColor: BRAND_CREAM, color: BRAND_RED }}
      >
        {value}
      </span>
      <span
        className="mt-0.5 text-[9px] uppercase tracking-wider md:text-[10px]"
        style={{ color: BRAND_CREAM }}
      >
        {unit}
      </span>
    </div>
  );
}
