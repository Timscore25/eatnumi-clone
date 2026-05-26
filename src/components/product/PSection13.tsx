'use client';

// TODO before launch:
//   - replace placeholder support@yuko.com / press@yuko.com with real domain emails
//   - replace placeholder Austin, TX address with real registered business address
const BRAND_RED = '#a31621';
const BRAND_CREAM = '#fff9f5';

const FOOTER_LINKS = [
  { label: 'FAQ', href: '/' },
  { label: 'Manage Subscription', href: '/' },
  { label: 'Log In', href: '/' },
  { label: 'Terms of Service', href: '/' },
  { label: 'Privacy Policy', href: '/' },
  { label: 'Refund Policy', href: '/' },
];

const PAYMENT_METHODS = [
  'Visa',
  'Mastercard',
  'American Express',
  'PayPal',
  'Apple Pay',
  'Google Pay',
  'Shop Pay',
];

export default function PSection13() {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: BRAND_RED, color: BRAND_CREAM }}
    >
      <div className="mx-auto max-w-[1400px] px-4 py-14 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand / Logo */}
          <div className="md:col-span-3">
            <a href="/" className="mb-4 inline-block text-2xl font-extrabold tracking-tight md:text-3xl" style={{ fontFamily: 'serif' }}>
              Yuko
            </a>
            <p className="mt-3 text-sm leading-relaxed opacity-90">
              Yuko — Korean wellness, made for women who want to feel
              satisfied, energized, and confident.
            </p>
          </div>

          {/* Menu */}
          <div className="md:col-span-3">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] opacity-80">
              Footer menu
            </h4>
            <ul className="flex flex-col gap-2">
              {FOOTER_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm hover:underline"
                    style={{ color: BRAND_CREAM }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] opacity-80">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <div className="font-semibold">Customer Support</div>
                {/* TODO: replace with real support email */}
                <a href="/" className="opacity-90 hover:underline">
                  support@yuko.com
                </a>
              </li>
              <li>
                <div className="font-semibold">Media &amp; Partnerships</div>
                {/* TODO: replace with real press email */}
                <a href="/" className="opacity-90 hover:underline">
                  press@yuko.com
                </a>
              </li>
              <li>
                <div className="font-semibold">Address</div>
                {/* TODO: replace with real registered business address */}
                <div className="opacity-90">
                  701 Tillery Street, Austin, TX, USA
                </div>
              </li>
            </ul>
          </div>

          {/* Follow + Newsletter */}
          <div className="md:col-span-3">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] opacity-80">
              Follow Us
            </h4>
            <div className="mb-6 flex gap-3">
              {['Facebook', 'Instagram', 'Tiktok'].map((s) => (
                <a
                  key={s}
                  href="/"
                  aria-label={s}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-current text-xs font-semibold uppercase opacity-90 transition-opacity hover:opacity-100"
                >
                  {s.charAt(0)}
                </a>
              ))}
            </div>

            <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] opacity-80">
              Sign up for 10% off + Yuko launch news
            </h4>
            <p className="mb-3 text-sm opacity-90">
              Get tips on quiet cravings, energy resets, and skin-saving
              routines from the Yuko team.
            </p>
            <form
              className="flex overflow-hidden rounded-full"
              style={{ backgroundColor: BRAND_CREAM }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email"
                aria-label="Email"
                className="flex-1 bg-transparent px-4 py-2 text-sm outline-none"
                style={{ color: BRAND_RED }}
              />
              <button
                type="submit"
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider"
                style={{ backgroundColor: BRAND_RED, color: BRAND_CREAM }}
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-10 h-px w-full"
          style={{ backgroundColor: 'rgba(255,249,245,0.2)' }}
        />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-xs opacity-90">
            &copy; 2026 Yuko Inc. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-xs font-semibold uppercase tracking-widest opacity-80">
              Payment methods
            </span>
            {PAYMENT_METHODS.map((p) => (
              <span
                key={p}
                className="rounded px-2 py-1 text-[10px] font-semibold uppercase"
                style={{
                  backgroundColor: BRAND_CREAM,
                  color: BRAND_RED,
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
