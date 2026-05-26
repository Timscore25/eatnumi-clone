'use client';

import React from 'react';
import { openReserve } from '@/lib/reserve';

const bullets = [
  'Quiets cravings naturally with Garcinia + serotonin support.',
  'Real fullness from chia expanding in your stomach.',
  'Collagen + HA protect your skin while your body shifts.',
];

const negatives = [
  'Stimulants spike then crash your energy.',
  'Pills with poor bioavailability.',
  'Fad ingredients with no real science behind them.',
  'Empty promises and no guarantee.',
  'Bad taste makes you skip days.',
  "Built for men's metabolism, not women's.",
];

const PSection4: React.FC = () => {
  return (
    <section
      className="w-full py-16 md:py-24"
      style={{ backgroundColor: '#fff9f5' }}
      aria-labelledby="psection4-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2
            id="psection4-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
            style={{ color: '#a31621' }}
          >
            Tired of supplements that don&apos;t work?
          </h2>
          <p className="mt-4 text-base md:text-lg text-neutral-700 max-w-3xl mx-auto">
            Most weight-support products either rely on harsh stimulants or do
            nothing at all. Yuko was built differently.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="order-2 lg:order-1">
            <p className="text-base md:text-lg text-neutral-800 leading-relaxed mb-6">
              Walk down any supplement aisle and you&apos;ll see the same
              broken formulas — caffeine-loaded fat burners, chalky shakes,
              pills that sit in your gut without absorbing. They leave you
              jittery, exhausted, or no better than before.
            </p>

            <div
              className="rounded-2xl p-6 md:p-7 mb-6"
              style={{ backgroundColor: '#ffeaea' }}
            >
              <p
                className="text-sm md:text-base font-semibold mb-4"
                style={{ color: '#a31621' }}
              >
                Why most supplements fail:
              </p>
              <ul className="space-y-3">
                {negatives.map((n, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm md:text-base text-neutral-800"
                  >
                    <span
                      aria-hidden
                      className="inline-flex h-5 w-5 mt-0.5 items-center justify-center rounded-full text-white text-xs font-bold flex-none"
                      style={{ backgroundColor: '#a31621' }}
                    >
                      ×
                    </span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-base md:text-lg text-neutral-800 leading-relaxed mb-6">
              <span className="font-semibold" style={{ color: '#a31621' }}>
                Yuko
              </span>{' '}
              is Korean-formulated to work with your body — pomegranate jelly,
              4 evidence-backed ingredients, designed for women.
            </p>

            <ul className="space-y-3 mb-8">
              {bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm md:text-base text-neutral-800"
                >
                  <span
                    aria-hidden
                    className="inline-flex h-5 w-5 mt-0.5 items-center justify-center rounded-full text-white text-xs font-bold flex-none"
                    style={{ backgroundColor: '#a31621' }}
                  >
                    ✓
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="button"
                onClick={() => openReserve()}
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm md:text-base font-semibold tracking-wide text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#a31621' }}
              >
                Reserve Yours
              </button>
              <div className="flex items-center gap-2 text-sm text-neutral-700">
                <span
                  aria-hidden
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full"
                  style={{ backgroundColor: '#ffeaea', color: '#a31621' }}
                >
                  ✓
                </span>
                <span>90-day money-back guarantee</span>
              </div>
            </div>
          </div>

          {/* Right: image */}
          <div className="order-1 lg:order-2">
            <div
              className="rounded-3xl overflow-hidden border border-neutral-200/70"
              style={{ backgroundColor: '#ffeaea' }}
            >
              <img
                src="//eatnumi.com/cdn/shop/files/NUMI_DESIGN_3_1.webp?v=1772713893&width=600"
                alt="Product image"
                loading="lazy"
                className="w-full h-auto block object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PSection4;
