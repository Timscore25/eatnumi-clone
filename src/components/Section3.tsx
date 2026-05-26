'use client';

import { useState } from 'react';

/**
 * Section3 — bottom of the page.
 *
 * Sub-blocks (top → bottom):
 *  1. Footer payment-icons strip (PayPal / Visa / Mastercard / Amex / Apple Pay / iDEAL / Wero / Bancontact)
 *  2. Trust line + secure-checkout footer cap
 *  3. Newsletter / email-capture popup — large two-column hero with imagery on the left and signup form on the right.
 *  4. Hidden helper modals (search drawer + cart drawer + currency selector) rendered inline as
 *     placeholder bottom blocks so the section's vertical rhythm matches the original (~4700px).
 */

const BRAND_RED = '#a6171f';
const BRAND_DARK_RED = '#7a0f17';
const BRAND_CREAM = '#fffaf6';
const BRAND_PINK_BG = '#feedee';
const BRAND_TEXT = '#111827';

const NEWSLETTER_BG = 'https://d3k81ch9hvuctc.cloudfront.net/company/XcnLLX/images/d30a8290-218e-46dc-8f81-b2b3e42945d9.jpeg';
const NEWSLETTER_OVERLAY = 'https://d3k81ch9hvuctc.cloudfront.net/company/XcnLLX/images/94f6551e-4e1d-418e-87c2-26bc80ce48aa.png';

const PRODUCT_IMG_1 = '//eatnumi.com/cdn/shop/files/0lAnm_G7D0QcHJBYCR2J_1OgpwX0a.png?v=1774770757&width=500';
const PRODUCT_IMG_2 = '//eatnumi.com/cdn/shop/files/s8jXaChFgbVwy94DK2Gnr_sWXrl2dh.png?v=1775795871&width=500';
const PRODUCT_IMG_3 = '//eatnumi.com/cdn/shop/files/fl1rDBkNAbBGpXl9x4ETW_kuOCQnF0.png?v=1776848607&width=500';
const PRODUCT_IMG_4 = '//eatnumi.com/cdn/shop/files/Hjh35b06xGnBm5kxgkqOY_V4eVnbmq.png?v=1774770209&width=500';

const PAY_SVG = {
  paypal: 'https://moonbundle-assets.fra1.cdn.digitaloceanspaces.com/cart-svg/paypalColor.svg',
  visa: 'https://moonbundle-assets.fra1.cdn.digitaloceanspaces.com/cart-svg/visaBlue.svg',
  mc: 'https://moonbundle-assets.fra1.cdn.digitaloceanspaces.com/cart-svg/mastercardNotxt.svg',
  amex: 'https://moonbundle-assets.fra1.cdn.digitaloceanspaces.com/cart-svg/americanExpressColor.svg',
  apple: 'https://moonbundle-assets.fra1.cdn.digitaloceanspaces.com/cart-svg/applePayTwo.svg',
  google: 'https://moonbundle-assets.fra1.cdn.digitaloceanspaces.com/cart-svg/google.svg',
  shop: 'https://moonbundle-assets.fra1.cdn.digitaloceanspaces.com/cart-svg/shopPay.svg',
  paypalTwo: 'https://moonbundle-assets.fra1.cdn.digitaloceanspaces.com/cart-svg/paypalTwo.svg',
};

/* -------------------------------------------------------------------------- */
/* Sub-component: Footer payment icons                                         */
/* -------------------------------------------------------------------------- */

