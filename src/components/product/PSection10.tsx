'use client';

import React from 'react';
import { openReserve } from '@/lib/reserve';

const RED = '#a31621';
const CREAM = '#fff9f5';
const SOFT_PINK = '#ffeaea';

type Stat = {
  image: string;
  text: string;
};

const STATS: Stat[] = [
  {
    image:
      'https://eatnumi.com/cdn/shop/files/92.png?v=1772715663&width=300',
    text: '92% felt lighter and less bloated*',
  },
  {
    image:
      'https://eatnumi.com/cdn/shop/files/79.png?v=1772715663&width=300',
    text: '90% felt satisfied until their next meal*',
  },
  {
    image:
      'https://eatnumi.com/cdn/shop/files/90.png?v=1772715663&width=300',
    text: "87% said cravings 'went quiet'*",
  },
  {
    image:
      'https://eatnumi.com/cdn/shop/files/87.png?v=1772715663&width=300',
    text: '84% said they felt more in control around food*',
  },
];

export default function PSection10() {
  return (
    <section
      id="results"
      className="w-full py-16 md:py-20"
      style={{ backgroundColor: CREAM }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div
              className="rounded-3xl overflow-hidden shadow-md"
              style={{ backgroundColor: SOFT_PINK }}
            >
              <img
                src="https://eatnumi.com/cdn/shop/files/numipdp1.png?v=1772715596&width=1200"
                alt="Product image"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2
              className="text-2xl md:text-4xl font-bold leading-tight mb-6 md:mb-8"
              style={{ color: RED }}
            >
              Yuko by the numbers:
            </h2>

            <ul className="space-y-4 md:space-y-5">
              {STATS.map((s, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 md:gap-5 rounded-2xl p-3 md:p-4"
                  style={{ backgroundColor: '#ffffff' }}
                >
                  <div
                    className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: SOFT_PINK }}
                  >
                    <img
                      src={s.image}
                      alt="Statistic icon"
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-sm md:text-base font-medium text-gray-800 leading-snug">
                    {s.text}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-6 md:mt-8 text-xs md:text-sm text-gray-600 space-y-2">
              <p>
                <strong style={{ color: RED }}>*Individual Results May Vary.</strong>{' '}
                Based on internal customer survey, n=1,247. Yuko is a dietary
                supplement and is not intended to diagnose, treat, cure, or
                prevent any disease.
              </p>
              <p>
                <strong style={{ color: RED }}>
                  Korean-formulated. Made in the USA.
                </strong>{' '}
                The perfect fusion of K-beauty innovation and American quality
                standards.
              </p>
            </div>

            <div className="mt-6 md:mt-8">
              <button
                type="button"
                onClick={() => openReserve()}
                className="inline-block rounded-full px-8 md:px-10 py-3 md:py-4 text-white text-sm md:text-base font-bold tracking-wide shadow-md transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: RED }}
              >
                RESERVE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
