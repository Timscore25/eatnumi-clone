'use client';

import { useEffect, useState } from 'react';

const BRAND_RED = '#a31621';
const BRAND_CREAM = '#fff9f5';
const SOFT_PINK = '#ffeaea';
const TEXT_DARK = '#000000';
const MUTED = '#4b5563';

const PRODUCT_LINK = '/product';

const IMG = {
  authorSarah:
    'https://eatnumi.com/cdn/shop/files/author-sarah-BmnHezum.jpg?v=1774333100&width=200',
  heroVideoPoster:
    'https://eatnumi.com/cdn/shop/files/preview_images/e5323f9dab8c4e2d9234666e9c09096c.thumbnail.0000000000_1100x.jpg?v=1774333266',
  reason1:
    'https://eatnumi.com/cdn/shop/files/p6-6.webp?v=1774333373&width=800',
  comparisonInfographic:
    'https://eatnumi.com/cdn/shop/files/numi-comparison-infographic.webp?v=1774333910&width=2000',
  heroBeforeAfter:
    'https://eatnumi.com/cdn/shop/files/hero-before-after.webp?v=1774334205&width=2000',
  customersHappy:
    'https://eatnumi.com/cdn/shop/files/customers-happy.webp?v=1774334815&width=2000',
  ba2: 'https://eatnumi.com/cdn/shop/files/ba-2-BY.jpg?v=1774334815&width=2000',
  ba3: 'https://eatnumi.com/cdn/shop/files/ba-3.jpg?v=1774334815&width=2000',
  guaranteeBadge:
    'https://eatnumi.com/cdn/shop/files/90days-money-back-D1SkXhPz.svg?v=1774335145&width=200',
  productBoxes:
    'https://eatnumi.com/cdn/shop/files/numi-product-boxes-vOSGKMDM.webp?v=1774335258&width=600',
  reviewer1:
    'https://eatnumi.com/cdn/shop/files/img-2.webp?v=1774335863',
  reviewer2:
    'https://eatnumi.com/cdn/shop/files/img-3.avif?v=1774335965',
  reviewer3:
    'https://eatnumi.com/cdn/shop/files/img4.jpg?v=1774335767',
  reviewer4:
    'https://eatnumi.com/cdn/shop/files/img5.webp?v=1774336016',
  reviewer5:
    'https://eatnumi.com/cdn/shop/files/img6.avif?v=1774336045',
  reviewer6:
    'https://eatnumi.com/cdn/shop/files/img1_002b8e6c-6a81-48ed-951c-1ecf24e3ce06.webp?v=1774336134',
  reviewer7:
    'https://eatnumi.com/cdn/shop/files/img7.jpg?v=1774336181',
  reviewer8:
    'https://eatnumi.com/cdn/shop/files/img8.webp?v=1774336222',
  reviewer9:
    'https://eatnumi.com/cdn/shop/files/img9.webp?v=1774336277',
  reviewer10:
    'https://eatnumi.com/cdn/shop/files/img10.avif?v=1774336344',
};

