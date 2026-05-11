# Launch Tutorial — From Repo To Paid Ads

This is a step-by-step playbook for taking the two-page site in this repo (a landing page at `/` and a product page at `/product`) and turning it into a working store with paid traffic. It assumes **zero prior ecommerce experience**.

Whenever a step feels unclear, copy that step into Claude and ask "explain this like I've never done it before, walk me through it click-by-click." That's the intended use — this doc gives you the **what** and the **order**, Claude fills in the **how** for whatever you get stuck on.

> ⚠️ **Legal/policy heads-up** (read once before you start):
> 1. All marketing text, testimonials, and brand-specific phrasing on the two pages are placeholders (Lorem ipsum). You must replace them with claims you can actually substantiate. Health/wellness claims have FTC rules — don't claim something cures, treats, or causes weight loss unless you have evidence and disclaimers.
> 2. The images currently load from the source site's CDN. Before you go live, swap them for your own product photos (or licensed assets). Hot-linking is unreliable and not legally yours to use commercially.
> 3. **Don't re-upload other people's TikTok videos as ads** — that's copyright infringement and gets accounts banned. Step 10 covers the legal way.

---

## Part 0 — What you're shipping

- **Landing page (`/`)**: long-form "5 reasons why" article-style page with a sticky announcement bar at the top. Every CTA button points to `/product`.
- **Product page (`/product`)**: hero + buy box + reasons + FAQ + reviews + footer. Every "Add to Cart" button goes to the Shopify checkout (you'll wire this in Part 5).
- **Shopify** handles the cart, checkout, payments, and order management. The two pages above are the **front of the funnel**; Shopify is the **back end**.

Funnel:

```
TikTok/Meta ad → Landing page (/) → Product page (/product) → Shopify checkout → Stripe payment → order
```

---

## Part 1 — Put the code on GitHub

**Why**: Your friends need a copy of the codebase. GitHub is the standard place to store and share code.

1. **Make a GitHub account** at https://github.com (free).
2. **Install GitHub Desktop** (https://desktop.github.com) — it gives you a button-clicker UI instead of the command line. Easier for beginners.
3. **Create a new repository**:
    - In GitHub Desktop: `File → New Repository`
    - Name: `numi-clone` (or whatever)
    - Local path: choose a folder
    - Make it **Private** initially (`Settings → Visibility → Private`). Only flip to public when you're ready.
4. **Copy this project's files** into that new repo folder. Skip these (they're already in `.gitignore`):
    - `node_modules/`
    - `.next/`
    - `chunks/`, `page_data.json`, `screenshot.png` (extractor outputs, not source code)
5. In GitHub Desktop: write a short summary in the "Summary" box (e.g. "initial commit"), click **Commit to main**, then **Publish repository**.
6. **Invite your friends**: on github.com, open the repo → `Settings → Collaborators → Add people` → enter their GitHub username.
7. Send them the URL: `https://github.com/<your-username>/numi-clone`.

Each friend can pull the code by clicking the green **Code** button on the repo page and choosing **Open with GitHub Desktop**.

---

## Part 2 — Set up Shopify and add products

**Why**: Shopify hosts the cart, checkout, inventory, and order management. You only need it for the **back-end** — the marketing pages will live on Vercel.

1. **Start a Shopify trial** at https://www.shopify.com. Pick the cheapest plan (Basic is fine to start, around $39/mo at the time of writing). They give you 3 days free, then $1/mo for the first 3 months.
2. **Pick a Shopify store URL** like `your-brand.myshopify.com`. This is the internal URL — customers will see your real domain (Part 6).
3. **Add a product**:
    - Shopify admin → `Products → Add product`
    - **Title**: your product name (the one you're going to brand it as)
    - **Description**: leave empty for now — the product description lives on `/product` (your Vercel site), not in Shopify
    - **Media**: upload product photos. You can right-click the existing images in the repo (look in each `*.tsx` file's `IMG` constant for URLs) and download them to your computer, **but only as placeholders for development** — for launch you must use your own photography or licensed assets.
    - **Pricing**: set the unit price (e.g. $50). Leave "Compare at price" empty unless you're doing a slash.
    - **Inventory**: tick "Track quantity", set stock, and tick "Continue selling when out of stock" if you want to keep ads running during stockouts.
    - **Shipping**: enter weight if you ship physical goods.
    - **Variants**: if you sell pack sizes (1-pack, 2-pack, 3-pack), add a "Pack size" option with values `1`, `2`, `3`. Each variant gets its own price and SKU.
    - Hit **Save**.
4. **Repeat for bundle SKUs** (e.g. "Buy 2 Get 3 Free" — that's one Shopify product with one price, not three line items, unless you want the customer to see them separately).
5. **Write down each variant's ID**. You'll need this in Part 5 to wire buttons to the right SKU.
    - On the product page in Shopify, look at the URL when you click a variant. It contains `variant=12345678901234` — that long number is the variant ID.
    - Or open the product, scroll to **Variants**, click `…` next to a variant → **Edit** → the URL has the ID.
6. **Get a Storefront API access token** (this lets the Vercel site talk to Shopify):
    - Shopify admin → `Apps → Develop apps` → **Create an app** → name it `Headless Storefront`
    - Click **Configure Storefront API scopes** → tick `unauthenticated_read_product_listings`, `unauthenticated_write_checkouts`, `unauthenticated_read_checkouts`
    - Save, then **Install app**, then copy the **Storefront API access token**. Save it somewhere safe — you'll paste it into Vercel as an environment variable in Part 5.

If you get lost: paste this section into Claude and say "I'm on step X, I see Y on the screen, what do I click?"

---

## Part 3 — Deploy the storefront to Vercel

**Why**: Vercel hosts Next.js sites for free, deploys automatically on every GitHub push, and gives you SSL + a domain.

1. **Make a Vercel account** at https://vercel.com — sign in with GitHub so it can see your repos.
2. **Import the project**: Dashboard → **Add New → Project** → pick your `numi-clone` repo → **Import**.
3. Vercel will autodetect Next.js. Leave all defaults. Hit **Deploy**.
4. After ~1 minute you'll have a live URL like `numi-clone-xyz.vercel.app`. Click it and verify both `/` and `/product` work.
5. **Every git push to `main` auto-deploys** from now on. You'll lean on this heavily.

---

## Part 4 — Connect a custom domain

**Why**: `numi-clone-xyz.vercel.app` doesn't sell. `yourbrand.com` does.

1. **Buy a domain** — easiest places: Namecheap, Porkbun, Cloudflare Registrar (cheapest, no upsells). Roughly $10–15/year for a `.com`.
2. **Add it to Vercel**:
    - In Vercel project → `Settings → Domains` → enter `yourbrand.com` → **Add**.
    - Vercel will show you 2 DNS records to add (an A record and a CNAME, or two CNAMEs). Copy them.
3. **Add the DNS records at your registrar**:
    - Namecheap: `Domain List → Manage → Advanced DNS → Add new record` (paste the values Vercel gave you).
    - Cloudflare: `DNS → Records → Add record`.
    - Other registrars are similar.
4. Wait 5–60 minutes for DNS to propagate. Vercel will show a green ✓ when ready and auto-install SSL.
5. **Test**: `https://yourbrand.com/` should load the landing page, `https://yourbrand.com/product` should load the product page.

> 💡 The Shopify checkout will live on a **subdomain** (e.g. `checkout.yourbrand.com` or `shop.yourbrand.com`). You'll set that up in Part 6.

---

## Part 5 — Wire "Buy now" / "Add to Cart" to Shopify checkout

**Why**: Right now every button points to `/product` (landing page → product page) or `#buy-box` (anchors on the product page). You need the final "Add to Cart" button to actually create a Shopify cart with the right variant and send the customer to Shopify checkout.

**Two approaches** — pick the simpler one:

### Approach A (simplest): permalink to Shopify cart

Shopify accepts a URL like:
```
https://your-store.myshopify.com/cart/<variant_id>:<quantity>
```

For a 2-pack with variant ID `44123456789012`, the link is:
```
https://your-store.myshopify.com/cart/44123456789012:1
```

You replace the `Add to Cart` button's `href` with that URL. For bundles (multiple variants), separate with commas:
```
https://your-store.myshopify.com/cart/44123456789012:1,44987654321098:1
```

**Hand this to Claude**:
> "In `/src/components/product/PSection2.tsx`, the buy box has three variant options (1-pack, 2-pack, 3-pack). The selected variant is tracked in state. Make the 'Add to Cart' button construct the Shopify cart permalink for the selected variant and navigate to it. The variant IDs are 1-pack: AAA, 2-pack: BBB, 3-pack: CCC. The Shopify store domain is `your-store.myshopify.com`."

Claude will edit the file and add a click handler that builds the URL and does `window.location.href = url`.

### Approach B (cleaner, more work): Shopify Storefront API + Hydrogen/Next.js cart

Install `@shopify/hydrogen-react` or use raw Storefront API calls. Create a cart server-side, get a checkout URL back, and redirect. More setup, but the cart can show product details, totals, etc. on your own site before bouncing to Shopify checkout.

Start with Approach A. Move to B later if you want a custom cart UX.

### Add environment variables in Vercel

Whichever approach, set these in Vercel → `Settings → Environment Variables`:

```
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_TOKEN=<the token from Part 2 step 6>
```

Then redeploy.

---

## Part 6 — Customize the Shopify checkout

**Why**: Customers will jump from your branded site → Shopify checkout. The checkout should match your brand so the transition feels seamless and trust isn't broken.

1. **Apply branding**: Shopify admin → `Settings → Checkout → Customize checkout` (or **Settings → Branding** depending on Shopify version).
    - **Logo**: upload your brand logo (PNG with transparent background).
    - **Colors**: set the primary button color, background color, accent. Match what's in this project: red `#a31621` for primary, cream `#fff9f5` for background.
    - **Typography**: pick a font similar to Poppins/Inter (which we use on the marketing pages).
2. **Use a custom subdomain for checkout** (so the URL bar shows your brand, not `*.myshopify.com`):
    - Shopify admin → `Settings → Domains → Connect existing domain` → enter `checkout.yourbrand.com`.
    - Add the CNAME record at your registrar: `checkout` → `shops.myshopify.com`.
    - Wait for DNS, verify in Shopify.
    - In Shopify → `Settings → Domains`, leave `yourbrand.com` pointed at Vercel (primary domain stays with the storefront), and use `checkout.yourbrand.com` as the **checkout subdomain** if Shopify Plus, or as the **shop domain** on lower plans.

    > Note: on Basic Shopify, the checkout domain handling is limited compared to Shopify Plus. Customers may briefly see `*.myshopify.com`. That's normal and not a dealbreaker for testing — fix it later.
3. **Required policy pages** (Shopify will refuse to take live payments without these):
    - Shopify admin → `Settings → Policies` — generate **Refund**, **Privacy**, **Terms of Service**, **Shipping** policies. Shopify has auto-generated templates. Use them, edit lightly.
4. **Set up shipping rates**: `Settings → Shipping and delivery → Manage rates` — flat-rate is easiest to start. Free shipping over $50 is a common conversion trigger.

---

## Part 7 — Fill in the Lorem ipsum text (Claude does the writing)

**Why**: All long-form copy on the two pages is placeholder. Your friends need to fill it in with real, brand-appropriate copy. This is what `CONTENT_HANDOFF.md` is for — that file is written so you can hand it to a fresh Claude session and it'll know exactly what to do.

**Workflow**:

1. Open Claude Code (or claude.ai) in the project folder.
2. Type:
   > "Read `CONTENT_HANDOFF.md` and follow the instructions. Use the brand voice and product details I'm about to give you."
3. Then describe your brand in 4–6 bullets:
    - Product name + what it is
    - 3 problems it solves
    - 3 ingredients/features and what they do
    - Brand voice (friendly? clinical? bold?)
    - 1–2 sample customer wins (only ones you can substantiate)
4. Claude will edit each `Lorem ipsum` block in `Section2.tsx`, `Section3.tsx`, and `src/components/product/PSection*.tsx` and replace them with your copy.
5. Review every page after — Claude can write plausible-sounding claims that you can't actually back up. Edit anything you can't prove.

> ⚠️ **FTC rules on health claims**: if you can't prove a claim with evidence, don't make it. "Helps support digestion" is softer than "cures bloating." Have Claude err toward soft claims.

---

## Part 8 — Connect Stripe to Shopify checkout

**Why**: Stripe is the payment processor. Without it, customers can't pay.

1. **Create a Stripe account** at https://stripe.com.
2. **Fill out business details** — Stripe needs: legal business name, address, EIN/tax ID (if US), bank account for payouts, ID verification. This takes 1–3 days to approve fully.
3. **Connect to Shopify**:
    - Shopify admin → `Settings → Payments → Add payment methods` → **Shopify Payments** (this uses Stripe under the hood for most regions).
    - If Shopify Payments isn't available in your region: `Add payment provider → search "Stripe" → connect`.
4. **Stay in test mode initially**: in Shopify → `Settings → Payments → Manage` → toggle **Enable test mode** ON. This lets you click through checkout with test card `4242 4242 4242 4242` and see orders without actually charging anyone. Use this for QA.
5. **Disable real payments for the funnel-test phase** (Step 9 below):

### Part 9 — Run the funnel without taking real payments

You want to send paid traffic and measure how many people **reach the checkout**, without taking real money until you're confident the experience works.

Two ways to do it:

**Option 1 (recommended): Stripe Test Mode**
- Keep test mode ON in Shopify (Part 8 step 4). Real cards will be declined. You still see "reached checkout" events in Shopify analytics and the ad pixels (Part 10).
- Add a banner on the checkout: Shopify → `Settings → Checkout → Order processing → After an order is paid` won't help here, but you can add a notice via the checkout customization theme settings.

**Option 2: Cash on Delivery only**
- Shopify → `Settings → Payments → Manual payment methods → Add manual payment method → Cash on Delivery`.
- Disable all real card processors.
- Orders will come in marked "Pending" — you fulfill or cancel them.

**Track the funnel**: install the Shopify analytics + Meta Pixel + TikTok Pixel (Part 10) so you can see `View Page → Add to Cart → Reach Checkout → Purchase` numbers even when "Purchase" is 0 by design.

---

## Part 10 — Source product videos for ads

> ⚠️ **Critical**: do **NOT** download other creators' TikTok videos and re-upload them as your ads. That's copyright infringement, against TikTok's ad policies, and is a top reason new accounts get banned within a week.

**The legal ways to get video creative**:

1. **TikTok Spark Ads** (best for beginners):
    - Find a TikTok creator who has already posted a video about a similar product.
    - DM them: offer $50–200 to repost the video on their account (or pay them to make a new one) AND give you the **video code** (TikTok → original post → … → Share → Ad settings → Authorize → copy code).
    - In TikTok Ads Manager you paste that code and promote their original post as your ad. The video stays on their account, you pay for the views. Cleanest, most compliant, often highest performing.
2. **Hire UGC creators**: platforms like Billo, Insense, Backstage, JoinBrands. You ship them the product, they ship you 3–5 raw videos at ~$80–150 each. You own the rights.
3. **Use TikTok Creative Center** (https://ads.tiktok.com/business/creativecenter) to study what's working in your niche. **Look only — don't download.** Use it for inspiration for the videos you commission.
4. **Make them yourself**: a friend with a phone and decent lighting can shoot 5 ad variants in an hour. Hooks are 80% of the work — Claude can write you 20 hooks to test.

Ask Claude:
> "I'm running a [product type] ad on TikTok. Write me 15 different 3-second video hooks, plus a 30-second voiceover script for each one. The product solves [problem]. The target audience is [audience]."

---

## Part 11 — TikTok Ads

1. **Create a TikTok Ads Manager account** at https://ads.tiktok.com → **Sign up**.
2. **Region matters**: when creating the account, set **Business location** to United States (or wherever you want to advertise). **Currency** matters too — pick USD if billing in USD.
3. **Verify the business**: TikTok needs business name, address, tax ID. Without verification, ads spend caps at ~$20/day.
4. **Install the TikTok Pixel on your site**:
    - TikTok Ads Manager → `Assets → Events → Web Events → Create Pixel` → pick **Shopify** as platform if your traffic goes to Shopify, or **Manual setup** for the Vercel site.
    - For the Vercel site: it gives you a code snippet. Ask Claude:
      > "Install this TikTok Pixel script in the Next.js app. The pixel ID is XXXX. Track these events: ViewContent on `/product`, AddToCart on the Add-to-Cart button click, InitiateCheckout when someone goes to the Shopify checkout."
    - Also install on the Shopify side: Shopify → `Online Store → Themes → Edit code → theme.liquid` → paste before `</head>`. Or use the **TikTok for Business** Shopify app, which auto-installs.
5. **Set up a campaign**:
    - **Campaign objective**: pick **Website Conversions** (later, once pixel has data) or **Traffic** (early, to test creative cheap).
    - **Budget**: $50–100/day per ad set is plenty for testing. Don't go to $200/day until one ad shows promise.
    - **Audience targeting**: location = USA. Age = 25–55 (or whatever your product is for). **Leave interests broad** — TikTok's algorithm performs better with broad targeting than narrow.
    - **Placement**: TikTok only (uncheck Pangle, BuzzVideo, etc. — those are cheap junk traffic).
    - **Optimization goal**: if Traffic campaign → Landing Page Views. If Conversions → Complete Payment (but you need pixel data first, so start with Traffic or AddToCart).
6. **Creative**: upload 3–5 different videos per ad set. TikTok will auto-pick winners.
7. **Destination URL**: **send traffic to `https://yourbrand.com/` (the landing page)**, not `/product`. The landing page warms cold traffic; the product page closes warm traffic.
8. **Tracking URL parameters**: add `?utm_source=tiktok&utm_medium=cpc&utm_campaign={campaign_name}&utm_content={ad_name}` to the destination URL so you can see in analytics which ad converted.
9. **Run for 3 days minimum** before judging — TikTok's algorithm needs 48–72 hours to find the right audience.

**Daily routine while ads are live**:
- Check Ads Manager once per morning. Look at: CPM (cost per 1k views), CTR (click-through rate), CPC (cost per click).
- Healthy ranges for ecommerce: CPM $5–15, CTR 1–3%, CPC $0.50–2.00.
- If CTR < 0.5%, the creative is bad. Kill it, try new hooks.
- If CTR is good but CPC is high, your audience is competitive. Try different audiences.

---

## Part 12 — Facebook / Instagram Ads (fallback)

If TikTok doesn't work after spending ~$300–600 across a few creative variants, test Meta. Same videos work — just upload them as 9:16 vertical to both Reels placements.

1. **Create a Meta Business Account** at https://business.facebook.com. If you already have a personal Facebook, use that to log in.
    - Buying aged "warmed up" Meta accounts is a common workaround in the affiliate-marketing world, but it violates Meta's ToS and gets accounts banned. Use a real account.
2. **Add a Page** (Meta requires every ad account to be tied to a Facebook Page). Make one for your brand.
3. **Create an Ad Account** under Business Settings → Ad Accounts → Add → Create New.
4. **Install the Meta Pixel** on your site — same drill as TikTok pixel:
    - Ask Claude:
      > "Install the Meta Pixel script on the Next.js site. The pixel ID is XXXX. Fire `ViewContent` on `/product`, `AddToCart` on the cart button, `InitiateCheckout` when navigating to Shopify checkout."
    - Plus the Meta app on Shopify for the back-end events.
5. **Create a campaign**:
    - **Objective**: **Sales** (Meta's algorithm is strong on this — but needs ~50 purchases/week to optimize fully). Start with **Traffic** if you're under that volume.
    - **Audience**: USA, 25–55, **Advantage+ targeting** (Meta's auto-targeting). Don't manually narrow — Meta is best when given freedom.
    - **Placements**: Reels + Stories + Feed. Skip Audience Network.
    - **Budget**: $50–100/day to start.
6. **Creative**: same TikTok-style vertical videos work on Reels. Repurpose, change the first 2 seconds to match Reels norms (less choppy than TikTok).
7. **Destination**: again, `https://yourbrand.com/` (landing page first).
8. **Run 3+ days** before judging.

---

## Appendix A — Daily/weekly checklist

**Daily** (5 min):
- Open Vercel, Shopify, Ads Manager. Glance at each.
- Reply to customer emails.

**Weekly** (1 hour):
- Pull the funnel report: how many landing visits → product visits → add to carts → checkouts → orders.
- Pick the single weakest step. Improve it (new hook, new product page section, new CTA copy, etc.).
- Kill ads with CTR < 0.5%. Test 3 new creatives.

---

## Appendix B — When you're stuck, give Claude this

Copy-paste any of these to a Claude session:

- "I'm on Part X step Y of the tutorial. I see [screen]. What do I click?"
- "My TikTok ad has CPM $30, CTR 0.3%. What does that mean and what should I change?"
- "Shopify is asking me for [thing]. Here's what's on the screen. Walk me through."
- "Read `CONTENT_HANDOFF.md` and fill in the placeholder text for `/product`. My product is [description]."

---

## Appendix C — Common failure modes

| Symptom | Cause | Fix |
|---|---|---|
| Ad accounts banned in week 1 | Re-uploaded someone else's video, or made unsubstantiated health claims | Original creative + soft claims (Part 7, 10) |
| 0 sales after $500 spent | Bad creative, not bad product | Test 5 new video hooks before touching anything else |
| Checkout abandonment >85% | Slow page load, shipping cost surprise at checkout, untrusted brand | Speed up Vercel + show shipping cost early + add trust badges |
| High traffic, 0 add-to-carts | Product page CTA isn't compelling | Stronger hero, social proof above the fold, urgency element |
| Sales come in then Shopify cancels | Stripe still in test mode | Part 8 step 4 — flip OFF test mode when ready for real money |

Good luck. Build slow, measure everything, kill what doesn't work.
