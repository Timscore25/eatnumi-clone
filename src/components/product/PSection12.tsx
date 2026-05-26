'use client';

import { openReserve } from '@/lib/reserve';

const BRAND_RED = '#a31621';
const BRAND_CREAM = '#fff9f5';
const BRAND_PINK = '#ffeaea';

export default function PSection12() {
  return (
    <section
      className="w-full"
      style={{
        background: `linear-gradient(180deg, ${BRAND_CREAM} 0%, ${BRAND_PINK} 100%)`,
        color: '#1a1a1a',
      }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-4 py-14 text-center md:flex-row md:gap-12 md:py-20 md:text-left">
        {/* Badge */}
        <div className="flex flex-shrink-0 items-center justify-center">
          <div
            className="relative flex h-40 w-40 items-center justify-center rounded-full md:h-52 md:w-52"
            style={{
              backgroundColor: BRAND_RED,
              color: BRAND_CREAM,
              boxShadow: '0 12px 36px rgba(163,22,33,0.28)',
            }}
          >
            <div
              className="absolute inset-2 rounded-full border-2 border-dashed"
              style={{ borderColor: 'rgba(255,249,245,0.4)' }}
              aria-hidden
            />
            <div className="text-center">
              <div className="text-3xl font-extrabold leading-none md:text-4xl">
                90
              </div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest md:text-xs">
                Days
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-widest opacity-90 md:text-xs">
                Money Back
              </div>
              <div className="text-[10px] uppercase tracking-widest opacity-90 md:text-xs">
                Guarantee
              </div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="flex flex-1 flex-col items-center md:items-start">
          <p
            className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] md:text-sm"
            style={{ color: BRAND_RED }}
          >
            90-Day Money Back Guarantee
          </p>
          <h2
            className="mb-4 text-3xl font-extrabold leading-tight md:text-5xl"
            style={{ color: BRAND_RED, fontFamily: 'serif' }}
          >
            See Results In 90 Days
            <br />
            <span className="italic">or Your Money Back!</span>
          </h2>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-neutral-700 md:text-base">
            Try Yuko risk-free. If after 90 days you don&apos;t feel lighter,
            less bloated, and more in control — send back any unused boxes for
            a full refund. No questions. No hoops. No restocking fees.
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
    </section>
  );
}
