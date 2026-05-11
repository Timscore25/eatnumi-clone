import React from 'react';

const bullets = [
  'Lorem ipsum dolor sit amet consectetur.',
  'Sed do eiusmod tempor incididunt ut labore.',
  'Ut enim ad minim veniam quis nostrud.',
];

const negatives = [
  'Lorem ipsum dolor sit amet.',
  'Consectetur adipiscing elit sed.',
  'Eiusmod tempor incididunt labore.',
  'Magna aliqua ut enim ad minim.',
  'Veniam quis nostrud exercitation.',
  'Ullamco laboris nisi ut aliquip.',
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
            Lorem ipsum dolor sit amet
          </h2>
          <p className="mt-4 text-base md:text-lg text-neutral-700 max-w-3xl mx-auto">
            Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua enim ad minim veniam.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="order-2 lg:order-1">
            <p className="text-base md:text-lg text-neutral-800 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris.
            </p>

            <div
              className="rounded-2xl p-6 md:p-7 mb-6"
              style={{ backgroundColor: '#ffeaea' }}
            >
              <p
                className="text-sm md:text-base font-semibold mb-4"
                style={{ color: '#a31621' }}
              >
                Lorem ipsum:
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
                Our Product
              </span>{' '}
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore.
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
              <a
                href="#buy-box"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm md:text-base font-semibold tracking-wide text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#a31621' }}
              >
                Shop Now
              </a>
              <div className="flex items-center gap-2 text-sm text-neutral-700">
                <span
                  aria-hidden
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full"
                  style={{ backgroundColor: '#ffeaea', color: '#a31621' }}
                >
                  ✓
                </span>
                <span>Lorem ipsum guarantee</span>
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
