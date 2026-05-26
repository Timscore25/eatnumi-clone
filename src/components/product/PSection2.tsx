'use client';

// TODO: replace placeholder doctor name "Dr. Lena Park, MD" with real doctor name + credentials before launch
import { useState } from 'react';
import { openReserve, type ReserveVariant } from '@/lib/reserve';

const BRAND_RED = '#a6171f';
const BRAND_CREAM = '#fff9f5';
const BRAND_PINK = '#feedee';
const BRAND_DARK = '#1d1c1c';

const IMG = {
  hero1: '//eatnumi.com/cdn/shop/files/p1-8.png?v=1775174196&width=1600',
  hero2: '//eatnumi.com/cdn/shop/files/NumiPDP_10.png?v=1775174196&width=1600',
  hero3: '//eatnumi.com/cdn/shop/files/p6-6-2.png?v=1775174196&width=1600',
  hero4: '//eatnumi.com/cdn/shop/files/p6-6.png?v=1775174196&width=1600',
  hero5: '//eatnumi.com/cdn/shop/files/p6-1.png?v=1775174196&width=1600',
  hero6: '//eatnumi.com/cdn/shop/files/p6-10.png?v=1775174196&width=1600',
  hero7: '//eatnumi.com/cdn/shop/files/p6-2-2.png?v=1775174196&width=1600',
  hero8: '//eatnumi.com/cdn/shop/files/p3.png?v=1775174196&width=1600',
  hero9: '//eatnumi.com/cdn/shop/files/p6-3-2.png?v=1775174196&width=1600',
  hero10: '//eatnumi.com/cdn/shop/files/p6-7.png?v=1776772710&width=1600',
  hero11: '//eatnumi.com/cdn/shop/files/p6-5.png?v=1776772710&width=1600',
  doctor:
    '//eatnumi.com/cdn/shop/files/C19B5E72-A76A-4558-B1A5-2C80944D7CA8.jpg?v=1776772656&width=800',
};

const GALLERY = [
  IMG.hero1,
  IMG.hero2,
  IMG.hero3,
  IMG.hero4,
  IMG.hero5,
  IMG.hero6,
  IMG.hero7,
  IMG.hero8,
  IMG.hero9,
  IMG.hero10,
  IMG.hero11,
];

type Variant = {
  id: string;
  title: string;
  badge?: string;
  sticks: string;
  price: string;
  oldPrice: string;
  save: string;
  perk?: string;
};

const VARIANTS: Variant[] = [
  {
    id: 'v1',
    title: 'Buy 1 Get 1 FREE',
    sticks: '10 Cutting Sticks',
    price: '$59',
    oldPrice: '$126',
    save: 'You Save $67',
  },
  {
    id: 'v2',
    title: 'Buy 2 Get 3 FREE',
    badge: 'BEST RESULTS',
    sticks: '25 Cutting Sticks',
    price: '$100',
    oldPrice: '$315',
    save: 'You Save $215',
    perk: '+ FREE Express Shipping',
  },
  {
    id: 'v3',
    title: 'Buy 3 Get 5 FREE',
    sticks: '40 Cutting Sticks',
    price: '$151',
    oldPrice: '$504',
    save: 'You Save $353',
    perk: '+ FREE Bonus Gummies',
  },
];

