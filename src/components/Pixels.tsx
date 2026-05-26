'use client';

import Script from 'next/script';

const tiktokId = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID;
const metaId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function Pixels() {
  return (
    <>
      {tiktokId && (
        <Script id="ttq" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
              ttq.load('${tiktokId}');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>
      )}
      {metaId && (
        <Script id="fbq" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}

export function trackReserveSubmit(variant: string) {
  if (typeof window === 'undefined') return;
  try {
    const w = window as unknown as {
      ttq?: { track: (name: string, data?: Record<string, unknown>) => void };
      fbq?: (action: string, name: string, data?: Record<string, unknown>) => void;
    };
    w.ttq?.track('CompletePayment', {
      content_type: 'product',
      content_id: variant,
      value: 0,
      currency: 'USD',
    });
    w.ttq?.track('SubmitForm');
    w.fbq?.('track', 'Lead', { content_name: 'reserve', variant });
  } catch (err) {
    console.warn('pixel track failed', err);
  }
}

export function trackReserveOpen(source: string) {
  if (typeof window === 'undefined') return;
  try {
    const w = window as unknown as {
      ttq?: { track: (name: string, data?: Record<string, unknown>) => void };
      fbq?: (action: string, name: string, data?: Record<string, unknown>) => void;
    };
    w.ttq?.track('InitiateCheckout', { source });
    w.fbq?.('track', 'InitiateCheckout', { source });
  } catch (err) {
    console.warn('pixel track failed', err);
  }
}

export function trackViewContent() {
  if (typeof window === 'undefined') return;
  try {
    const w = window as unknown as {
      ttq?: { track: (name: string, data?: Record<string, unknown>) => void };
      fbq?: (action: string, name: string, data?: Record<string, unknown>) => void;
    };
    w.ttq?.track('ViewContent');
    w.fbq?.('track', 'ViewContent');
  } catch (err) {
    console.warn('pixel track failed', err);
  }
}
