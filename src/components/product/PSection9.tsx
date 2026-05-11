import React from 'react';

const RED = '#a31621';
const CREAM = '#fff9f5';
const SOFT_PINK = '#ffeaea';

type Testimonial = {
  image: string;
  name: string;
  title: string;
  body: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    image:
      'https://eatnumi.com/cdn/shop/files/Monica_H_34.png?v=1772715498&width=600',
    name: 'Reviewer A',
    title: 'Lorem ipsum dolor sit amet',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
  },
  {
    image:
      'https://eatnumi.com/cdn/shop/files/Emma_L_43.png?v=1772715498&width=600',
    name: 'Reviewer B',
    title: 'Consectetur adipiscing elit sed',
    body:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    image:
      'https://eatnumi.com/cdn/shop/files/Clara_H_46.png?v=1772715497&width=600',
    name: 'Reviewer C',
    title: 'Sed ut perspiciatis unde omnis',
    body:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.',
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
            Lorem Ipsum Dolor Sit
          </h3>
          <h2
            className="text-2xl md:text-4xl font-bold leading-tight"
            style={{ color: RED }}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit
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
          <a
            href="#buy-box"
            className="inline-block rounded-full px-8 md:px-12 py-3 md:py-4 text-white text-sm md:text-base font-bold tracking-wide shadow-md transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: RED }}
          >
            REIGNITE MY CONFIDENCE
          </a>
          <div className="mt-4 text-xs md:text-sm text-gray-700">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true">{'✓'}</span> 90-day Money Back Guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
