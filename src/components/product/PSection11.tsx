'use client';

import { useState } from 'react';

const BRAND_RED = '#a31621';
const BRAND_CREAM = '#fff9f5';
const BRAND_PINK = '#ffeaea';

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: 'Lorem ipsum dolor sit amet, consectetur adipiscing?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    q: 'Duis aute irure dolor in reprehenderit?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    q: 'Ut enim ad minim veniam, quis nostrud?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
  },
  {
    q: 'Sed ut perspiciatis unde omnis iste natus?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  },
  {
    q: 'Quis autem vel eum iure reprehenderit?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.',
  },
  {
    q: 'Temporibus autem quibusdam et aut officiis?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
  },
  {
    q: 'At vero eos et accusamus et iusto?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.',
  },
  {
    q: 'Nemo enim ipsam voluptatem quia voluptas?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
  },
  {
    q: 'Excepteur sint occaecat cupidatat non proident?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat.',
  },
  {
    q: 'Itaque earum rerum hic tenetur a sapiente?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.',
  },
  {
    q: 'Mollitia animi, id est laborum et dolorum?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.',
  },
  {
    q: 'Quis nostrum exercitationem ullam corporis?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Email us anytime at support@example.com',
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a
              href="#buy-box"
              className="inline-block rounded-full px-8 py-3 text-sm font-bold uppercase tracking-wider transition-opacity hover:opacity-90 md:text-base"
              style={{ backgroundColor: BRAND_RED, color: BRAND_CREAM }}
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