const STATS = [
  { pct: '79%', label: 'saw stubborn belly fat shift*' },
  { pct: '92%', label: 'felt less bloated within 5 days*' },
  { pct: '90%', label: 'felt full until their next meal*' },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How does Yuko work?',
    a: "Yuko combines Garcinia Cambogia, chia seeds, marine collagen, and hyaluronic acid into a pomegranate-flavored jelly stick. The Garcinia supports serotonin (your 'I'm satisfied' signal), the chia expands in your stomach for real fullness, and the collagen + HA keep your skin glowing while your body shifts.",
  },
  {
    q: 'What Does It Taste Like?',
    a: 'Pomegranate. Sweet, slightly tart, genuinely delicious. No chalky pills, no fishy aftertaste, no choking anything down. Most customers say it tastes like a treat.',
  },
  {
    q: 'When Will I Start Seeing Results?',
    a: 'Most women feel less bloated and notice quieter cravings within the first week. Visible changes in how clothes fit typically appear by week 4-6. Stick with it for the full 90 days for the deepest results.',
  },
  {
    q: 'How Do I Take It?',
    a: 'One pomegranate jelly stick a day — tear, squeeze, eat. No water needed. We recommend after lunch so you feel full through the afternoon. For intensive support, take two sticks (morning + evening).',
  },
  {
    q: 'Shipping & Returns',
    a: "We ship within 24 hours via expedited shipping. Most orders arrive in 4-6 business days. Not feeling it after 90 days? Return your boxes and we'll refund every penny — no questions asked.",
  },
];

const INGREDIENTS = [
  {
    name: 'Garcinia Cambogia',
    blurb:
      "Contains HCA which supports healthy serotonin signaling — the 'I'm satisfied' chemical. Cravings finally quiet down.",
  },
  {
    name: 'Chia Seeds',
    blurb:
      'Expand in your stomach for real, lasting fullness. Packed with fiber for digestive comfort.',
  },
  {
    name: 'Marine Collagen',
    blurb:
      'Repairs your gut lining (where appetite hormones live) and keeps your skin tight and plump as your body shifts.',
  },
  {
    name: 'Hyaluronic Acid',
    blurb:
      'Locks moisture into your skin from the inside so you look glowing — not depleted.',
  },
];

