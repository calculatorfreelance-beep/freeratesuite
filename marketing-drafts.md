# FreeRateSuite — Marketing Content Drafts

**Website:** https://freeratesuite.com  
**Product:** Free freelance hourly rate calculator (no signup required)

---

## 1. Reddit Post Drafts

---

### Draft A — r/freelance

**Title:** I built a free tool that calculates your ideal freelance hourly rate — no signup, no email, just your numbers

**Post body:**

Hey r/freelance,

Like many of you, I struggled with pricing when I first started freelancing. I'd pick a random number, cross my fingers, and hope it covered my taxes, expenses, and the weeks where client work was slow.

So I built a tool that does the math properly: **FreeRateSuite** (https://freeratesuite.com).

You enter:
- Your desired annual salary
- Business expenses (software, insurance, equipment)
- Taxes (estimate or actual rate)
- Billable hours per week / realistic utilization

It outputs your minimum viable hourly rate — and what you'd need to charge to hit different income targets.

**No signup. No email. No tracking. Just a calculator.**

It's open-source, client-side only, and your data never touches a server.

Would love feedback from this community — especially if you think I've missed any costs that freelancers regularly forget to factor in.

**Comment strategy:**
- Reply to every comment within the first 2–3 hours to build engagement
- Ask follow-ups: "What do you typically forget to include in your rate?" or "What's your current method for calculating rates?"
- If someone criticizes a missing feature, agree and say "great idea — I'll add that" (and actually track it)
- Avoid linking the tool more than once unless asked; let the URL sit naturally in the post body
- If someone asks "who is this for?" — answer: "any freelancer, but especially those just starting out who have no idea what to charge"

---

### Draft B — r/webdev

**Title:** Rate calculator for frontend/dev freelancers — preloaded with salary data per specialization

**Post body:**

I got tired of telling junior devs "just charge $X" without any data behind it.

So I built **FreeRateSuite** (https://freeratesuite.com) — a freelance hourly rate calculator that comes preloaded with median salary data for frontend, backend, full-stack, mobile, and DevOps roles. Pick your specialization, and the salary field auto-fills with a realistic market figure.

From there, the calculator works the same way:
- Add your expenses (hosting, SaaS tools, hardware depreciation, etc.)
- Set your tax rate and desired billable utilization
- Get your break-even hourly rate instantly

Some specifics for devs:
- You can set billable utilization anywhere from 20%–100% — useful if you're mixing freelance with a day job
- All calculations run in your browser — nothing is sent anywhere
- It's a static site, so it loads instantly and works offline after the first visit

Curious what rate range this community lands on. If you're comfortable sharing, what's your current hourly rate and specialisation?

**Comment strategy:**
- Engage with salary discussions — this is the hook for r/webdev
- If someone questions the salary data source, be transparent: "I used BLS / Glassdoor / Levels.fyi medians — each specialisation page links to the source. If you have better data for a specific region, PRs welcome (it's open source)."
- Ask for feature requests specific to devs (e.g., "should I add contractor tax deductions like Section 179?")
- Be ready for "yet another rate calculator" skepticism — lean on "no signup" and "preloaded dev salaries" as differentiators

---

### Draft C — r/copywriting

**Title:** Rate calculator for writers and copywriters — accounts for research time, revisions, and client management overhead

**Post body:**

One thing that always bugged me about freelance rate calculators: they assume 100% of your billable hours is spent actually doing the work. Any writer knows that's not reality.

Research, revisions, client calls, proposal writing, invoicing — that stuff eats hours.

So I built **FreeRateSuite** (https://freeratesuite.com) with a few things specifically for writers:
- **Non-billable overhead toggle** — add a percentage for admin/client management time
- **Revision buffer** — estimate how many rounds of revisions you typically do and how long they take
- **Research time** — factor in pre-writing research as a separate line item (or as a % of project time)
- **Per-project view** — see what your hourly rate translates to as a per-project price for common deliverables (blog posts, landing pages, email sequences)

The calculator is free, requires no account, and runs entirely in your browser.

If you're a copywriter: what's the one cost you think most calculators miss? For me, it's the "context switching tax" of juggling 3–4 clients in a day.

**Comment strategy:**
- Writers love talking about pricing philosophy — lean into that
- Follow up on the context-switching tax point: "how do you account for switching between clients in your rates?"
- If someone asks about value-based pricing vs hourly, be honest: "this tool is for rate calculation, but I'd love to hear how you structure value-based quotes — I'm considering adding a project-based pricing mode"
- Share specific examples: e.g., "At $XX/hr and 20% overhead, that blog post you quoted at $500 is actually closer to..."
- Avoid over-promoting — this subreddit is suspicious of "builders." Lead with empathy for the pricing struggle.

---

## 2. Product Hunt Launch Draft

**Tagline (under 60 chars):**  
Your ideal freelance rate, calculated in 30 seconds. No signup.

**Subtitle (under 120 chars):**  
Free, open-source hourly rate calculator for freelancers — enter expenses, taxes, and billable hours. Get your rate instantly. No email required.

---

### Full Description (~400 words, founder-story style)

Last year, a friend asked me what she should charge as a freelance designer. I gave her the usual advice: "Figure out your expenses, add taxes, divide by billable hours." She came back an hour later with a spreadsheet that had seven tabs, one broken formula, and a headache.

I told her there had to be a better way. So I built one.

**FreeRateSuite** started as a weekend project — a single-page tool that takes the guesswork out of freelance pricing. You land on the page, enter four numbers (salary, expenses, tax rate, billable hours), and get your minimum hourly rate instantly. No account creation, no email capture, no "start your free trial" upsell. Just a calculator that works.

The idea is simple: every freelancer should know their floor. Not what the market "bears" or what a client "might pay" — but the minimum number you need to charge to keep your business running, pay your taxes, and not burn out.

Since that first version, FreeRateSuite has grown into something more comprehensive. There are now specialization profiles (frontend dev, copywriter, designer, consultant — each with pre-loaded market rate data), a tax estimator that handles both self-employment and LLC structures, and a utilization tracker that helps you understand how much of your time is actually billable.

What I'm most proud of: it's fully client-side. Every calculation happens in your browser. Your financial data never touches a server, never gets logged, and never gets sold. In an industry where "free" tools often mean "you are the product," this one truly isn't.

I've also open-sourced the entire codebase. If you want to audit the math, add a localization for your country's tax system, or just fork it and host your own version — you're welcome to.

The tool is live at **https://freeratesuite.com** — no signup, no strings.

I'd love for this community to try it, break it, and tell me what's missing. I'm actively building new features based on feedback, and there's a lot more coming.

If you're freelancing and you've never actually calculated your minimum viable rate — today's a good day to find out.

---

### First Comment (Maker Comment — 2–3 paragraphs)

Hey Product Hunt! 👋

I'm the maker of FreeRateSuite. I built this because I watched too many talented freelancers undercharge themselves into burnout — including myself, at one point.

The core idea is simple: give freelancers a tool that calculates their actual minimum hourly rate without any friction. No signup forms, no "we'll email you the results," no upsells. You type in your numbers, you get your rate. That's it. I've open-sourced the whole thing so anyone can audit exactly how the math works, and I'm actively adding more specialization profiles and tax localization based on feedback.

I'd love to hear what you think — especially if you're currently freelancing and have a sense of what other calculators get wrong. What's the one expense or factor you always have to manually account for? Drop it in the comments and I'll consider adding it to the next release. Thanks for checking it out!

---

### 5 Key Features

1. **Instant rate calculation** — Enter salary, expenses, taxes, and billable hours; get your break-even hourly rate in real time
2. **Specialization profiles** — Pre-loaded salary data for frontend dev, backend dev, designer, copywriter, consultant, and more
3. **No signup, no tracking** — Fully client-side JavaScript; your data never leaves your browser
4. **Tax-aware estimates** — Handles self-employment tax, LLC taxation, and marginal tax brackets
5. **Open source** — Full codebase on GitHub; community contributions welcome for new specializations and tax regions

---

### 3 "What Makes This Different" Points vs Competitors (Bonsai, Clockify, etc.)

| FreeRateSuite | Bonsai / Clockify / Others |
|---|---|
| **Zero signup friction** — Land on the page, get your rate. No account, no email, no credit card. | Require account creation before you can use the calculator — designed to capture leads, not to help first. |
| **Fully transparent math** — Open source, client-side only, no data collection. You can inspect every line of code. | Closed-source; unclear how rates are calculated or whether your inputs are tracked/ monetized. |
| **Specialization-first design** — Pre-loaded salary data for specific roles (frontend, copywriting, design, etc.) so you don't start from zero. | Generic calculators — one-size-fits-all with no role-specific defaults. You're expected to know your market rate before you start. |

---

### Suggested Topics / Tags for Product Hunt

- Freelancing
- Productivity
- Open Source
- SaaS
- Pricing
- Web App
- Calculators
- Side Project
- Developer Tools
- Independent Work

---

## 3. Backlink Outreach Email Template

---

### Subject Line Options

1. **Free tool for your readers: a no-signup freelance rate calculator**  
2. **A resource your freelance audience will actually use (+ it's free, no signup)**  
3. **Quick question: do you have a page for freelance pricing tools?**

---

### Email Body (~200 words)

Hi [Name],

I'm reaching out because I built a free tool that might be a good fit for your [blog post / resource page] on freelance pricing or starting a freelance business.

**FreeRateSuite** (https://freeratesuite.com) is an hourly rate calculator for freelancers. You enter your desired salary, business expenses, tax rate, and billable hours — and it instantly shows you the minimum rate you need to charge.

A few things that make it useful as a resource for your readers:
- **No signup or email required** — visitors land, calculate, and leave. No lead capture, no tracking.
- **Client-side only** — all data stays in the browser. Privacy-friendly by design.
- **Specialization profiles** — pre-loaded market rates for developers, designers, writers, and consultants.
- **Open source** — the math is transparent and auditable.

If this seems useful, here are a few natural places it could fit:
- A "freelance tools" roundup
- A "how to set your rates" guide
- A "start freelancing" resource page

Suggested link text: **"Free freelance hourly rate calculator — no signup needed"** or **"FreeRateSuite — calculate your ideal freelance rate"**

Happy to provide an excerpt, screenshot, or additional details if helpful.

Either way — keep up the great content.

Best,
[Your Name]

---

### Suggested Link Placement Text Options

1. `Free freelance hourly rate calculator — no signup needed` (best for tool roundups)
2. `FreeRateSuite — calculate your ideal freelance rate` (best for standalone mentions)
3. `FreeRateSuite: a no-strings-attached freelance rate calculator` (best for resource lists)

---

## 4. Google Search Console Setup Instructions

---

### Step-by-Step: How to Verify & Submit FreeRateSuite to Google Search Console

#### Step 1 — Go to Google Search Console
Visit **https://search.google.com/search-console** and sign in with your Google account (Gmail / Google Workspace).

#### Step 2 — Add Your Property
- Click **"Add property"**
- Select the **"URL prefix"** method
- Enter: **`https://freeratesuite.com`**
- Click **"Continue"**

#### Step 3 — Verify Ownership
Google offers several verification methods. Choose **one** of the following:

**Option A — HTML File Upload (Recommended for static sites)**
1. Download the HTML verification file Google provides (named something like `googleXXXXXX.html`)
2. Upload it to the root directory of `https://freeratesuite.com` (the same directory as your `index.html`)
3. Click **"Verify"**
4. *Leave the file in place — Google checks periodically*

**Option B — DNS TXT Record (Recommended if you use Cloudflare, Netlify, or Vercel)**
1. From the verification options, select **"DNS TXT record"**
2. Copy the TXT record value Google provides
3. Go to your domain registrar or DNS provider (Cloudflare, Namecheap, etc.)
4. Add a new TXT record:
   - **Name/Host:** `@` or leave blank (depending on provider)
   - **Value:** (paste the copied TXT record)
   - **TTL:** 3600 (or default)
5. Wait 5–10 minutes for DNS propagation, then click **"Verify"**

**Option C — Google Analytics / Google Tag Manager (If already installed)**
- If you already have GA4 or GTM installed on the site, use the respective verification method — Google will detect the existing snippet.

#### Step 4 — Submit Your Sitemap
1. Once verified, go to the **"Sitemaps"** section in the left sidebar
2. In the **"Enter sitemap URL"** field, type: **`https://freeratesuite.com/sitemap.xml`**
3. Click **"Submit"**
4. After a few minutes, check the status — it should show **"Success"** (a green checkmark)
5. Google will now start crawling and indexing your pages based on the sitemap

*If you don't have a `sitemap.xml` file yet, create one (many static site generators generate this automatically, or use a tool like XML-Sitemaps.com). Upload it to your site root.*

#### Step 5 — Request Indexing for the Homepage
1. In Search Console, use the URL Inspection tool (search bar at the top)
2. Enter: **`https://freeratesuite.com`**
3. Wait for Google to check the URL
4. If it says **"URL is not on Google"**, click **"Request Indexing"**
5. If it says **"URL is on Google"**, you're already indexed — no action needed
6. Repeat for any other key pages (e.g., `/app`, `/about`, individual specialization pages)

#### Optional Next Steps
- **Monitor performance** — Check the "Performance" report in Search Console after 1–2 weeks to see impressions, clicks, and average position
- **Check for errors** — The "Coverage" report will show any indexing issues (404s, soft 404s, etc.)
- **Submit updates** — Whenever you add new pages or content, use the URL Inspection tool to request indexing individually

---

*Generated for FreeRateSuite (https://freeratesuite.com)*
