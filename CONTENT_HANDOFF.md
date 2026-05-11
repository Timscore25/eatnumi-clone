# Content Handoff — For a Future Claude Session

This file tells Claude how to fill in the placeholder text across the two pages in this project. If you're a human reading this, hand it to Claude with one sentence: **"Read CONTENT_HANDOFF.md and follow the instructions."**

---

## What you're filling in

Every long string of `Lorem ipsum dolor sit amet…` on the pages below is a placeholder. Your job is to replace each with brand-appropriate copy of similar visual length.

**Files to edit** (in order):

1. `src/components/Section1.tsx` — top announcement bar (1 placeholder)
2. `src/components/Section2.tsx` — landing page body (5 reasons, FAQ, reviews, sale pamphlet, footer)
3. `src/components/Section3.tsx` — landing page tail (newsletter, search preview, cart drawer)
4. `src/components/product/PSection1.tsx` through `PSection14.tsx` — product page sections (announcement bar, hero, buy box, reasons, FAQ, reviews, comparison table, footer)

---

## Required input from the human before you start

If the human hasn't given you this, **stop and ask for it**:

1. **Product name** (e.g. "Acme Glow Sticks")
2. **What it is** in one sentence (e.g. "a chewable supplement for daily energy")
3. **Three problems it solves** (e.g. afternoon slump, sugar cravings, skipped meals)
4. **Three core ingredients/features** + a sentence each on what each does
5. **Brand voice**: pick one — `friendly & casual`, `clinical & evidence-based`, `bold & confrontational`, `warm & maternal`, or describe your own
6. **One or two real customer wins** they're comfortable claiming
7. **Compliance constraints**: are they avoiding any specific claim language? (most common: no "cures", "treats", "guaranteed weight loss")

---

## Rules of replacement