const PAYMENT_BADGES: { label: string; node: React.ReactNode }[] = [
  {
    label: 'PayPal',
    node: (
      <svg viewBox="0 0 38 24" width="38" height="24" role="img" aria-labelledby="pi-paypal">
        <title id="pi-paypal">PayPal</title>
        <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" />
        <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" />
        <path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z" />
        <path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z" />
        <path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z" />
      </svg>
    ),
  },
  {
    label: 'Visa',
    node: (
      <svg viewBox="0 0 38 24" width="38" height="24" role="img" aria-labelledby="pi-visa">
        <title id="pi-visa">Visa</title>
        <rect width="38" height="24" rx="3" fill="#fff" stroke="#e5e7eb" />
        <path fill="#142787" d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5z" />
      </svg>
    ),
  },
  {
    label: 'Mastercard',
    node: (
      <svg viewBox="0 0 38 24" width="38" height="24" role="img" aria-labelledby="pi-mc">
        <title id="pi-mc">Mastercard</title>
        <rect width="38" height="24" rx="3" fill="#fff" stroke="#e5e7eb" />
        <circle cx="15" cy="12" r="6" fill="#EB001B" />
        <circle cx="23" cy="12" r="6" fill="#F79E1B" />
        <path fill="#FF5F00" d="M19 7.6a6 6 0 010 8.8 6 6 0 010-8.8z" />
      </svg>
    ),
  },
  {
    label: 'American Express',
    node: (
      <svg viewBox="0 0 38 24" width="38" height="24" role="img" aria-labelledby="pi-amex">
        <title id="pi-amex">American Express</title>
        <rect width="38" height="24" rx="3" fill="#1F72CD" />
        <text x="19" y="15" textAnchor="middle" fontFamily="Arial" fontWeight="700" fontSize="6" fill="#fff">AMEX</text>
      </svg>
    ),
  },
  {
    label: 'Apple Pay',
    node: (
      <svg viewBox="0 0 38 24" width="38" height="24" role="img" aria-labelledby="pi-apay">
        <title id="pi-apay">Apple Pay</title>
        <rect width="38" height="24" rx="3" fill="#000" />
        <text x="19" y="15" textAnchor="middle" fontFamily="-apple-system, Arial" fontWeight="600" fontSize="7" fill="#fff">Pay</text>
      </svg>
    ),
  },
  {
    label: 'iDEAL',
    node: (
      <svg viewBox="0 0 38 24" width="38" height="24" role="img" aria-labelledby="pi-ideal">
        <title id="pi-ideal">iDEAL</title>
        <rect width="38" height="24" rx="3" fill="#fff" stroke="#e5e7eb" />
        <text x="6" y="15" fontFamily="Arial" fontWeight="700" fontSize="7" fill="#CC0066">i</text>
        <text x="11" y="15" fontFamily="Arial" fontWeight="700" fontSize="7" fill="#0F2D5A">DEAL</text>
      </svg>
    ),
  },
  {
    label: 'Wero',
    node: (
      <svg viewBox="0 0 38 24" width="38" height="24" role="img" aria-labelledby="pi-wero">
        <title id="pi-wero">Wero</title>
        <rect width="38" height="24" rx="3" fill="#fff" stroke="#e5e7eb" />
        <text x="19" y="15" textAnchor="middle" fontFamily="Arial" fontWeight="700" fontSize="7" fill="#1A1A1A">wero</text>
      </svg>
    ),
  },
  {
    label: 'Bancontact',
    node: (
      <svg viewBox="0 0 38 24" width="38" height="24" role="img" aria-labelledby="pi-banc">
        <title id="pi-banc">Bancontact</title>
        <rect width="38" height="24" rx="3" fill="#fff" stroke="#e5e7eb" />
        <text x="19" y="15" textAnchor="middle" fontFamily="Arial" fontWeight="800" fontSize="6" fill="#005498">Bancontact</text>
      </svg>
    ),
  },
];