/* -------------------- Hero -------------------- */
function HeroSection() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: BRAND_CREAM, paddingTop: 24, paddingBottom: 24 }}
    >
      <div className="mx-auto max-w-[820px] px-4 md:px-6">
        <h1
          className="text-center font-semibold leading-tight"
          style={{
            color: TEXT_DARK,
            fontSize: 'clamp(26px, 3.4vw, 44px)',
            letterSpacing: '-0.01em',
          }}
        >
          5 Reasons To Choose Our{' '}
          <span style={{ color: BRAND_RED }}>Featured Product</span>
        </h1>

        <div className="mt-5 flex items-center justify-center gap-3">
          <img
            src={IMG.authorSarah}
            alt="Author"
            loading="lazy"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="leading-tight">
            <div className="text-sm font-semibold" style={{ color: TEXT_DARK }}>
              By&nbsp;Author
            </div>
            <div className="text-xs" style={{ color: MUTED }}>
              Last Updated February 20, 2026
            </div>
          </div>
        </div>

        <div
          className="mt-6 rounded-md p-4 md:p-5 text-[15px] md:text-base leading-relaxed"
          style={{ backgroundColor: SOFT_PINK, color: TEXT_DARK }}
        >
          <span className="font-semibold">Summary:</span>{' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris. Duis
          aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </div>

        <div className="mt-6 overflow-hidden rounded-md shadow-sm">
          <img
            src={IMG.heroVideoPoster}
            alt="Hero image"
            loading="lazy"
            className="block w-full h-auto"
          />
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href={PRODUCT_LINK}
            className="inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: BRAND_RED, fontSize: 17 }}
          >
            Start My cut →
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Reason 1 -------------------- */
function Reason1Section() {
  const milestones = [
    {
      day: '1',
      label: 'Use 1',
      title: 'Lorem ipsum dolor sit amet.',
      desc: 'Consectetur adipiscing elit.',
    },
    {
      day: '7',
      label: 'Week 1',
      title: 'Sed do eiusmod tempor incididunt.',
      desc: 'Ut labore et dolore.',
    },
    {
      day: '30',
      label: 'Month 1',
      title: 'Ut enim ad minim veniam quis.',
      desc: 'Nostrud exercitation ullamco.',
    },
    {
      day: '90',
      label: 'Month 3',
      title: 'Duis aute irure dolor in reprehenderit voluptate.',
      desc: '',
    },
  ];

  return (
    <section
      className="w-full"
      style={{ backgroundColor: BRAND_CREAM, paddingTop: 32, paddingBottom: 40 }}
    >
      <div className="mx-auto max-w-[820px] px-4 md:px-6">
        <h2
          className="font-semibold leading-tight"
          style={{
            color: TEXT_DARK,
            fontSize: 'clamp(22px, 2.8vw, 36px)',
          }}
        >
          1. Reason Number One —{' '}
          <span style={{ color: BRAND_RED }}>
            Lorem Ipsum Dolor Sit Amet
          </span>
        </h2>

        <p className="mt-4 text-[15px] md:text-base leading-relaxed" style={{ color: TEXT_DARK }}>
          Lorem ipsum dolor sit amet, consectetur{' '}
          <span className="font-semibold">adipiscing elit</span> — sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco.
        </p>

        <div
          className="mt-5 rounded-md p-4 md:p-5 text-[15px] md:text-base leading-relaxed"
          style={{ backgroundColor: SOFT_PINK, color: TEXT_DARK }}
        >
          Lorem ipsum dolor sit amet. <strong>Consectetur adipiscing.</strong>{' '}
          Sed do eiusmod. Tempor incididunt. Ut labore. Et dolore magna. Ut
          enim ad minim.
        </div>

        <div className="mt-6 overflow-hidden rounded-md">
          <img
            src={IMG.reason1}
            alt="Product image"
            loading="lazy"
            className="block w-full h-auto"
          />
        </div>

        <div className="mt-6 overflow-hidden rounded-md">
          <img
            src={IMG.comparisonInfographic}
            alt="Comparison infographic"
            loading="lazy"
            className="block w-full h-auto"
          />
        </div>

        <p
          className="mt-5 text-center text-[15px] md:text-base leading-relaxed"
          style={{ color: TEXT_DARK }}
        >
          <span className="font-semibold">Lorem ipsum dolor.</span> Sit amet
          consectetur. Adipiscing elit.
        </p>

        {/* Timeline */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {milestones.map((m) => (
            <div
              key={m.day}
              className="rounded-lg p-4 flex flex-col items-start"
              style={{ backgroundColor: '#fff', border: `1px solid ${SOFT_PINK}` }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold text-white"
                  style={{ backgroundColor: BRAND_RED }}
                >
                  Day {m.day}
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: BRAND_RED }}
                >
                  {m.label}
                </span>
              </div>
              <div
                className="mt-3 font-semibold text-[15px] leading-snug"
                style={{ color: TEXT_DARK }}
              >
                {m.title}
              </div>
              {m.desc && (
                <div className="mt-1 text-sm" style={{ color: MUTED }}>
                  {m.desc}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={PRODUCT_LINK}
            className="inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: BRAND_RED, fontSize: 17 }}
          >
            Shop Now →
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Reason 2 -------------------- */
function Reason2Section() {
  const ingredients = [
    {
      icon: '🍊',
      name: 'Ingredient One',
      meta: '(Lorem ipsum)',
      copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      icon: '🌾',
      name: 'Ingredient Two',
      meta: '',
      copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      icon: '🐟',
      name: 'Ingredient Three',
      meta: '',
      copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.',
    },
    {
      icon: '💧',
      name: 'Ingredient Four',
      meta: '',
      copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.',
    },
  ];

  return (
    <section
      className="w-full"
      style={{ backgroundColor: BRAND_CREAM, paddingTop: 32, paddingBottom: 40 }}
    >
      <div className="mx-auto max-w-[820px] px-4 md:px-6">
        <h2
          className="font-semibold leading-tight"
          style={{
            color: TEXT_DARK,
            fontSize: 'clamp(22px, 2.8vw, 36px)',
          }}
        >
          2. Reason Number Two —{' '}
          <span style={{ color: BRAND_RED }}>Lorem Ipsum Dolor</span> Sit Amet
          Consectetur Adipiscing
        </h2>

        <p
          className="mt-4 text-[15px] md:text-base leading-relaxed"
          style={{ color: TEXT_DARK }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua:
        </p>

        <div className="mt-6 overflow-hidden rounded-md">
          <img
            src={IMG.heroBeforeAfter}
            alt="Before and after"
            loading="lazy"
            className="block w-full h-auto"
          />
        </div>

        <div className="mt-6 grid gap-4">
          {ingredients.map((ing) => (
            <div
              key={ing.name}
              className="flex items-start gap-4 rounded-lg p-4"
              style={{ backgroundColor: '#fff', border: `1px solid ${SOFT_PINK}` }}
            >
              <div className="text-3xl leading-none shrink-0">{ing.icon}</div>
              <div>
                <div
                  className="font-semibold text-[16px]"
                  style={{ color: TEXT_DARK }}
                >
                  {ing.name}
                  {ing.meta && (
                    <span className="ml-1 text-sm font-normal" style={{ color: MUTED }}>
                      {ing.meta}
                    </span>
                  )}
                </div>
                <p
                  className="mt-1 text-[15px] leading-relaxed"
                  style={{ color: TEXT_DARK }}
                >
                  {ing.copy}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="mt-6 text-[15px] md:text-base leading-relaxed"
          style={{ color: TEXT_DARK }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do{' '}
          <span className="font-semibold">
            eiusmod tempor incididunt
          </span>{' '}
          ut labore et dolore magna aliqua, ut enim ad minim veniam quis
          nostrud exercitation ullamco.
        </p>

        <div className="mt-7 flex justify-center">
          <a
            href={PRODUCT_LINK}
            className="inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: BRAND_RED, fontSize: 16 }}
          >
            See The Full Ingredient Breakdown →
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Reason 3 -------------------- */
function Reason3Section() {
  const bullets = [
    'Lorem ipsum dolor sit amet consectetur',
    'Adipiscing elit sed do eiusmod tempor incididunt ut labore',
    'Ut enim ad minim veniam quis nostrud',
    'Duis aute irure dolor in reprehenderit voluptate velit',
  ];

  return (
    <section
      className="w-full"
      style={{ backgroundColor: BRAND_CREAM, paddingTop: 32, paddingBottom: 40 }}
    >
      <div className="mx-auto max-w-[820px] px-4 md:px-6">
        <h2
          className="font-semibold leading-tight"
          style={{
            color: TEXT_DARK,
            fontSize: 'clamp(22px, 2.8vw, 36px)',
          }}
        >
          3. Reason Number Three —{' '}
          <span style={{ color: BRAND_RED }}>
            Lorem Ipsum Dolor Sit Amet
          </span>
        </h2>

        <p
          className="mt-4 text-[15px] md:text-base leading-relaxed"
          style={{ color: TEXT_DARK }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="mt-6 overflow-hidden rounded-md">
          <img
            src={IMG.customersHappy}
            alt="Customer image"
            loading="lazy"
            className="block w-full h-auto"
          />
        </div>

        <p
          className="mt-6 text-[15px] md:text-base leading-relaxed"
          style={{ color: TEXT_DARK }}
        >
          <span className="font-semibold">Lorem ipsum dolor.</span> Sit amet
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt. Ut
          labore et dolore magna aliqua —{' '}
          <em>ut enim ad minim veniam</em>. Quis nostrud exercitation. Ullamco
          laboris nisi.
        </p>

        <p
          className="mt-4 text-[15px] md:text-base leading-relaxed"
          style={{ color: TEXT_DARK }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut{' '}
          <a
            href={PRODUCT_LINK}
            className="font-semibold underline"
            style={{ color: BRAND_RED }}
          >
            labore et dolore magna
          </a>{' '}
          aliqua, ut enim ad minim veniam quis nostrud exercitation:
        </p>

        <ul className="mt-5 space-y-3">
          {bullets.map((b) => (
            <li
              key={b}
              className="relative pl-7 text-[15px] md:text-base leading-relaxed"
              style={{ color: TEXT_DARK }}
            >
              <span
                className="absolute left-0 top-1 inline-block h-4 w-4 rounded-full"
                style={{
                  background: BRAND_RED,
                  boxShadow: 'inset 0 0 0 4px ' + BRAND_CREAM,
                }}
                aria-hidden
              />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <a
            href={PRODUCT_LINK}
            className="inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: BRAND_RED, fontSize: 17 }}
          >
            Shop Now →
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Reason 4 -------------------- */
function Reason4Section() {
  const stats = [
    { pct: '92%', txt: 'lorem ipsum dolor sit amet*' },
    { pct: '90%', txt: 'consectetur adipiscing elit sed*' },
    { pct: '87%', txt: 'eiusmod tempor incididunt ut*' },
    { pct: '84%', txt: 'labore et dolore magna aliqua*' },
  ];

  const beforeAfter = [
    { src: IMG.ba2, alt: 'Customer image' },
    { src: IMG.ba3, alt: 'Customer image' },
  ];

  return (
    <section
      className="w-full"
      style={{ backgroundColor: BRAND_CREAM, paddingTop: 32, paddingBottom: 40 }}
    >
      <div className="mx-auto max-w-[820px] px-4 md:px-6">
        <h2
          className="font-semibold leading-tight"
          style={{
            color: TEXT_DARK,
            fontSize: 'clamp(22px, 2.8vw, 36px)',
          }}
        >
          4. Reason Number Four —{' '}
          <span style={{ color: BRAND_RED }}>Lorem Ipsum Dolor</span>
        </h2>

        <p
          className="mt-4 text-[15px] md:text-base leading-relaxed"
          style={{ color: TEXT_DARK }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit:
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.pct}
              className="rounded-lg p-4 text-center"
              style={{ backgroundColor: '#fff', border: `1px solid ${SOFT_PINK}` }}
            >
              <div
                className="text-3xl md:text-4xl font-bold"
                style={{ color: BRAND_RED }}
              >
                {s.pct}
              </div>
              <div
                className="mt-1 text-[13px] md:text-sm leading-snug"
                style={{ color: TEXT_DARK }}
              >
                {s.txt}
              </div>
            </div>
          ))}
        </div>

        <p
          className="mt-3 text-xs italic"
          style={{ color: MUTED }}
        >
          *Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <p
          className="mt-6 text-[15px] md:text-base leading-relaxed"
          style={{ color: TEXT_DARK }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {beforeAfter.map((ba, i) => (
            <div key={i} className="overflow-hidden rounded-md">
              <img
                src={ba.src}
                alt={ba.alt}
                loading="lazy"
                className="block w-full h-auto"
              />
            </div>
          ))}
        </div>

        {/* Two short testimonials */}
        <div className="mt-7 grid gap-4">
          <div
            className="rounded-md p-4 md:p-5"
            style={{ backgroundColor: SOFT_PINK }}
          >
            <div className="font-semibold" style={{ color: BRAND_RED }}>
              Reviewer A
            </div>
            <p
              className="mt-1 text-[15px] leading-relaxed"
              style={{ color: TEXT_DARK }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
          <div
            className="rounded-md p-4 md:p-5"
            style={{ backgroundColor: SOFT_PINK }}
          >
            <div className="font-semibold" style={{ color: BRAND_RED }}>
              Reviewer B
            </div>
            <p
              className="mt-1 text-[15px] leading-relaxed"
              style={{ color: TEXT_DARK }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>

        <p
          className="mt-6 text-[15px] md:text-base leading-relaxed italic"
          style={{ color: TEXT_DARK }}
        >
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          do eiusmod tempor.&quot; — Lorem ipsum dolor sit amet consectetur
          adipiscing elit.
        </p>

        <p className="mt-2 text-xs italic" style={{ color: MUTED }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href={PRODUCT_LINK}
            className="inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: BRAND_RED, fontSize: 17 }}
          >
            View More Reviews →
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Reason 5: Money Back + Sale Pamphlet -------------------- */
function Reason5Section() {
  const [remaining, setRemaining] = useState<number>(60 * 60 * 2 - 8); // ~ 01:59:52

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((r) => (r > 0 ? r - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => ('0' + n).slice(-2);
  const hh = pad(Math.floor(remaining / 3600));
  const mm = pad(Math.floor((remaining % 3600) / 60));
  const ss = pad(remaining % 60);

  return (
    <section
      className="w-full"
      style={{ backgroundColor: BRAND_CREAM, paddingTop: 0, paddingBottom: 40 }}
    >
      <div className="mx-auto max-w-[820px] px-4 md:px-6">
        <h2
          className="font-semibold leading-tight"
          style={{
            color: TEXT_DARK,
            fontSize: 'clamp(22px, 2.8vw, 36px)',
          }}
        >
          5. It Comes With A{' '}
          <span style={{ color: BRAND_RED }}>
            Lorem Ipsum Dolor Sit
          </span>
        </h2>

        <p
          className="mt-4 text-[15px] md:text-base leading-relaxed"
          style={{ color: TEXT_DARK }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation.
        </p>

        <div className="mt-6 flex flex-col items-center text-center gap-4 md:flex-row md:text-left md:items-start">
          <img
            src={IMG.guaranteeBadge}
            alt="Guarantee badge"
            loading="lazy"
            className="h-28 w-28 md:h-32 md:w-32 shrink-0"
          />
          <p
            className="text-[15px] md:text-base leading-relaxed"
            style={{ color: TEXT_DARK }}
          >
            Lorem ipsum dolor sit{' '}
            <span className="font-semibold">Lorem ipsum dolor sit amet.</span>{' '}
            Consectetur adipiscing elit sed do eiusmod tempor.
          </p>
        </div>

        <p
          className="mt-5 text-[15px] md:text-base leading-relaxed"
          style={{ color: TEXT_DARK }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua... ut
          enim ad minim veniam quis nostrud... duis aute irure dolor in
          reprehenderit voluptate...
        </p>

        <p
          className="mt-4 text-[15px] md:text-base leading-relaxed font-semibold"
          style={{ color: TEXT_DARK }}
        >
          Lorem ipsum dolor sit amet. Consectetur adipiscing elit.
        </p>

        <p
          className="mt-4 text-[15px] md:text-base leading-relaxed"
          style={{ color: TEXT_DARK }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore.
        </p>

        {/* Limited Time Sale Pamphlet */}
        <div
          className="mt-8 rounded-2xl overflow-hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(255, 245, 240, 1), rgba(255, 235, 229, 1) 100%)',
            border: `1px solid ${SOFT_PINK}`,
          }}
        >
          <div
            className="text-center py-2 font-semibold text-white tracking-wide"
            style={{ backgroundColor: BRAND_RED, fontSize: 16 }}
          >
            🎉 LIMITED TIME SALE 🎉 LIMITED STOCK
          </div>

          <div className="px-4 md:px-8 py-6 md:py-8 text-center">
            <p
              className="text-sm md:text-[15px] font-semibold uppercase tracking-wide"
              style={{ color: BRAND_RED }}
            >
              Lorem Ipsum Dolor Sit Amet
            </p>
            <h3
              className="mt-2 font-bold leading-tight"
              style={{ color: BRAND_RED, fontSize: 'clamp(22px, 2.6vw, 32px)' }}
            >
              Lorem ipsum dolor sit amet consectetur
            </h3>

            <p
              className="mt-3 text-[15px] md:text-base leading-relaxed"
              style={{ color: TEXT_DARK }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <img
                src={IMG.productBoxes}
                alt="Product boxes"
                loading="lazy"
                className="block mx-auto w-full max-w-[320px] h-auto"
              />
              <div>
                <ul className="space-y-2 text-left text-[15px]" style={{ color: TEXT_DARK }}>
                  <li className="flex items-start gap-2">
                    <span style={{ color: BRAND_RED }}>✓</span>
                    <span>
                      <span className="font-semibold">Lorem</span> ipsum dolor
                      sit
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: BRAND_RED }}>✓</span>
                    <span>
                      <span className="font-semibold">Lorem</span> ipsum
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: BRAND_RED }}>✓</span>
                    <span>Lorem ipsum dolor sit amet</span>
                  </li>
                </ul>

                <a
                  href={PRODUCT_LINK}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full px-6 py-3 font-bold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: BRAND_RED, fontSize: 18 }}
                >
                  SHOP NOW
                </a>
              </div>
            </div>

            <div
              className="mt-5 text-sm md:text-[15px] font-medium"
              style={{ color: BRAND_RED }}
            >
              Sale Ends In:&nbsp;
              <span className="tabular-nums font-bold">
                {hh} : {mm} : {ss}
              </span>
            </div>
          </div>
        </div>

        <p
          className="mt-6 text-center text-[15px] md:text-base leading-relaxed"
          style={{ color: TEXT_DARK }}
        >
          <span className="font-semibold">
            Lorem ipsum dolor sit amet.
          </span>{' '}
          Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>

        <div className="mt-6 flex justify-center">
          <a
            href={PRODUCT_LINK}
            className="inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: BRAND_RED, fontSize: 17 }}
          >
            Check Availability →
          </a>
        </div>

        <p
          className="mt-3 text-center text-xs md:text-sm font-semibold"
          style={{ color: BRAND_RED }}
        >
          Sell-Out Risk: HIGH | LIMITED UNITS AVAILABLE
        </p>
      </div>
    </section>
  );
}

/* -------------------- Social Proof / Reviews Wall -------------------- */
type Review = {
  name: string;
  img: string;
  time: string;
  reaction: string;
  count: number;
  text: string;
};

const LOREM_SHORT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const LOREM_MEDIUM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const LOREM_LONG =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.';

const reviews: Review[] = [
  { name: 'Reviewer A', img: IMG.reviewer1, time: '1w', reaction: '❤️', count: 89, text: LOREM_LONG },
  { name: 'Reviewer B', img: IMG.reviewer2, time: '3d', reaction: '👍❤️', count: 121, text: LOREM_LONG },
  { name: 'Reviewer C', img: IMG.reviewer3, time: '5d', reaction: '❤️', count: 67, text: LOREM_MEDIUM },
  { name: 'Reviewer D', img: IMG.reviewer4, time: '1w', reaction: '👍❤️', count: 203, text: LOREM_MEDIUM },
  { name: 'Reviewer E', img: IMG.reviewer5, time: '4d', reaction: '❤️🔥', count: 156, text: LOREM_MEDIUM },
  { name: 'Reviewer F', img: IMG.reviewer6, time: '6d', reaction: '👍', count: 78, text: LOREM_SHORT },
  { name: 'Reviewer G', img: IMG.reviewer7, time: '2w', reaction: '❤️👍', count: 234, text: LOREM_LONG },
  { name: 'Reviewer H', img: IMG.reviewer8, time: '5d', reaction: '😮❤️', count: 92, text: LOREM_SHORT },
  { name: 'Reviewer I', img: IMG.reviewer9, time: '1w', reaction: '❤️', count: 187, text: LOREM_MEDIUM },
  { name: 'Reviewer J', img: IMG.reviewer10, time: '3d', reaction: '👍❤️', count: 143, text: LOREM_MEDIUM },
  { name: 'Reviewer K', img: IMG.reviewer1, time: '1w', reaction: '👍', count: 56, text: LOREM_SHORT },
  { name: 'Reviewer L', img: IMG.reviewer2, time: '2d', reaction: '🔥❤️', count: 312, text: LOREM_LONG },
  { name: 'Reviewer M', img: IMG.reviewer3, time: '4d', reaction: '😮👍', count: 98, text: LOREM_MEDIUM },
  { name: 'Reviewer N', img: IMG.reviewer4, time: '1w', reaction: '❤️🎉', count: 276, text: LOREM_MEDIUM },
  { name: 'Reviewer O', img: IMG.reviewer5, time: '5d', reaction: '❤️💪', count: 189, text: LOREM_MEDIUM },
  { name: 'Reviewer P', img: IMG.reviewer6, time: '3d', reaction: '👍', count: 71, text: LOREM_MEDIUM },
  { name: 'Reviewer Q', img: IMG.reviewer7, time: '1d', reaction: '❤️👍🔥', count: 401, text: LOREM_LONG },
];

function ReviewsWallSection() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: BRAND_CREAM, paddingTop: 32, paddingBottom: 48 }}
    >
      <div className="mx-auto max-w-[1100px] px-4 md:px-6">
        <h2
          className="text-center font-semibold leading-tight"
          style={{
            color: TEXT_DARK,
            fontSize: 'clamp(22px, 2.6vw, 34px)',
          }}
        >
          Trusted By <span style={{ color: BRAND_RED }}>Many Customers</span>
        </h2>

        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="text-sm font-semibold" style={{ color: TEXT_DARK }}>
            Excellent
          </span>
          <span className="flex" aria-hidden>
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} style={{ color: '#22C55E' }}>★</span>
            ))}
          </span>
          <span className="text-sm font-semibold" style={{ color: TEXT_DARK }}>
            4.5
          </span>
          <span className="text-sm" style={{ color: MUTED }}>
            Trustpilot
          </span>
        </div>

        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="rounded-lg p-4 flex flex-col"
              style={{ backgroundColor: '#fff', border: `1px solid ${SOFT_PINK}` }}
            >
              <div className="flex items-center gap-3">
                <img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{ color: TEXT_DARK }}
                  >
                    {r.name}
                  </div>
                  <div className="text-xs" style={{ color: MUTED }}>
                    {r.time}
                  </div>
                </div>
              </div>
              <p
                className="mt-3 text-[14px] leading-relaxed flex-1"
                style={{ color: TEXT_DARK }}
              >
                {r.text}
              </p>
              <div
                className="mt-3 pt-3 flex items-center justify-between text-xs"
                style={{ borderTop: `1px solid ${SOFT_PINK}`, color: MUTED }}
              >
                <div className="flex gap-3">
                  <span>Like</span>
                  <span>Reply</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>{r.reaction}</span>
                  <span className="font-semibold" style={{ color: TEXT_DARK }}>
                    {r.count}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={PRODUCT_LINK}
            className="inline-flex items-center justify-center rounded-full px-8 py-3 font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: BRAND_RED, fontSize: 17 }}
          >
            Check Availability
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Footer (within section_2) -------------------- */
function FooterSection() {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: '#1a0d0e', color: '#f3e6e7', paddingTop: 48, paddingBottom: 24 }}
    >
      <div className="mx-auto max-w-[1100px] px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-semibold mb-3" style={{ color: '#fff' }}>
              Footer menu
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/search" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Manage Subscription
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Log In
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3" style={{ color: '#fff' }}>
              Customer Support
            </h4>
            <p className="text-sm">support@eatnumi.com</p>

            <h4 className="text-sm font-semibold mt-5 mb-3" style={{ color: '#fff' }}>
              Media &amp; Partnerships
            </h4>
            <p className="text-sm">partnerships@eatnumi.com</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3" style={{ color: '#fff' }}>
              Address
            </h4>
            <p className="text-sm leading-relaxed">
              701 Tillery Street,
              <br />
              Texas, United States
            </p>

            <h4 className="text-sm font-semibold mt-5 mb-3" style={{ color: '#fff' }}>
              Follow Us
            </h4>
            <div className="flex gap-3 text-sm">
              <a href="/" className="hover:underline">
                Facebook
              </a>
              <a href="/" className="hover:underline">
                Instagram
              </a>
              <a href="/" className="hover:underline">
                Tiktok
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3" style={{ color: '#fff' }}>
              Sign Up To Receive Special Offers
            </h4>
            <p className="text-sm leading-relaxed mb-3">
              A monthly ritual of nourishment, stories &amp; exclusive offers.
            </p>
            <form
              className="flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email"
                className="flex-1 rounded-full px-4 py-2 text-sm text-black"
              />
              <button
                type="submit"
                className="rounded-full px-4 py-2 text-sm font-semibold text-white"
                style={{ backgroundColor: BRAND_RED }}
              >
                →
              </button>
            </form>

            <h4 className="text-sm font-semibold mt-5 mb-2" style={{ color: '#fff' }}>
              Payment methods
            </h4>
            <div
              className="flex flex-wrap gap-2 text-[11px]"
              style={{ color: '#cbb' }}
            >
              <span>PayPal</span>
              <span>Visa</span>
              <span>Mastercard</span>
              <span>Amex</span>
              <span>Apple Pay</span>
              <span>iDEAL</span>
              <span>Wero</span>
              <span>Bancontact</span>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 text-center text-xs"
          style={{ borderTop: '1px solid #3a1f22', color: '#cbb' }}
        >
          © 2026 Brand Name. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

/* -------------------- Default export -------------------- */
export default function Section2() {
  return (
    <div className="w-full" style={{ backgroundColor: BRAND_CREAM }}>
      <HeroSection />
      <Reason1Section />
      <Reason2Section />
      <Reason3Section />
      <Reason4Section />
      <Reason5Section />
      <ReviewsWallSection />
      <FooterSection />
    </div>
  );
}
