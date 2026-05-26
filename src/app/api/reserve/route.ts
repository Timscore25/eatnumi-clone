import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

type ReserveBody = {
  email?: string;
  name?: string;
  variant?: string;
  source?: string;
};

const VARIANT_LABELS: Record<string, string> = {
  v1: '1-pack ($50)',
  v2: '2-pack ($100) — BEST RESULTS',
  v3: '3-pack ($151)',
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: NextRequest) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json(
      { ok: false, error: 'server-not-configured' },
      { status: 500 },
    );
  }

  let body: ReserveBody;
  try {
    body = (await req.json()) as ReserveBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: 'invalid-json' },
      { status: 400 },
    );
  }

  const email = (body.email ?? '').trim();
  const name = (body.name ?? '').trim();
  const variant = body.variant ?? '';
  const source = (body.source ?? 'unknown').trim();

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: 'invalid-email' },
      { status: 400 },
    );
  }
  if (name.length < 1 || name.length > 100) {
    return NextResponse.json(
      { ok: false, error: 'invalid-name' },
      { status: 400 },
    );
  }

  const variantLabel = VARIANT_LABELS[variant] ?? 'No variant chosen';
  const ua = req.headers.get('user-agent') ?? '';
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '';
  const timestamp = new Date().toISOString();

  const text =
    `🎯 *NEW RESERVATION*\n` +
    `*Name:* ${escapeMd(name)}\n` +
    `*Email:* ${escapeMd(email)}\n` +
    `*Variant:* ${escapeMd(variantLabel)}\n` +
    `*Source:* ${escapeMd(source)}\n` +
    `*Time:* ${escapeMd(timestamp)}\n` +
    (ip ? `*IP:* ${escapeMd(ip)}\n` : '') +
    (ua ? `*UA:* ${escapeMd(ua.slice(0, 120))}` : '');

  const tgUrl = `https://api.telegram.org/bot${token}/sendMessage`;
  const tgRes = await fetch(tgUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'Markdown',
      disable_web_page_preview: true,
    }),
  });

  if (!tgRes.ok) {
    const detail = await tgRes.text();
    console.error('telegram error', tgRes.status, detail);
    return NextResponse.json(
      { ok: false, error: 'telegram-failed' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeMd(s: string) {
  return s.replace(/([_*`\[\]])/g, '\\$1');
}