function FooterPaymentStrip() {
  return (
    <div
      className="w-full"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div
        className="mx-auto max-w-[1400px] flex flex-wrap items-center justify-center gap-3"
        style={{ paddingTop: 30, paddingBottom: 50, paddingLeft: 24, paddingRight: 24 }}
      >
        <span className="sr-only">Payment methods</span>
        <ul className="flex flex-wrap items-center justify-center" style={{ gap: 13 }}>
          {PAYMENT_BADGES.map((b) => (
            <li
              key={b.label}
              className="inline-flex items-center justify-center"
              aria-label={b.label}
              title={b.label}
            >
              {b.node}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Sub-component: Trust + secure checkout strip                                */
/* -------------------------------------------------------------------------- */

function TrustStrip() {
  return (
    <div
      className="w-full"
      style={{ backgroundColor: BRAND_PINK_BG }}
    >
      <div
        className="mx-auto max-w-[1400px] flex flex-col items-center justify-center text-center"
        style={{
          paddingTop: 28,
          paddingBottom: 32,
          paddingLeft: 24,
          paddingRight: 24,
          color: BRAND_DARK_RED,
        }}
      >
        <p
          className="text-sm sm:text-base"
          style={{ fontWeight: 500, marginBottom: 8 }}
        >
          Ready to feel lighter, less bloated, and finally in control? Yuko ships free — and you&apos;re covered for 90 days.
        </p>
        <a
          href="/product"
          className="inline-flex items-center justify-center font-semibold uppercase tracking-wide rounded-md transition-opacity hover:opacity-90"
          style={{
            backgroundColor: BRAND_RED,
            color: BRAND_CREAM,
            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 28,
            paddingRight: 28,
            marginTop: 6,
            fontSize: 14,
            letterSpacing: '0.06em',
          }}
        >
          Secure checkout →
        </a>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Sub-component: Newsletter / Klaviyo signup popup (rendered inline as hero)  */
/* -------------------------------------------------------------------------- */

function NewsletterPopup({
  onClose,
}: {
  onClose: () => void;
}) {
  const [email, setEmail] = useState('');

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: BRAND_RED,
        backgroundImage: `url("${NEWSLETTER_BG}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 720,
      }}
    >
      {/* Tinted overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(166,23,31,0.55) 0%, rgba(166,23,31,0.7) 60%, rgba(166,23,31,0.78) 100%)',
        }}
        aria-hidden
      />

      {/* Decorative product overlay */}
      <img
        src={NEWSLETTER_OVERLAY}
        alt=""
        loading="lazy"
        className="absolute pointer-events-none select-none hidden md:block"
        style={{
          right: '4%',
          bottom: 0,
          width: 'min(46vw, 720px)',
          maxHeight: '100%',
          objectFit: 'contain',
          objectPosition: 'right bottom',
        }}
      />

      {/* Close (X) */}
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute top-4 right-4 inline-flex items-center justify-center rounded-full transition-colors"
        style={{
          width: 36,
          height: 36,
          backgroundColor: 'rgba(255,255,255,0.18)',
          color: '#fff',
          backdropFilter: 'blur(2px)',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
          <path d="M6 6 L18 18 M6 18 L18 6" />
        </svg>
      </button>

      {/* Content card */}
      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 py-16 md:py-24 flex justify-center md:justify-start">
        <div
          className="w-full max-w-[520px] text-center"
          style={{ color: '#fff' }}
        >
          {/* Logo wordmark */}
          <p
            className="uppercase"
            style={{
              letterSpacing: '0.4em',
              fontSize: 12,
              fontWeight: 600,
              marginBottom: 20,
              opacity: 0.85,
            }}
          >
            YUKO
          </p>

          {/* Heading */}
          <h2
            style={{
              fontFamily:
                'Poppins, Arial, "Helvetica Neue", Helvetica, sans-serif',
              fontSize: 'clamp(22px, 3.4vw, 34px)',
              fontWeight: 600,
              lineHeight: 1.15,
              marginBottom: 12,
              color: '#ffffff',
            }}
          >
            Get 10% off your
            <br />
            first Yuko box.
          </h2>

          <p
            className="text-sm sm:text-base"
            style={{
              opacity: 0.92,
              maxWidth: 420,
              margin: '0 auto 28px',
              lineHeight: 1.5,
            }}
          >
            Join thousands of women using Yuko to feel lighter, less bloated,
            and finally satisfied — without injections or restrictive diets.
          </p>

          {/* Email input */}
          <div className="px-2 sm:px-12" style={{ paddingBottom: 12 }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              aria-label="Enter your email address"
              className="w-full outline-none"
              style={{
                backgroundColor: '#ffffff',
                color: BRAND_TEXT,
                borderRadius: 4,
                paddingTop: 12,
                paddingBottom: 12,
                paddingLeft: 16,
                paddingRight: 16,
                fontSize: 14,
                border: '1px solid rgba(255,255,255,0.4)',
              }}
            />
          </div>

          {/* Primary CTA */}
          <div className="px-2 sm:px-12" style={{ paddingTop: 8, paddingBottom: 8 }}>
            <button
              type="button"
              className="w-full font-semibold uppercase tracking-wider transition-opacity hover:opacity-90"
              style={{
                backgroundColor: BRAND_CREAM,
                color: BRAND_RED,
                borderRadius: 4,
                paddingTop: 14,
                paddingBottom: 14,
                fontSize: 14,
                letterSpacing: '0.08em',
              }}
            >
              GET MY 10% OFF
            </button>
          </div>

          {/* Secondary "no thanks" */}
          <div className="px-2 sm:px-44" style={{ paddingTop: 8, paddingBottom: 8 }}>
            <button
              type="button"
              onClick={onClose}
              className="w-full transition-opacity hover:opacity-80"
              style={{
                backgroundColor: 'transparent',
                color: '#ffffff',
                borderRadius: 4,
                paddingTop: 8,
                paddingBottom: 8,
                fontSize: 12,
                textDecoration: 'underline',
                opacity: 0.85,
              }}
            >
              No thanks
            </button>
          </div>

          <p
            className="mt-6"
            style={{ fontSize: 11, opacity: 0.7, lineHeight: 1.5 }}
          >
            By submitting your email, you agree to receive marketing messages from Yuko. Unsubscribe anytime. *Individual results vary.
          </p>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Sub-component: Search modal preview block                                  */
/* -------------------------------------------------------------------------- */

const SEARCH_PRODUCTS: { title: string; price: string; img: string }[] = [
  {
    title: 'Korean Cutting Jelly',
    price: '$59.00',
    img: PRODUCT_IMG_1,
  },
  {
    title: 'Collagen & Glow Sticks',
    price: '$49.00',
    img: PRODUCT_IMG_2,
  },
  {
    title: 'Bloat Relief Gummies',
    price: '$42.00',
    img: PRODUCT_IMG_3,
  },
  {
    title: 'Energy Reset Pack',
    price: '$69.00',
    img: PRODUCT_IMG_4,
  },
];

function SearchPreviewBlock() {
  return (
    <div
      className="w-full"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 py-14 md:py-20">
        {/* Search bar */}
        <div
          className="flex items-center w-full mb-10"
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: 4,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 14,
            paddingBottom: 14,
            backgroundColor: '#fff',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={BRAND_TEXT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="search"
            placeholder="Search"
            aria-label="Search"
            className="flex-1 outline-none"
            style={{
              border: 'none',
              marginLeft: 12,
              fontSize: 14,
              backgroundColor: 'transparent',
            }}
          />
          <button
            type="button"
            className="text-xs uppercase tracking-wider"
            style={{ color: '#6b7280', fontWeight: 600 }}
          >
            Clear
          </button>
        </div>

        {/* Products header */}
        <h4
          className="mb-6"
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#6b7280',
          }}
        >
          Products
        </h4>

        {/* Product grid */}
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 list-none p-0 m-0">
          {SEARCH_PRODUCTS.map((p) => (
            <li
              key={p.title}
              className="flex flex-col"
              style={{
                border: '1px solid #f3f4f6',
                borderRadius: 4,
                overflow: 'hidden',
                backgroundColor: '#fff',
              }}
            >
              <div
                className="w-full"
                style={{
                  aspectRatio: '4 / 5',
                  backgroundColor: BRAND_PINK_BG,
                }}
              >
                <img
                  src={p.img.startsWith('//') ? `https:${p.img}` : p.img}
                  alt=""
                  loading="lazy"
                  className="w-full h-full"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
              <div className="px-3 py-3">
                <p
                  className="text-sm leading-snug line-clamp-2"
                  style={{ color: BRAND_TEXT, marginBottom: 6, minHeight: 38 }}
                >
                  {p.title}
                </p>
                <span
                  className="block"
                  style={{
                    color: BRAND_RED,
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  {p.price}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-10">
          <button
            type="button"
            className="font-semibold uppercase tracking-wider transition-opacity hover:opacity-90"
            style={{
              backgroundColor: BRAND_RED,
              color: BRAND_CREAM,
              borderRadius: 4,
              paddingTop: 12,
              paddingBottom: 12,
              paddingLeft: 36,
              paddingRight: 36,
              fontSize: 14,
              letterSpacing: '0.08em',
            }}
          >
            View all
          </button>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Sub-component: Cart-drawer preview                                          */
/* -------------------------------------------------------------------------- */

function CartDrawerPreview() {
  return (
    <div className="w-full" style={{ backgroundColor: BRAND_PINK_BG }}>
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 py-14 md:py-20 flex justify-center">
        <div
          className="w-full max-w-[420px]"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 8,
            boxShadow: '0 18px 40px -12px rgba(0,0,0,0.15)',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between"
            style={{
              padding: '16px 20px',
              borderBottom: '1px solid #f3f4f6',
              color: BRAND_TEXT,
              fontWeight: 600,
            }}
          >
            <div className="inline-flex items-center gap-2">
              <span style={{ fontSize: 16 }}>Your cart</span>
              <span
                className="inline-flex items-center justify-center"
                style={{
                  backgroundColor: BRAND_RED,
                  color: '#fff',
                  borderRadius: 9999,
                  width: 22,
                  height: 22,
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                0
              </span>
            </div>
            <button aria-label="Close" className="text-gray-500 hover:text-gray-800" type="button">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6 L18 18 M6 18 L18 6" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div
            className="flex flex-col items-center justify-center text-center"
            style={{
              padding: '60px 24px',
              color: '#6b7280',
              minHeight: 220,
            }}
          >
            <div
              className="rounded-full inline-flex items-center justify-center mb-4"
              style={{
                width: 56,
                height: 56,
                backgroundColor: BRAND_PINK_BG,
                color: BRAND_RED,
              }}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M3 6h2l2 12h12l2-9H6" />
                <circle cx="9" cy="20" r="1.4" />
                <circle cx="17" cy="20" r="1.4" />
              </svg>
            </div>
            <p style={{ fontWeight: 600, color: BRAND_TEXT, marginBottom: 6 }}>Empty cart</p>
            <p style={{ fontSize: 13 }}>Add a product to get started.</p>
          </div>

          {/* Footer */}
          <div
            style={{
              borderTop: '1px solid #f3f4f6',
              padding: '16px 20px',
            }}
          >
            <div className="flex items-center justify-between mb-3" style={{ color: BRAND_TEXT }}>
              <span style={{ fontWeight: 600 }}>Total</span>
              <span style={{ fontWeight: 700, color: BRAND_RED }}>$0.00</span>
            </div>
            <button
              type="button"
              className="w-full font-semibold uppercase tracking-wider transition-opacity hover:opacity-90"
              style={{
                backgroundColor: BRAND_RED,
                color: BRAND_CREAM,
                borderRadius: 4,
                paddingTop: 12,
                paddingBottom: 12,
                fontSize: 13,
                letterSpacing: '0.1em',
              }}
            >
              SECURE CHECKOUT →
            </button>

            {/* Payment row */}
            <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
              {[PAY_SVG.paypalTwo, PAY_SVG.visa, PAY_SVG.mc, PAY_SVG.amex, PAY_SVG.apple, PAY_SVG.google, PAY_SVG.shop].map(
                (src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    loading="lazy"
                    style={{ height: 18, width: 'auto' }}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Main Section3                                                               */
/* -------------------------------------------------------------------------- */

export default function Section3() {
  const [showNewsletter, setShowNewsletter] = useState(true);

  return (
    <section className="w-full" style={{ backgroundColor: '#ffffff' }}>
      {/* 1. Footer payment icons */}
      <FooterPaymentStrip />

      {/* 2. Trust strip with secure checkout */}
      <TrustStrip />

      {/* 3. Search modal preview (rendered inline as a section) */}
      <SearchPreviewBlock />

      {/* 4. Cart drawer preview */}
      <CartDrawerPreview />

      {/* 5. Newsletter popup hero */}
      {showNewsletter && (
        <NewsletterPopup onClose={() => setShowNewsletter(false)} />
      )}

      {/* Final copyright bar */}
      <div
        className="w-full"
        style={{ backgroundColor: BRAND_DARK_RED, color: BRAND_CREAM }}
      >
        <div
          className="mx-auto max-w-[1400px] flex flex-col sm:flex-row items-center justify-between text-center sm:text-left"
          style={{
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 24,
            paddingRight: 24,
            fontSize: 12,
            opacity: 0.92,
          }}
        >
          <p style={{ margin: 0 }}>© 2026 Yuko. All rights reserved.</p>
          <p style={{ margin: 0 }} className="mt-2 sm:mt-0">
            AUD · Auto Location
          </p>
        </div>
      </div>
    </section>
  );
}
