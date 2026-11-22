# TMT Solutions: AI document extraction and client intake demos

**Live:** [tmt-demo.vercel.app](https://tmt-demo.vercel.app)

A Next.js app that shows two practical AI workflows for small professional-services firms (law, medical, accounting),
behind a company landing page.

## Demos

**1. Document extraction** (`/extract`)
- Drop in PDFs, text or CSV files (up to 20 per batch, 10 MB each) and pick a document type: invoice, contract, lease,
  patient intake form, insurance claim, purchase order, employment agreement or NDA.
- The model returns every key field as structured JSON: parties, dates, amounts, terms, identifiers.
- Download the results as an Excel workbook. Several files download together as a single zip.
- Choose the provider per run: **Claude** (PDFs sent natively as documents) or **OpenAI**.

**2. Client intake chatbot** (`/intake`)
- A conversational intake assistant for three verticals: **law firm**, **medical practice** and **CPA firm**.
- It asks the right questions for that vertical, then fills a structured intake form live as you talk.
- Each vertical has its own field schema (name, contact details, case type, dates, description…).

## Built for public traffic

- **Prompt-injection defence:** the extraction rules live in the system prompt, separate from document content, and the
  model is told never to follow instructions found inside a document.
- **Upload validation:** extension and MIME allow-lists, PDF magic-byte check, size and batch limits, filename
  sanitising.
- **Rate limiting** per IP (30 per minute, 300 per day) with LRU caches.
- **Retry with backoff** on provider rate limits.
- **Security headers,** including a Content-Security-Policy and `nosniff`.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Anthropic SDK · OpenAI SDK · ExcelJS · JSZip ·
pdf.js · Vercel

## Run it locally

```bash
npm install
# .env.local
#   ANTHROPIC_API_KEY=...
#   OPENAI_API_KEY=...
npm run dev        # http://localhost:3000
```

| Route | Purpose |
|---|---|
| `/` | Landing page |
| `/extract` | Document extraction demo (`src/app/api/extract`) |
| `/intake` | Intake chatbot demo (`src/app/api/chat`; verticals in `src/lib/intake-schemas.ts`) |

---
Built by [TMT Solutions](https://tmtsolutions.tech).
