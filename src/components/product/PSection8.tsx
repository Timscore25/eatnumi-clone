'use client';

import React from 'react';
import { openReserve } from '@/lib/reserve';

const RED = '#a31621';
const CREAM = '#fff9f5';
const SOFT_PINK = '#ffeaea';

const ROWS: Array<{ brand: string; other: string }> = [
  {
    brand: 'Korean-formulated 4-in-1 system',
    other: 'Single-ingredient gimmicks',
  },
  {
    brand: 'Quiets cravings naturally (no stimulants)',
    other: 'Caffeine-loaded fat burners',
  },
  {
    brand: 'Pomegranate jelly — tastes like a treat',
    other: 'Chalky pills or fishy powders',
  },
  {
    brand: 'Faster absorption than capsules',
    other: 'Poor bioavailability',
  },
  {
    brand: 'Collagen + HA protect your skin',
    other: 'Hollow-face risk during weight loss',
  },
  {
    brand: 'Made in GMP-certified facility',
    other: 'Unverified overseas factories',
  },
  {
    brand: 'Less than $2/day',
    other: '$1,200/month GLP-1 injections',
  },
  {
    brand: '90-day money-back guarantee',
    other: 'No refunds, all sales final',
  },
  {
    brand: 'Developed with Korean wellness science',
    other: 'Generic Western supplement blends',
  },
  {
    brand: '100,000+ real women, real results',
    other: 'Influencer-only testimonials',
  },
];

export default function PSection8() {
  return (
    <section
      id="comparison"
      className="w-full py-16 md:py-20"
      style={{ backgroundColor: CREAM }}
    >
      <div className="mx-auto max-w-5xl px-4">
        <h2
          className="text-center font-bold text-2xl md:text-4xl mb-3 leading-tight"
          style={{ color: RED }}
        >
          Why women choose Yuko over the alternatives
        </h2>
        <p className="text-center text-sm md:text-base text-neutral-700 max-w-2xl mx-auto mb-10 md:mb-14">
          Most supplements only address one symptom. Yuko was built for the
          full picture.
        </p>

        {/* Header row */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-2 md:gap-6 items-center mb-4 md:mb-6">
          <div
            className="rounded-2xl py-4 md:py-6 px-3 md:px-6 text-center shadow-sm"
            style={{ backgroundColor: '#ffffff', border: `2px solid ${RED}` }}
          >
            <img
              src="https://eatnumi.com/cdn/shop/files/NUMI_DESIGN_4.png?v=1772715282&width=200"
              alt="Brand logo"
              loading="lazy"
              className="mx-auto h-8 md:h-10 w-auto object-contain"
            />
            <div className="mt-2 text-xs md:text-sm font-semibold" style={{ color: RED }}>
              Yuko
            </div>
          </div>

          <div
            className="rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center font-bold text-sm md:text-base text-white shadow"
            style={{ backgroundColor: RED }}
          >
            VS.
          </div>

          <div
            className="rounded-2xl py-4 md:py-6 px-3 md:px-6 text-center bg-white shadow-sm"
            style={{ border: '1px solid #e5e5e5' }}
          >
            <div className="text-xs md:text-sm font-semibold text-gray-500">
              Other Brands
            </div>
            <div className="mt-2 text-[11px] md:text-xs text-gray-400">
              GLP-1s &amp; generic supplements
            </div>
          </div>
        </div>

        {/* Rows */}
        <div className="space-y-2 md:space-y-3">
          {ROWS.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_auto_1fr] gap-2 md:gap-6 items-stretch"
            >
              <div
                className="rounded-xl px-3 md:px-5 py-3 md:py-4 flex items-center gap-2 md:gap-3 text-xs md:text-sm"
                style={{ backgroundColor: SOFT_PINK }}
              >
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs"
                  style={{ backgroundColor: RED }}
                  aria-hidden="true"
                >
                  {'✓'}
                </span>
                <span style={{ color: RED }} className="font-medium">
                  {row.brand}
                </span>
              </div>

              <div className="w-12 md:w-16" aria-hidden="true" />

              <div
                className="rounded-xl px-3 md:px-5 py-3 md:py-4 flex items-center gap-2 md:gap-3 text-xs md:text-sm bg-white"
                style={{ border: '1px solid #ececec' }}
              >
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-gray-400 text-xs"
                  style={{ backgroundColor: '#f1f1f1' }}
                  aria-hidden="true"
                >
                  {'✕'}
                </span>
                <span className="text-gray-500">{row.other}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-14 text-center">
          <button
            type="button"
            onClick={() => openReserve()}
            className="inline-block rounded-full px-8 md:px-12 py-3 md:py-4 text-white text-sm md:text-base font-bold tracking-wide shadow-md transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: RED }}
          >
            RESERVE MINE {'→'}
          </button>
          <div className="mt-4 text-xs md:text-sm text-gray-600">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true">{'✓'}</span> 99-day Money-Back Guarantee
              · Free shipping on 2+ boxes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
