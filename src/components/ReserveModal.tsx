'use client';

import { useEffect, useRef, useState } from 'react';
import { RESERVE_EVENT, type ReserveVariant } from '@/lib/reserve';

const BRAND_RED = '#a6171f';
const BRAND_CREAM = '#fff9f5';
const BRAND_PINK = '#feedee';
const BRAND_DARK = '#1d1c1c';

type Status = 'idle' | 'submitting' | 'success' | 'error';

type VariantOption = {
  id: Exclude<ReserveVariant, null>;
  title: string;
  price: string;
  badge?: string;
};

const VARIANT_OPTIONS: VariantOption[] = [
  { id: 'v1', title: '1-pack', price: '$50' },
  { id: 'v2', title: '2-pack', price: '$100', badge: 'BEST' },
  { id: 'v3', title: '3-pack', price: '$151' },
];

export default function ReserveModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [variant, setVariant] = useState<Exclude<ReserveVariant, null>>('v2');
  const emailInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    function handler(e: Event) {
      const detail = (e as CustomEvent<{ variant: ReserveVariant }>).detail;
      if (detail?.variant) setVariant(detail.variant);
      setStatus('idle');
      setError(null);
      setOpen(true);
    }
    window.addEventListener(RESERVE_EVENT, handler as EventListener);
    return () =>
      window.removeEventListener(RESERVE_EVENT, handler as EventListener);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      // focus the first field
      setTimeout(() => emailInputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);
    try {
      const res = await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          variant,
          source:
            typeof window !== 'undefined' ? window.location.pathname : '',
        }),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error ?? `error-${res.status}`);
        setStatus('error');
        return;
      }
      setStatus('success');
    } catch (err) {
      console.error(err);
      setError('network');
      setStatus('error');
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-md rounded-2xl p-6 shadow-2xl"
        style={{ backgroundColor: BRAND_CREAM, color: BRAND_DARK }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-lg leading-none hover:bg-black/5"
          style={{ color: BRAND_DARK }}
        >
          ×
        </button>

        {status === 'success' ? (
          <div className="py-6 text-center">
            <div
              className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
              style={{ backgroundColor: BRAND_PINK, color: BRAND_RED }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12l5 5L20 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="text-xl font-extrabold">You&rsquo;re on the list.</h2>
            <p className="mt-2 text-sm text-black/70">
              We&rsquo;ll email you the moment we ship. The first 50
              reservations get 25% off launch pricing.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-6 w-full rounded-xl py-3 text-sm font-bold uppercase tracking-wider text-white"
              style={{ backgroundColor: BRAND_RED }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div
              className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
              style={{ backgroundColor: BRAND_RED }}
            >
              Reserve Your Spot
            </div>
            <h2 className="mt-3 text-2xl font-extrabold leading-tight">
              Launching soon. Lock in launch pricing.
            </h2>
            <p className="mt-2 text-sm text-black/70">
              Drop your email and we&rsquo;ll notify you the moment we ship.
              First 50 reservations get 25% off.
            </p>

            <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3">
              <label className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-black/60">
                  Email
                </span>
                <input
                  ref={emailInputRef}
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="rounded-xl border border-black/10 bg-white px-3 py-3 text-sm outline-none focus:border-black/40"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-black/60">
                  First name
                </span>
                <input
                  type="text"
                  required
                  minLength={1}
                  maxLength={100}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Sarah"
                  className="rounded-xl border border-black/10 bg-white px-3 py-3 text-sm outline-none focus:border-black/40"
                />
              </label>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-black/60">
                  Which pack would you want?
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {VARIANT_OPTIONS.map((opt) => {
                    const selected = variant === opt.id;
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setVariant(opt.id)}
                        className="relative rounded-xl border-2 bg-white px-2 py-3 text-center text-sm transition"
                        style={{
                          borderColor: selected ? BRAND_RED : 'rgba(0,0,0,0.1)',
                        }}
                      >
                        {opt.badge && (
                          <span
                            className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
                            style={{
                              backgroundColor: BRAND_RED,
                              color: BRAND_CREAM,
                            }}
                          >
                            {opt.badge}
                          </span>
                        )}
                        <div className="font-bold">{opt.title}</div>
                        <div className="mt-1 text-xs text-black/60">
                          {opt.price}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {status === 'error' && (
                <div
                  className="rounded-lg px-3 py-2 text-xs"
                  style={{ backgroundColor: BRAND_PINK, color: BRAND_RED }}
                >
                  {error === 'invalid-email'
                    ? 'Please use a valid email address.'
                    : error === 'invalid-name'
                      ? 'Please enter your first name.'
                      : 'Something went wrong. Please try again in a moment.'}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-1 rounded-xl py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md transition disabled:opacity-60"
                style={{ backgroundColor: BRAND_RED }}
              >
                {status === 'submitting'
                  ? 'Reserving…'
                  : 'Reserve My Spot'}
              </button>
              <p className="text-center text-[11px] text-black/50">
                No payment now. We&rsquo;ll only email you about launch.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
