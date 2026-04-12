# WeightWise Health

Evidence-based hormone optimization and longevity medicine platform.

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- next-intl (i18n - EN/ES/PT)

## Deploy to Vercel

### Option 1: Direct Deploy (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import this repository
4. Click "Deploy"
5. Done! Site will be live in 2-3 minutes

### Option 2: Connect Custom Domain (weightwisehealth.com)

After deploy:
1. Go to project settings in Vercel
2. Domains → Add Domain
3. Enter: weightwisehealth.com
4. Follow DNS configuration instructions
5. Add these records to your DNS:
   - A record: @ → 76.76.21.21
   - CNAME record: www → cname.vercel-dns.com

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Features

- ✅ Multilingual (EN/ES/PT)
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Medical disclaimer on all pages
- ✅ Newsletter signup
- ✅ Blog with categories
- ✅ Article templates

## Structure

```
/src
  /app
    /[locale]          # Localized routes
      /blog            # Blog pages
      page.tsx         # Homepage
  /components          # Reusable components
  /messages            # i18n translations (en.json, es.json, pt.json)
```

## License

© 2026 WeightWise Health. All rights reserved.

