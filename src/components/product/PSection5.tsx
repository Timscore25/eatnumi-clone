'use client';

import React from 'react';
import { openReserve } from '@/lib/reserve';

const marqueeImages = [
  '//eatnumi.com/cdn/shop/files/Numi_PDP_1.webp?v=1772714393&width=1200',
  '//eatnumi.com/cdn/shop/files/Middle_6.webp?v=1772714407&width=1200',
  '//eatnumi.com/cdn/shop/files/Numi_PDP_1_60be4de4-f7d1-440e-85c5-bf453515e83c.webp?v=1772714406&width=1200',
  '//eatnumi.com/cdn/shop/files/Screenshot_2026-02-02_at_04.33.09.png?v=1772714512&width=1200',
  '//eatnumi.com/cdn/shop/files/Middle.png?v=1772714511&width=1200',
  '//eatnumi.com/cdn/shop/files/Bottom.png?v=1772714511&width=1200',
  '//eatnumi.com/cdn/shop/files/Top_2.png?v=1772714634&width=1200',
  '//eatnumi.com/cdn/shop/files/Screenshot_2026-02-02_at_04.34.37.png?v=1772714635&width=1200',
  '//eatnumi.com/cdn/shop/files/Screenshot_2026-02-02_at_04.36.36.png?v=1772714635&width=1200',
  '//eatnumi.com/cdn/shop/files/Screenshot_2026-02-02_at_04.38.44.png?v=1772714742&width=1200',
  '//eatnumi.com/cdn/shop/files/Middle_2.png?v=1772714741&width=1200',
  '//eatnumi.com/cdn/shop/files/Bottom_2.png?v=1772714741&width=1200',
];

const PSection5: React.FC = () => {
  // Duplicate the list to create a seamless marquee loop
  const loopItems = [...marqueeImages, ...marqueeImages];

  return (
    <section
      className="w-full py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: '#fff9f5' }}
      aria-labelledby="psection5-heading"
    >
      <style>{`
        @keyframes psection5-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .psection5-track {
          animation: psection5-marquee 40s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .psection5-track { animation: none; }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 md:mb-14">
        <div className="text-center">
          <p
            className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: '#a31621' }}
          >
            Real Women, Real Results
          </p>
          <h2
            id="psection5-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
            style={{ color: '#a31621' }}
          >
            From &lsquo;Nothing&apos;s Working&rsquo; to &lsquo;I Finally Feel
            Like Myself&rsquo;
          </h2>
          <p className="mt-4 text-base md:text-lg text-neutral-700 max-w-3xl mx-auto">
            Women across the U.S. are quietly trading injections, fad diets,
            and overpriced programs for one Korean jelly stick a day.
            Here&apos;s what their everyday looks like with Yuko.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
            <button
              type="button"
              onClick={() => openReserve()}
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm md:text-base font-semibold tracking-wide text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#a31621' }}
            >
              Reserve Yours
            </button>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm md:text-base font-semibold tracking-wide border-2 transition-colors"
              style={{ borderColor: '#a31621', color: '#a31621' }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Marquee row */}
      <div className="relative w-full">
        <div
          className="flex w-max psection5-track gap-4 md:gap-6"
          aria-hidden="true"
        >
          {loopItems.map((src, i) => (
            <div
              key={i}
              className="flex-none w-[260px] sm:w-[320px] md:w-[380px] aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-neutral-200/70"
              style={{ backgroundColor: '#ffeaea' }}
            >
              <img
                src={src}
                alt="Customer image"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 md:mt-14">
        <div className="flex justify-center">
          <a
            href="#"
            className="text-sm md:text-base font-semibold underline underline-offset-4"
            style={{ color: '#a31621' }}
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
};

export default PSection5;
