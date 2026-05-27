'use client';

import React from 'react';
import { openReserve } from '@/lib/reserve';

const items = [
  {
    src: '//eatnumi.com/cdn/shop/files/p1-8.png?v=1775174196&width=800',
    caption: 'Korean-formulated 4-in-1 system for stubborn fat and cravings.',
  },
  {
    src: '//eatnumi.com/cdn/shop/files/p6-1.png?v=1775174196&width=800',
    caption:
      'Pomegranate jelly absorbs faster than capsules. No water needed.',
  },
  {
    src: '//eatnumi.com/cdn/shop/files/p6-6.png?v=1775174196&width=800',
    caption:
      'Helps 100,000+ women quiet food noise and feel satisfied.',
  },
  {
    src: '//eatnumi.com/cdn/shop/files/p6-2-2.png?v=1775174196&width=800',
    caption:
      'Say bye to bloating, low energy, midsection weight, and stalled progress.',
  },
  {
    src: '//eatnumi.com/cdn/shop/files/p6-10.png?v=1776772710&width=800',
    caption:
      'No more brain fog, sugar crashes, or feeling defeated by 3pm.',
  },
  {
    src: '//eatnumi.com/cdn/shop/files/p6-5.png?v=1776772710&width=800',
    caption:
      'You can feel like yourself again. Balanced, lean, glowing, alive.',
  },
];

const PSection3: React.FC = () => {
  return (
    <section
      className="w-full py-16 md:py-20"
      style={{ backgroundColor: '#fff9f5' }}
      aria-labelledby="psection3-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-14 text-center">
          <h2
            id="psection3-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
            style={{ color: '#a31621' }}
          >
            Why women keep coming back to Yuko
          </h2>
          <p className="mt-4 text-base md:text-lg text-neutral-700 max-w-3xl mx-auto">
            These aren&apos;t influencers. These are real women who tried
            everything else first.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-sm border border-neutral-200/70 flex flex-col"
              style={{ backgroundColor: '#ffffff' }}
            >
              <div className="aspect-square w-full overflow-hidden" style={{ backgroundColor: '#ffeaea' }}>
                <img
                  src={item.src}
                  alt="Yuko product"
                  loading="lazy"
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div
                className="p-5 md:p-6 flex-1"
                style={{ backgroundColor: '#ffeaea' }}
              >
                <p className="text-sm md:text-base text-neutral-800 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => openReserve()}
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm md:text-base font-semibold tracking-wide text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#a31621' }}
          >
            Reserve Yours
          </button>
        </div>
      </div>
    </section>
  );
};

export default PSection3;
