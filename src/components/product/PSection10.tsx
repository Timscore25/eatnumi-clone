import React from 'react';

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
    text: 'Lorem ipsum dolor sit amet consectetur',
  },
  {
    image:
      'https://eatnumi.com/cdn/shop/files/79.png?v=1772715663&width=300',
    text: 'Sed do eiusmod tempor incididunt ut',
  },
  {
    image:
      'https://eatnumi.com/cdn/shop/files/90.png?v=1772715663&width=300',
    text: 'Ut enim ad minim veniam quis nostrud',
  },
  {
    image:
      'https://eatnumi.com/cdn/shop/files/87.png?v=1772715663&width=300',
    text: 'Duis aute irure dolor in reprehenderit',
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
              Lorem ipsum dolor sit amet:
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                <strong style={{ color: RED }}>
                  Lorem ipsum dolor sit amet consectetur.
                </strong>{' '}
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris.
              </p>
            </div>

            <div className="mt-6 md:mt-8">
              <a
                href="#buy-box"
                className="inline-block rounded-full px-8 md:px-10 py-3 md:py-4 text-white text-sm md:text-base font-bold tracking-wide shadow-md transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: RED }}
              >
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