**KEEP** (don't touch):
- All JSX structure, classNames, styles, image URLs, component names, variable names.
- Short functional UI labels under ~5 words: button labels ("Shop Now", "Add to Cart"), prices, structural labels ("Reviews", "FAQ", "Cart", "Total"), numeric data ("Day 1", "92%").
- The `'use client'` directives.
- Image `alt` text — but feel free to improve specificity ("Product image" → "Acme Glow Sticks 30-day supply").

**REPLACE** (with real copy of similar length):
- Every `Lorem ipsum` string in JSX text nodes.
- Every `Lorem ipsum` string inside `const` arrays/objects used for FAQ items, reviews, ingredient lists, milestone lists, stat cards.
- Headings that say things like "Lorem Ipsum Dolor Sit Amet" — replace with section headings matching the brand and section purpose.
- Reviewer names like `Reviewer A`, `Reviewer B` — replace with realistic first-name + last-initial pairs (e.g. "Sarah K.", "Jamie P."). Do **NOT** invent customers who don't exist — use generic-sounding names and a `* names changed for privacy` disclaimer at the bottom of the reviews section if the human hasn't given you real testimonials.
- Generic strings like "Brand Name", "Featured Product", "Featured Product Name", "Our Product" — replace with the actual product/brand name.

**MATCH visual length**: if the original placeholder was 3 sentences, your replacement should be roughly 3 sentences. Don't blow up the layout with a paragraph where a line is expected, or vice versa.

---

## Section-by-section guidance

### Landing page = `/`

The landing page is article-style. It should feel like a problem-aware piece of content, not a sales page. The buyer reads it, gets convinced, then clicks through to the product page.

**Section1.tsx (announcement bar)**:
- The "LIMITED TIME OFFER" heading + "SHOP NOW" button + countdown timer.
- Replace `LIMITED TIME OFFER` with a short promo (e.g. "20% OFF — ENDS TONIGHT"). Keep ≤5 words.

**Section2.tsx (5 reasons body)**:
- **Hero**: replace the H1 (currently "5 Reasons To Choose Our Featured Product") with the brand's actual hook. Format: `5 Reasons [target audience] Are Choosing [Brand] Over [alternative]`. Keep it punchy.
- **Author byline**: "By Author" — replace with a real or pen-name author. Add "Last updated [today's date]" — keep that, just update the date.
- **Summary callout (pink box)**: 3–4 sentences summarizing what the article will prove.
- **Each of the 5 Reasons sections**:
    - H2 heading: "X. [Benefit]" — short, concrete, benefit-driven.
    - Body paragraph(s): explain the problem, then the solution, then a proof point. Reference one of the three ingredients/features per reason.
    - The timeline cards (Day 1 / Week 1 / Month 1 / Month 3): what does the user feel at each milestone? Be honest — soft claims, not miracles.
    - The ingredient cards in Reason 2: replace `Ingredient One/Two/Three/Four` with real ingredient names + 1–2 sentences each.
    - The bullet list in Reason 3: 4 differentiators vs. competing solutions.
    - The stat cards in Reason 4 (92%, 90%, 87%, 84%): replace the description strings (`lorem ipsum dolor sit amet*`) with what the percentage actually represents. Add a footnote about the data source. **If you don't have data, change the percentages to softer language like "Most customers report…"**
    - The testimonials: ask the human for 2 real ones. If they have none, use the names provided but write extremely conservative statements like "I've been using this for 3 months and feel great about my routine."
- **90-Day Guarantee section**: replace with whatever guarantee they're actually offering (Shopify defaults: 30 days). Don't claim 90 if it's 30.
- **Sale Pamphlet ("Buy 2 Get 4 Free")**: keep the structure, but only claim the deal that's actually configured in Shopify.
- **Reviews Wall**: 17 review cards. For each, replace the `LOREM_*` constants with one real review sentence per length category, then assign them to the array. **Do not invent personal anecdotes the customer didn't actually write.**
- **Footer**: 4 columns. Replace the menu items + contact info + newsletter copy.

**Section3.tsx (tail)**:
- The newsletter popup is set to closed by default — set the `useState` to `true` after editing if you want it to auto-open (recommended for email capture).
- Newsletter heading: a single benefit-led line ("Get 10% off your first order").
- Search preview products: 4 cards. Replace `Product A/B/C/D` with real product titles + prices.
- Cart drawer: mostly UI labels. Leave alone unless rebranding.

### Product page = `/product`

The product page is conversion-focused. Reader is warm, ready to buy. Focus on: product details, ingredients, social proof, FAQ objections, guarantee.

**PSection1.tsx**: another announcement bar — same treatment as the landing page's.

**PSection2.tsx** (hero + buy box — the most important file):
- Product H1: replace "Featured Product Name" with the actual product name.
- Pricing variants (1-pack / 2-pack / 3-pack): keep the variant structure, update labels and price strings to match what's set up in Shopify.
- FAQ accordion: 5 items. Real Q&A.
- Ingredient grid: real ingredients + claims you can substantiate.
- Comparison block ("Modern Wellness Crisis"): two-column problem/solution.

**PSection3.tsx — PSection5.tsx**: image grid + manifesto + marquee — replace headings and short body paragraphs.

**PSection6.tsx**: site header — update nav labels to match your real site structure.

**PSection7.tsx**: cookie banner + countdown — replace promo text. The cookie banner copy should mention your actual privacy policy URL.

**PSection8.tsx**: comparison table — fill in the 10 row pairs with real competitor comparisons. Be careful: don't name competitors by trademark if making negative claims. Use "Other Brands" or "Typical Supplements".

**PSection9.tsx**: 3-card testimonial grid — same testimonial rules as the landing page.

**PSection10.tsx**: real results stats — same rules as the stat cards on the landing page. Replace fake percentages with soft language unless backed by data.

**PSection11.tsx**: FAQ + 90-day banner — 12 generic FAQ items to replace. Common ones: "When will I see results?", "Is it safe with X medication?" (always answer: "consult your doctor"), "What if I don't love it?", shipping, returns.

**PSection12.tsx**: small repeat of the guarantee banner.

**PSection13.tsx**: footer. Real contact email, real social handles.

**PSection14.tsx**: utilities + closed popup. Same notes as Section3.

---

## Workflow

1. Confirm you have the required inputs (the 7 items above).
2. Read all the files in order — get the full picture before editing.
3. Edit one file at a time. After each, run `grep -n "Lorem ipsum\|Lorem Ipsum" path/to/file.tsx` — should return zero hits when done.
4. Don't change image URLs. The human will replace them with their own product photos separately.
5. When all files are done, summarize for the human:
    - How many strings you replaced
    - Any claims you softened (and why)
    - Any places you flagged that need their personal input (e.g., real testimonials, real ingredient evidence)

---

## Things you must NOT do

- Don't invent specific customer stories. Use generic positive language unless given a real testimonial.
- Don't make claims of cure, treatment, or guaranteed outcomes for health/wellness products.
- Don't name competing brands negatively without confirming the comparison is accurate.
- Don't add new sections, new images, or new components. Replace text only.
- Don't change the technical structure (JSX, hooks, imports, exports).
- Don't remove the `'use client'` directives.

When in doubt: write conservatively and add a `// TODO: human review` comment above the change. The human can iterate.