function Stars({ rating = 4.7 }: { rating?: number }) {
  const full = Math.floor(rating);
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${rating}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill={i < full ? '#FFD700' : '#E6E6E6'}
        >
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.2 1.3 6L10 14.9 4.6 17.9l1.3-6L1.3 7.7l6.1-.6L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function PSection2() {
  const [activeImg, setActiveImg] = useState(0);
  const [variant, setVariant] = useState('v2');
  const [subscribe, setSubscribe] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section
      className="w-full"
      style={{ backgroundColor: BRAND_CREAM, color: BRAND_DARK }}
      id="buy-box"
    >
      {/* ============ MAIN PRODUCT ROW ============ */}
      <div className="mx-auto max-w-[1400px] px-4 py-8 md:px-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Gallery */}
          <div>
            <div
              className="overflow-hidden rounded-2xl border border-black/5"
              style={{ backgroundColor: BRAND_PINK }}
            >
              <img
                src={GALLERY[activeImg]}
                alt="Product image"
                loading="lazy"
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="mt-3 grid grid-cols-6 gap-2 sm:grid-cols-8 md:grid-cols-11">
              {GALLERY.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={`overflow-hidden rounded-md border ${
                    i === activeImg
                      ? 'border-black'
                      : 'border-transparent hover:border-black/30'
                  }`}
                  aria-label={`Show image ${i + 1}`}
                  style={{ backgroundColor: BRAND_PINK }}
                >
                  <img
                    src={src.replace('width=1600', 'width=200')}
                    alt={`Thumbnail ${i + 1}`}
                    loading="lazy"
                    className="aspect-square w-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Buy box */}
          <div className="flex flex-col">
            <button
              type="button"
              className="mb-3 self-start rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-black"
            >
              View Ingredients
            </button>

            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              Yuko Korean Cutting Jelly Sticks
            </h1>

            <div className="mt-2 flex items-center gap-2">
              <Stars rating={4.7} />
              <span className="text-sm font-semibold">4.7</span>
              <span className="text-sm text-black/60">(11,317 Reviews)</span>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 font-medium">
                Fast Shipping
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 font-medium">
                GMP Certified
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 font-medium">
                Stimulant Free
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-black/70 md:text-base">
              Experience quieter cravings, a flatter belly &amp; a real cut
              within weeks — thanks to our breakthrough Korean cutting formula
              in a delicious pomegranate jelly stick. No prescription. No
              nausea. No injections.
            </p>

            {/* Stats */}
            <div className="mt-5 grid grid-cols-3 gap-2">
              {STATS.map((s) => (
                <div
                  key={s.pct}
                  className="rounded-xl bg-white p-3 text-center shadow-sm"
                >
                  <div
                    className="text-xl font-bold md:text-2xl"
                    style={{ color: BRAND_RED }}
                  >
                    {s.pct}
                  </div>
                  <div className="mt-1 text-[11px] leading-snug text-black/70 md:text-xs">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-1 text-[10px] text-black/50">
              *Individual results vary
            </p>

            {/* Low stock warning */}
            <div
              className="mt-5 rounded-xl border-l-4 p-3 text-sm"
              style={{
                borderColor: BRAND_RED,
                backgroundColor: BRAND_PINK,
                color: BRAND_DARK,
              }}
            >
              <span className="font-bold" style={{ color: BRAND_RED }}>
                WARNING
              </span>
              : Once this batch sells out, our next restock is 4-6 weeks away.
              We&apos;re capping orders to keep up with demand.
            </div>

            {/* Sale heading */}
            <div
              className="mt-5 rounded-t-xl py-2 text-center text-xs font-bold uppercase tracking-wider md:text-sm"
              style={{ backgroundColor: BRAND_RED, color: BRAND_CREAM }}
            >
              BUY 2 GET 3 FREE — ENDS TONIGHT
            </div>

            {/* Variants */}
            <div
              className="rounded-b-xl border border-t-0 p-3"
              style={{ borderColor: BRAND_RED }}
            >
              <ul className="flex flex-col gap-3">
                {VARIANTS.map((v) => {
                  const selected = variant === v.id;
                  return (
                    <li key={v.id}>
                      <label
                        className={`relative flex cursor-pointer items-center gap-3 rounded-xl border-2 bg-white p-3 transition ${
                          selected
                            ? ''
                            : 'border-black/10 hover:border-black/30'
                        }`}
                        style={
                          selected
                            ? { borderColor: BRAND_RED }
                            : undefined
                        }
                      >
                        {v.badge && (
                          <span
                            className="absolute -top-2 right-3 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                            style={{
                              backgroundColor: BRAND_RED,
                              color: BRAND_CREAM,
                            }}
                          >
                            {v.badge}
                          </span>
                        )}
                        <input
                          type="radio"
                          name="variant"
                          value={v.id}
                          checked={selected}
                          onChange={() => setVariant(v.id)}
                          className="h-4 w-4 accent-current"
                          style={{ accentColor: BRAND_RED }}
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold">{v.title}</span>
                            <span className="font-bold">{v.price}</span>
                          </div>
                          <div className="mt-0.5 flex items-center justify-between text-xs text-black/60">
                            <span>{v.sticks}</span>
                            <span className="line-through">{v.oldPrice}</span>
                          </div>
                          <div className="mt-1 flex items-center justify-between">
                            <span
                              className="text-xs font-semibold"
                              style={{ color: BRAND_RED }}
                            >
                              {v.save}
                            </span>
                          </div>
                          {v.perk && (
                            <div
                              className="mt-1 inline-block rounded-md px-2 py-0.5 text-[11px] font-semibold"
                              style={{
                                backgroundColor: BRAND_PINK,
                                color: BRAND_RED,
                              }}
                            >
                              {v.perk}
                            </div>
                          )}
                        </div>
                      </label>
                    </li>
                  );
                })}
              </ul>

              {/* Subscribe toggle */}
              <label className="mt-4 flex cursor-pointer items-center justify-between rounded-xl border border-black/10 bg-white p-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold">
                      Subscribe &amp; Save 20%
                    </span>
                    <span
                      className="rounded px-1.5 py-0.5 text-[10px] font-bold"
                      style={{
                        backgroundColor: BRAND_PINK,
                        color: BRAND_RED,
                      }}
                    >
                      $42
                    </span>
                  </div>
                  <div className="mt-0.5 text-[11px] text-black/60">
                    Free shipping · Monthly · Cancel anytime
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={subscribe}
                  onChange={(e) => setSubscribe(e.target.checked)}
                  className="h-5 w-5"
                  style={{ accentColor: BRAND_RED }}
                />
              </label>

              {/* Reserve (was Add to cart) */}
              <button
                type="button"
                onClick={() => openReserve(variant as Exclude<ReserveVariant, null>)}
                className="mt-4 block w-full rounded-xl py-3 text-center text-base font-bold uppercase tracking-wider text-white shadow-md transition hover:opacity-90"
                style={{ backgroundColor: BRAND_RED }}
              >
                Reserve Yours
              </button>

              {/* Trust badges */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px]">
                <div className="rounded-lg bg-white p-2">
                  <div className="font-bold">Quick &amp; Easy</div>
                  <div className="text-black/60">Returns</div>
                </div>
                <div className="rounded-lg bg-white p-2">
                  <div className="font-bold">90 Day</div>
                  <div className="text-black/60">Guarantee</div>
                </div>
                <div className="rounded-lg bg-white p-2">
                  <div className="font-bold">Fast Worldwide</div>
                  <div className="text-black/60">Shipping</div>
                </div>
              </div>
            </div>

            {/* FAQ accordion */}
            <div className="mt-6 flex flex-col gap-2">
              {FAQS.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div
                    key={f.q}
                    className="overflow-hidden rounded-xl border border-black/10 bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-center justify-between px-4 py-3 text-left"
                    >
                      <span className="text-sm font-bold">
                        Q: {f.q}
                      </span>
                      <span
                        className="text-xl leading-none"
                        style={{ color: BRAND_RED }}
                      >
                        {open ? '−' : '+'}
                      </span>
                    </button>
                    {open && (
                      <div className="px-4 pb-4 text-sm text-black/70">
                        <span className="font-bold">A:</span> {f.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ============ DOCTOR ENDORSEMENT ============ */}
      <div
        className="w-full border-y border-black/5"
        style={{ backgroundColor: BRAND_PINK }}
      >
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 px-4 py-10 md:grid-cols-[200px_1fr] md:px-8 md:py-12">
          <img
            src={IMG.doctor}
            alt="Customer photo"
            loading="lazy"
            className="h-32 w-32 rounded-full object-cover md:h-48 md:w-48"
          />
          <div>
            <div
              className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
              style={{ backgroundColor: BRAND_RED }}
            >
              Dermatologist Approved
            </div>
            <p className="mt-3 text-lg font-medium italic leading-snug md:text-xl">
              &ldquo;One of the best-formulated natural appetite-support
              products I&apos;ve seen. Yuko&apos;s Korean formula combines
              proven ingredients with skin-protective collagen — exactly what I
              look for when supporting clients through a body recomposition
              journey.&rdquo;
            </p>
            {/* TODO: real doctor name + credentials before launch */}
            <div className="mt-3 text-sm font-bold">Dr. Lena Park, MD</div>
            <a
              href="#"
              className="mt-2 inline-block text-sm font-semibold underline"
              style={{ color: BRAND_RED }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* ============ INGREDIENT GRID ============ */}
      <div className="mx-auto max-w-[1200px] px-4 py-12 md:px-8 md:py-16">
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          Key ingredients scientifically dosed
        </h2>
        <p className="mt-1 text-center text-sm text-black/60">
          to work together
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INGREDIENTS.map((ing, i) => (
            <div
              key={ing.name}
              className="flex flex-col items-center rounded-2xl bg-white p-5 text-center shadow-sm"
            >
              <div
                className="mb-3 flex h-20 w-20 items-center justify-center rounded-full"
                style={{ backgroundColor: BRAND_PINK }}
              >
                <img
                  src={GALLERY[(i + 4) % GALLERY.length].replace(
                    'width=1600',
                    'width=200',
                  )}
                  alt="Ingredient image"
                  loading="lazy"
                  className="h-12 w-12 object-contain"
                />
              </div>
              <div className="font-bold">{ing.name}</div>
              <p className="mt-2 text-xs leading-relaxed text-black/60">
                {ing.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ============ SOCIAL PROOF BANNER ============ */}
      <div
        className="w-full"
        style={{ backgroundColor: BRAND_RED, color: BRAND_CREAM }}
      >
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-3 px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider md:text-sm">
          <span>◈ Korean-Formulated</span>
          <span>◈ Stimulant Free</span>
          <span>◈ 90-Day Guarantee ◈</span>
        </div>
      </div>

      {/* ============ MODERN WELLNESS CRISIS / TRANSFORMATION ============ */}
      <div className="mx-auto max-w-[1200px] px-4 py-14 md:px-8 md:py-20">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/60">
            It&apos;s not an accident that
          </p>
          <h2
            className="mt-2 text-3xl font-extrabold md:text-5xl"
            style={{ color: BRAND_RED }}
          >
            53,000+ WOMEN
          </h2>
          <p className="mt-1 text-base font-bold uppercase tracking-wider md:text-lg">
            Found their balance with Yuko
          </p>
          <p
            className="text-2xl font-extrabold uppercase tracking-wider md:text-3xl"
            style={{ color: BRAND_RED }}
          >
            Korean Wellness Jelly Sticks
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{ backgroundColor: BRAND_PINK }}
          >
            <h3 className="text-xl font-bold md:text-2xl">
              The Modern Wellness Crisis
            </h3>
            <p className="mt-3 text-sm text-black/70 md:text-base">
              You&apos;ve been told the only way to lose weight is to inject
              yourself, starve yourself, or pay $1,000+/month for
              prescriptions. Most options leave you depleted, jittery, or
              hollow-faced.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                'Stimulants wreck sleep and cause jitters',
                'Injections cost $14,000/year and hollow your face',
                'Crash diets destroy your metabolism',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span style={{ color: BRAND_RED }}>✗</span>
                  <span className="text-black/70">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-2xl p-6 text-white md:p-8"
            style={{ backgroundColor: BRAND_RED }}
          >
            <h3 className="text-xl font-bold md:text-2xl">
              Yuko flips the script
            </h3>
            <p className="mt-3 text-sm opacity-90 md:text-base">
              Yuko works with your body, not against it. Korean-formulated,
              made with 4 powerful ingredients that quiet cravings, support
              fullness, and protect your skin — all in a tasty jelly stick
              that costs less than your morning coffee.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                'Quiet cravings, naturally',
                'Real fullness from chia, not stimulants',
                'Protects skin with collagen + HA',
                'Under $2/day. No prescription.',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span>✓</span>
                  <span className="opacity-90">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Big CTA */}
        <div className="mt-10 flex flex-col items-center">
          <button
            type="button"
            onClick={() => openReserve(variant as Exclude<ReserveVariant, null>)}
            className="rounded-full px-8 py-4 text-base font-extrabold uppercase tracking-wider text-white shadow-lg transition hover:opacity-90 md:text-lg"
            style={{ backgroundColor: BRAND_RED }}
          >
            Reserve Yours
          </button>
          <p className="mt-3 text-xs text-black/60">
            90-day Money Back Guarantee
          </p>
        </div>

        {/* Transformation banner */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          <div className="text-center md:text-right">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/60">
              From
            </p>
            <p className="mt-1 text-2xl font-extrabold italic md:text-4xl">
              &lsquo;Nothing&apos;s Working&rsquo;
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/60">
              To
            </p>
            <p
              className="mt-1 text-2xl font-extrabold italic md:text-4xl"
              style={{ color: BRAND_RED }}
            >
              &lsquo;I Finally Feel Like Myself!&rsquo;
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-sm font-semibold">
          Just 1 jelly stick a day!
        </p>

        <div className="mt-6 flex justify-center">
          <a
            href="#"
            className="text-sm font-semibold underline"
            style={{ color: BRAND_RED }}
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
