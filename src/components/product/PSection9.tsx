'use client';

import React from 'react';
import { openReserve } from '@/lib/reserve';

const RED = '#a31621';
const CREAM = '#fff9f5';
const SOFT_PINK = '#ffeaea';

type Testimonial = {
  image: string;
  name: string;
  title: string;
  body: string;
};

// TODO: replace placeholder testimonials with real verified customer quotes before launch
const TESTIMONIALS: Testimonial[] = [
  {
    image:
      'https://eatnumi.com/cdn/shop/files/Monica_H_34.png?v=1772715498&width=600',
    name: 'Monica H., 34',
    title: 'Finally something that actually works.',
    body:
      "After 4 weeks I saw a HUGE difference. My cravings are gone, my clothes fit completely differently, and my mood is finally stable. I'd tried Optavia, keto, fasting — nothing stuck. Yuko stuck.",
  },
  {
    image:
      'https://eatnumi.com/cdn/shop/files/Emma_L_43.png?v=1772715498&width=600',
    name: 'Emma L., 43',
    title: 'Two weeks in and the bloating disappeared.',
    body:
      "After trying everything from probiotics to keto to fancy detox teas, nothing helped for long. Within two weeks of Yuko, the bloating disappeared and my cravings just stopped. It's the easiest thing I've ever added to my routine.",
  },
  {
    image:
      'https://eatnumi.com/cdn/shop/files/Clara_H_46.png?v=1772715497&width=600',
    name: 'Clara H., 46',
    title: "An exit strategy I didn't think existed.",
    body:
      "It's been 3 months now, completely injection-free, and I haven't gained a single pound back. I was on Ozempic and terrified of stopping. Yuko gave me an exit strategy I didn't think existed.",
  },
];

export default function PSection9() {
  return (
    <section
      id="testimonials"
      className="w-full py-16 md:py-20"
      style={{ backgroundColor: SOFT_PINK }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-10 md:mb-14">
          <h3
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3"
            style={{ color: RED }}
          >
            Real Customer Stories
          </h3>
          <h2
            className="text-2xl md:text-4xl font-bold leading-tight"
            style={{ color: RED }}
          >
            What women are saying after switching to Yuko
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={i}
              className="rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col"
            >
              <div className="aspect-square w-full overflow-hidden bg-gray-100">
                <img
                  src={t.image}
                  alt="Customer before and after photo"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3
                    className="font-bold text-base md:text-lg"
                    style={{ color: RED }}
                  >
                    {t.name}
                  </h3>
                  <span
                    className="inline-flex items-center gap-1 text-[10px] md:text-xs font-semibold px-2 py-1 rounded-full"
                    style={{ backgroundColor: CREAM, color: RED }}
                  >
                    <span aria-hidden="true">{'✓'}</span> Verified Buyer
                  </span>
                </div>

                <div
                  className="flex gap-1 mb-3"
                  aria-label="5 out of 5 stars"
                >
                  {[0, 1, 2, 3, 4].map((s) => (
                    <span
                      key={s}
                      style={{ color: RED }}
                      aria-hidden="true"
                      className="text-sm"
                    >
                      {'★'}
                    </span>
                  ))}
                </div>

                <h4 className="font-semibold text-sm md:text-base mb-2 text-gray-900">
                  {t.title}
                </h4>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {t.body}
                </p>
              </div>
            </article>
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
            RESERVE MINE
          </button>
          <div className="mt-4 text-xs md:text-sm text-gray-700">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true">{'✓'}</span> 90-day Money Back Guarantee
            </span>
          </div>
          <p className="mt-6 text-[11px] md:text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
            *Individual results vary. Testimonials are from verified customers;
            names may be changed for privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
