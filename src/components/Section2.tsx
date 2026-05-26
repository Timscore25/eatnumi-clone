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
          5 Reasons Why Women Are Ditching Injections, Supplements & Restrictive Diets For This{' '}
          <span style={{ color: BRAND_RED }}>$2 Korean Jelly Stick</span>
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
              By&nbsp;Sarah&nbsp;Mitchell
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
          Your frustration isn&apos;t permanent. Just because everything&apos;s
          failed doesn&apos;t mean you&apos;re stuck with bloating, cravings,
          and feeling uncomfortable in your clothes forever. Discover how this
          Korean jelly stick is helping women finally feel satisfied and in
          control — WITHOUT needles, nausea, or $1,000/month price tags.
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
            Start My Cut →
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
      label: 'Day 1',
      title: 'Cravings start to quiet down.',
      desc: 'You feel satisfied longer.',
    },
    {
      day: '7',
      label: 'Week 1',
      title: 'Bloating starts to ease.',
      desc: 'You feel lighter.',
    },
    {
      day: '30',
      label: 'Month 1',
      title: 'Clothes start fitting more comfortably.',
      desc: 'You feel more like yourself.',
    },
    {
      day: '90',
      label: 'Month 3',
      title: 'You look in the mirror and feel confident again.',
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
          1. It Quiets Cravings & Keeps You Full —{' '}
          <span style={{ color: BRAND_RED }}>
            Without Needles, Nausea, Or $14,000/Year Price Tags
          </span>
        </h2>

        <p className="mt-4 text-[15px] md:text-base leading-relaxed" style={{ color: TEXT_DARK }}>
          The active ingredient in Yuko —{' '}
          <span className="font-semibold">Garcinia Cambogia</span> — naturally
          supports serotonin, the brain chemical that tells you &lsquo;enough.&rsquo;
          So the constant food noise finally quiets down. You eat a
          pomegranate-flavored jelly stick. That&apos;s it.
        </p>

        <div
          className="mt-5 rounded-md p-4 md:p-5 text-[15px] md:text-base leading-relaxed"
          style={{ backgroundColor: SOFT_PINK, color: TEXT_DARK }}
        >
          No prescription. <strong>No waitlist.</strong> No pharmacy backorder.
          No nausea. No jitters. No crash. Just a jelly stick that quietly
          changes how you feel around food.
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
          <span className="font-semibold">Ozempic: $1,200/month.</span> Yuko:
          less than $1/day. Same satisfied feeling — without the needles.
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
      name: 'Garcinia Cambogia',
      meta: '(appetite support)',
      copy: 'Supports healthy serotonin levels to naturally quiet appetite and reduce cravings. When serotonin is balanced, your brain finally gets the ‘enough’ signal.',
    },
    {
      icon: '🌾',
      name: 'Chia Seeds',
      meta: '',
      copy: 'Expand in your stomach to create real, lasting fullness. Plus they’re packed with fiber to support digestive comfort.',
    },
    {
      icon: '🐟',
      name: 'Marine Collagen',
      meta: '',
      copy: 'Supports skin firmness and elasticity from the inside out. Your skin stays supple and healthy-looking.',
    },
    {
      icon: '💧',
      name: 'Hyaluronic Acid',
      meta: '',
      copy: 'Locks moisture into your skin from the inside so you glow — not look depleted.',
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
          2. It Targets The{' '}
          <span style={{ color: BRAND_RED }}>ROOT CAUSE</span> Of Cravings &
          Bloating — Not Just The Symptoms
        </h2>

        <p
          className="mt-4 text-[15px] md:text-base leading-relaxed"
          style={{ color: TEXT_DARK }}
        >
          Most supplements mask hunger temporarily. Yuko works at a deeper
          level. This isn&apos;t a random cocktail of trendy ingredients —
          it&apos;s a Korean-formulated 4-in-1 system designed for women who
          want to feel satisfied, energized, and confident in their skin:
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
          Four science-backed ingredients working in sync — so you feel{' '}
          <span className="font-semibold">
            satisfied, lighter, and more like yourself
          </span>{' '}
          every single day. No needles. No pills. No deprivation. Just one
          pomegranate jelly stick that does the heavy lifting for you.
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
    'Korean-formulated for maximum efficacy',
    'Made in a GMP-certified facility for quality you can trust',
    '4 key ingredients instead of just 1 or 2',
    'Added collagen + HA to support healthy, glowing skin',
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
          3. It&apos;s A Jelly —{' '}
          <span style={{ color: BRAND_RED }}>
            Not Another Pill You&apos;ll Forget To Take
          </span>
        </h2>

        <p
          className="mt-4 text-[15px] md:text-base leading-relaxed"
          style={{ color: TEXT_DARK }}
        >
          Pills are easy to skip. Hard to swallow. Most don&apos;t even absorb
          properly. Yuko is different. It&apos;s a pomegranate-flavored jelly
          stick with chia seeds. Tastes like a treat. Absorbs faster than
          capsules. No water needed — just tear, squeeze, and eat.
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
          <span className="font-semibold">Take it after lunch.</span> Feel full
          until dinner. No water, no scheduling, no &lsquo;wait, did I take it
          today?&rsquo; — <em>just tear, squeeze, and eat</em>. This is the
          format Korean women have been using for years. Now it&apos;s finally
          available in the US.
        </p>

        <p
          className="mt-4 text-[15px] md:text-base leading-relaxed"
          style={{ color: TEXT_DARK }}
        >
          Here&apos;s what makes{' '}
          <a
            href={PRODUCT_LINK}
            className="font-semibold underline"
            style={{ color: BRAND_RED }}
          >
            Yuko different
          </a>{' '}
          from every other &lsquo;weight loss&rsquo; product on the shelf:
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
    { pct: '92%', txt: 'felt lighter and less bloated*' },
    { pct: '90%', txt: 'felt satisfied until their next meal*' },
    { pct: '87%', txt: 'said cravings ‘went quiet’*' },
    { pct: '84%', txt: 'said they felt more in control around food*' },
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
          4. Real Women Are Seeing{' '}
          <span style={{ color: BRAND_RED }}>Real Results — Fast</span>
        </h2>

        <p
          className="mt-4 text-[15px] md:text-base leading-relaxed"
          style={{ color: TEXT_DARK }}
        >
          These aren&apos;t paid influencers. These are women who were
          skeptical, frustrated, and exhausted from trying everything else.
          After 30 days on Yuko:
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
          *Based on internal customer survey, n=1,247. Individual results vary.
        </p>

        <p
          className="mt-6 text-[15px] md:text-base leading-relaxed"
          style={{ color: TEXT_DARK }}
        >
          And it&apos;s not just numbers on a survey. Here&apos;s what real
          customers are saying — in their own words.
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
              Michelle R.
            </div>
            <p
              className="mt-1 text-[15px] leading-relaxed"
              style={{ color: TEXT_DARK }}
            >
              &ldquo;I used to feel so bloated by dinner every night. After 2
              weeks of Yuko, I finally feel comfortable all day. My husband
              keeps asking what I&apos;m doing differently!&rdquo;
            </p>
          </div>
          <div
            className="rounded-md p-4 md:p-5"
            style={{ backgroundColor: SOFT_PINK }}
          >
            <div className="font-semibold" style={{ color: BRAND_RED }}>
              Rachel B.
            </div>
            <p
              className="mt-1 text-[15px] leading-relaxed"
              style={{ color: TEXT_DARK }}
            >
              &ldquo;I&apos;m 52 and thought feeling this good was behind me.
              Yuko proved me wrong. My clothes fit better than they have in
              years.&rdquo;
            </p>
          </div>
        </div>

        <p
          className="mt-6 text-[15px] md:text-base leading-relaxed italic"
          style={{ color: TEXT_DARK }}
        >
          &ldquo;Finally something that actually works. I&apos;m not starving
          myself and I finally feel satisfied after meals.&rdquo; — Emily S.,
          verified Yuko customer.
        </p>

        <p className="mt-2 text-xs italic" style={{ color: MUTED }}>
          *Individual results vary. Customer testimonials reflect personal
          experience and are not a guarantee.
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
            90-Day Money Back Guarantee
          </span>
        </h2>

        <p
          className="mt-4 text-[15px] md:text-base leading-relaxed"
          style={{ color: TEXT_DARK }}
        >
          Buying new supplements is risky. You never truly know if it&apos;s
          going to work. So we&apos;re removing every reason not to try Yuko —
          and we&apos;re taking ALL the risk for you.
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
            Try Yuko for 3 full months.{' '}
            <span className="font-semibold">If you don&apos;t feel lighter, less bloated, and more in control of your cravings —</span>{' '}
            send it back for a full refund. No questions asked.
          </p>
        </div>

        <p
          className="mt-5 text-[15px] md:text-base leading-relaxed"
          style={{ color: TEXT_DARK }}
        >
          That&apos;s 90 days to eat your jelly stick after lunch, watch the
          cravings quiet down, watch the bloating ease, watch your clothes fit
          better — risk-free. If you&apos;re not amazed, you don&apos;t pay a
          cent.
        </p>

        <p
          className="mt-4 text-[15px] md:text-base leading-relaxed font-semibold"
          style={{ color: TEXT_DARK }}
        >
          We&apos;re so confident Yuko will work for you that we&apos;re taking
          ALL the risk.
        </p>

        <p
          className="mt-4 text-[15px] md:text-base leading-relaxed"
          style={{ color: TEXT_DARK }}
        >
          Stock is limited — supplies are sourced from our Korean partner lab,
          and demand has exploded since launch.
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
              Yuko Korean Cutting Jelly Sticks
            </p>
            <h3
              className="mt-2 font-bold leading-tight"
              style={{ color: BRAND_RED, fontSize: 'clamp(22px, 2.6vw, 32px)' }}
            >
              BUY 2 GET 4 FREE + FREE SHIPPING
            </h3>

            <p
              className="mt-3 text-[15px] md:text-base leading-relaxed"
              style={{ color: TEXT_DARK }}
            >
              Korean-formulated. Made in the USA. Yours risk-free for 90 days.
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
                      <span className="font-semibold">FREE</span> Extra Jelly
                      Sticks
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: BRAND_RED }}>✓</span>
                    <span>
                      <span className="font-semibold">FREE</span> Shipping
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span style={{ color: BRAND_RED }}>✓</span>
                    <span>90-Day Money Back Guarantee</span>
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
            79% of women report feeling lighter within the first 30 days.*
          </span>{' '}
          You can either keep doing what you&apos;ve been doing — or finally
          try the format that&apos;s changing the conversation around weight,
          bloating, and cravings.
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
          Sell-Out Risk: HIGH — Limited units available
        </p>
        <p
          className="mt-2 text-center text-[11px] italic"
          style={{ color: MUTED }}
        >
          *Individual results vary. Yuko is a dietary supplement, not a
          prescription medication.
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

