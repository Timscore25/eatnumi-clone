'use client';

import { useState } from 'react';
import { openReserve } from '@/lib/reserve';

const BRAND_RED = '#a31621';
const BRAND_CREAM = '#fff9f5';
const BRAND_PINK = '#ffeaea';

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: 'How does Yuko actually work?',
    a: "Yuko's 4-in-1 Korean formula targets cravings (Garcinia), fullness (chia), gut health (collagen), and skin (HA) in one pomegranate jelly stick. Most women feel less bloated within a week and notice clothes fit differently by week 4.",
  },
  {
    q: 'Is it safe to take with other medications?',
    a: "Yuko is a food supplement made with natural ingredients. We always recommend checking with your doctor if you're on any prescription medication — especially blood-thinners, antidepressants, or diabetes medication.",
  },
  {
    q: "What if I'm on Ozempic or another GLP-1?",
    a: "Many of our customers use Yuko to transition off GLP-1s gradually with their doctor's guidance. It's not a replacement for medical care — but the natural appetite support helps ease the transition.",
  },
  {
    q: 'When will I see results?',
    a: 'Bloating relief usually within 5-7 days. Cravings quieter by week 2. Clothes fitting differently by week 4-6. Deepest results typically appear at month 3.',
  },
  {
    q: 'Does it really taste good?',
    a: 'Yes. Pomegranate flavor, slightly tart, genuinely sweet. Most customers say it tastes like a treat — not a supplement.',
  },
  {
    q: 'Are there any side effects?',
    a: "Yuko is stimulant-free, gluten-free, and made with natural ingredients. The most common feedback is 'I felt nothing — except not hungry between meals.' If you experience anything unusual, stop use and consult your doctor.",
  },
  {
    q: 'How many sticks per day?',
    a: 'One stick daily for standard support. Two sticks (morning + evening) for intensive support during the first 30 days. Most women find one stick after lunch is the sweet spot.',
  },
  {
    q: 'Will I gain weight back if I stop?',
    a: "Yuko isn't a crash solution — it's a daily habit. Many customers continue indefinitely. If you do stop, the appetite-resetting effect can last weeks, especially after 3+ months of use.",
  },
  {
    q: 'Is this safe during pregnancy or breastfeeding?',
    a: 'No. Yuko is not recommended for pregnant or breastfeeding women. Please consult your doctor.',
  },
  {
    q: 'Where is Yuko made?',
    a: 'Yuko is Korean-formulated and manufactured in a GMP-certified facility. Every batch is third-party lab tested for purity.',
  },
  {
    q: 'How long does shipping take?',
    a: 'Orders ship within 24 hours via expedited shipping. Most U.S. customers receive their box in 4-6 business days. Free shipping on 2+ boxes.',
  },
  {
    q: "What if it doesn't work for me?",
    a: "90-day money-back guarantee. Don't feel the difference? Send back any unused boxes and we'll refund every penny. Less than 0.5% of customers ever ask for a refund.",
  },
];

export default function PSection11() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="w-full"
      style={{ backgroundColor: BRAND_CREAM, color: '#1a1a1a' }}
    >
      {/* FAQ Block */}
      <div className="mx-auto max-w-[1100px] px-4 py-16 md:py-24">
        <h2
          className="mb-10 text-center text-3xl font-extrabold tracking-tight md:mb-14 md:text-5xl"
          style={{ color: BRAND_RED, fontFamily: 'serif' }}
        >
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border"
                style={{
                  borderColor: 'rgba(163,22,33,0.18)',
                  backgroundColor: '#fff',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7 md:py-6"
                  aria-expanded={open}
                >
                  <span
                    className="text-base font-semibold md:text-lg"
                    style={{ color: '#1a1a1a' }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold transition-transform"
                    style={{
                      backgroundColor: BRAND_RED,
                      color: BRAND_CREAM,
                      transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {open && (
                  <div className="px-5 pb-5 md:px-7 md:pb-6">
                    <p className="text-sm leading-relaxed text-neutral-700 md:text-base">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 90-Day Money Back Guarantee Banner */}
      <div
        className="w-full"
        style={{
          background: `linear-gradient(180deg, ${BRAND_PINK} 0%, ${BRAND_CREAM} 100%)`,
        }}
      >
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-4 py-16 text-center md:flex-row md:gap-10 md:py-20 md:text-left">
          <div className="flex flex-shrink-0 items-center justify-center">
            <div
              className="flex h-32 w-32 items-center justify-center rounded-full md:h-44 md:w-44"
              style={{
                backgroundColor: BRAND_RED,
                color: BRAND_CREAM,
                boxShadow: '0 10px 30px rgba(163,22,33,0.25)',
              }}
            >
              <div className="text-center">
                <div className="text-2xl font-extrabold md:text-3xl">90</div>
                <div className="text-[10px] uppercase tracking-widest md:text-xs">
                  Day
                </div>
                <div className="text-[10px] uppercase tracking-widest md:text-xs">
                  Guarantee
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col items-center md:items-start">
            <h3
              className="mb-3 text-2xl font-extrabold leading-tight md:text-4xl"
              style={{ color: BRAND_RED, fontFamily: 'serif' }}
            >
              See Results In 90 Days
              <br />
              <span className="italic">or Your Money Back!</span>
            </h3>
            <p className="mb-5 max-w-xl text-sm leading-relaxed text-neutral-700 md:text-base">
              We&apos;re so confident in Yuko&apos;s Korean formula that if you
              don&apos;t feel lighter, less bloated, and more in control of
              your cravings within 90 days — send your boxes back. We&apos;ll
              refund every penny. No questions, no hoops.
            </p>
            <button
              type="button"
              onClick={() => openReserve()}
              className="inline-block rounded-full px-8 py-3 text-sm font-bold uppercase tracking-wider transition-opacity hover:opacity-90 md:text-base"
              style={{ backgroundColor: BRAND_RED, color: BRAND_CREAM }}
            >
              Reserve Yours
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