const reviews: Review[] = [
  {
    name: 'Michelle R.',
    img: IMG.reviewer1,
    time: '1w',
    reaction: '❤️',
    count: 89,
    text: 'I used to feel so bloated by dinner every night. After 2 weeks of Yuko, I finally feel comfortable all day. My husband keeps asking what I’m doing differently!',
  },
  {
    name: 'Amanda T.',
    img: IMG.reviewer2,
    time: '3d',
    reaction: '👍❤️',
    count: 121,
    text: 'After having my second baby, I felt so unlike myself. Yuko changed everything. I finally feel comfortable in my body again and my energy is through the roof!',
  },
  {
    name: 'Jennifer K.',
    img: IMG.reviewer3,
    time: '5d',
    reaction: '❤️',
    count: 67,
    text: 'I was skeptical because most supplements taste terrible. But Yuko actually tastes like a treat! The pomegranate flavor is delicious.',
  },
  {
    name: 'Rachel B.',
    img: IMG.reviewer4,
    time: '1w',
    reaction: '👍❤️',
    count: 203,
    text: 'I’m 52 and thought feeling this good was behind me. Yuko proved me wrong. My clothes fit better than they have in years.',
  },
  {
    name: 'Emily S.',
    img: IMG.reviewer5,
    time: '4d',
    reaction: '❤️🔥',
    count: 156,
    text: 'Finally something that actually works! I’ve tried keto, intermittent fasting, everything. With Yuko I’m not starving myself and I finally feel satisfied after meals.',
  },
  {
    name: 'Lisa W.',
    img: IMG.reviewer6,
    time: '6d',
    reaction: '👍',
    count: 78,
    text: 'I feel so much better overall. More energy, less bloating, and I finally feel like myself again.',
  },
  {
    name: 'Patricia H.',
    img: IMG.reviewer7,
    time: '2w',
    reaction: '❤️👍',
    count: 234,
    text: 'My sugar cravings are GONE. I used to need chocolate every night. Now I don’t even think about it. I never thought I’d be the woman who could pass on dessert without a second thought.',
  },
  {
    name: 'Karen D.',
    img: IMG.reviewer8,
    time: '5d',
    reaction: '😮❤️',
    count: 92,
    text: 'The bloating relief alone is worth it! I no longer have to unbutton my pants after lunch.',
  },
  {
    name: 'Donna L.',
    img: IMG.reviewer9,
    time: '1w',
    reaction: '❤️',
    count: 187,
    text: 'I’m a nurse and work 12 hour shifts. I used to snack constantly. With Yuko I’m satisfied until my meal breaks.',
  },
  {
    name: 'Christina M.',
    img: IMG.reviewer10,
    time: '3d',
    reaction: '👍❤️',
    count: 143,
    text: 'Ordered for me and my mom. We’re both obsessed! We both feel so much better and it’s become our shared little ritual every day.',
  },
  {
    name: 'Nancy P.',
    img: IMG.reviewer1,
    time: '1w',
    reaction: '👍',
    count: 56,
    text: 'Was worried about side effects but there are NONE. No jitters, no stomach issues. Just feeling lighter every week!',
  },
  {
    name: 'Stephanie G.',
    img: IMG.reviewer2,
    time: '2d',
    reaction: '🔥❤️',
    count: 312,
    text: 'Just ordered my 3rd box! This is the only thing that’s ever helped me feel satisfied with normal portions. I don’t white-knuckle my way through meals anymore — I just eat, feel full, and move on with my life.',
  },
  {
    name: 'Victoria A.',
    img: IMG.reviewer3,
    time: '4d',
    reaction: '😮👍',
    count: 98,
    text: 'I was spending $400/month on programs that didn’t work. Yuko costs a fraction of that and I finally feel in control.',
  },
  {
    name: 'Angela F.',
    img: IMG.reviewer4,
    time: '1w',
    reaction: '❤️🎉',
    count: 276,
    text: 'My wedding is in 3 months and I was so stressed. 6 weeks on Yuko and I feel confident and comfortable in my dress fittings.',
  },
  {
    name: 'Teresa J.',
    img: IMG.reviewer5,
    time: '5d',
    reaction: '❤️💪',
    count: 189,
    text: '60 years old and finally feeling like myself again! Yuko changed that. I feel amazing and the collagen has done wonders for my skin.',
  },
  {
    name: 'Monica C.',
    img: IMG.reviewer6,
    time: '3d',
    reaction: '👍',
    count: 71,
    text: 'I keep Yuko in my purse so I never miss it. The convenience is everything — no water, no pills, no fuss.',
  },
  {
    name: 'Brenda Y.',
    img: IMG.reviewer7,
    time: '1d',
    reaction: '❤️👍🔥',
    count: 401,
    text: 'Best purchase I’ve made all year! My whole family keeps asking what I’m doing differently. The bloat is gone, my cravings are gone, and I feel like the version of me I’d almost forgotten about.',
  },
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
          Trusted By <span style={{ color: BRAND_RED }}>Thousands Of Women</span>
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

        <p
          className="mt-6 text-center text-xs italic"
          style={{ color: MUTED }}
        >
          * Individual results vary. Names may be changed for customer privacy.
        </p>

        <div className="mt-8 flex justify-center">
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
              Yuko
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: '#e8d3d5' }}>
              Yuko — Korean-formulated wellness for women who want to feel
              satisfied, energized, and confident.
            </p>
            <ul className="space-y-2 text-sm mt-4">
              <li>
                <a href="/product" className="hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Subscribe
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Reviews
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3" style={{ color: '#fff' }}>
              Customer Support
            </h4>
            {/* TODO: replace placeholder support email with real Yuko inbox before launch */}
            <p className="text-sm">hello@yuko.com</p>

            <h4 className="text-sm font-semibold mt-5 mb-3" style={{ color: '#fff' }}>
              Media &amp; Partnerships
            </h4>
            {/* TODO: replace placeholder partnerships email with real address */}
            <p className="text-sm">press@yuko.com</p>

            <h4 className="text-sm font-semibold mt-5 mb-3" style={{ color: '#fff' }}>
              Help
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:underline">
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
              Get 10% off your first order
            </h4>
            <p className="text-sm leading-relaxed mb-3">
              Drop your email for a welcome discount, restock alerts, and
              women-only wellness tips.
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
          © 2026 Yuko. All Rights Reserved.
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
