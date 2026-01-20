# Academic Email Assistant

A minimal, professional SaaS application for university professors to manage academic email overload through rule-based draft suggestions.

## Features

- **Email Draft Generation**: Create draft email replies based on rules you define
- **Full Control**: All emails are drafts only — nothing is auto-sent
- **Academic Focus**: Designed specifically for faculty and researchers
- **Privacy First**: Your data is processed securely
- **Simple Pricing**: $7/month with 3-day free trial

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Authentication**: Supabase (magic link)
- **Payments**: Stripe
- **Backend**: n8n workflows
- **Validation**: Zod
- **Design**: Custom CSS (academic, minimal aesthetic)

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn
- Supabase account
- Stripe account (test mode)
- n8n instance

### Environment Setup

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your credentials:
   - Supabase: Create a project at supabase.com
   - Stripe: Get test keys from stripe.com/dashboard
   - n8n: Set up your n8n webhooks

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Supabase Setup

You'll need to create the following tables in Supabase:

#### users table (extends auth.users)
```sql
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  email TEXT NOT NULL,
  stripe_customer_id TEXT,
  subscription_status TEXT DEFAULT 'trial',
  subscription_id TEXT,
  trial_ends_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### user_rules table
```sql
CREATE TABLE public.user_rules (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users NOT NULL,
  rules JSONB NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);
```

### Stripe Setup

1. Get your API keys from Stripe Dashboard
2. Set up webhook endpoint: `/api/stripe-webhook`
3. Listen for events:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`

### n8n Setup

Create workflows for:
1. **Sync Rules** - Receives user preferences
2. **Fetch Drafts** - Returns email drafts for user
3. **Send Notifications** - Notifies app of new drafts

Set the webhook URLs in your `.env.local` file.

## Project Structure

```
├── app/                    # Next.js app router
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication callbacks
│   │   ├── n8n/           # n8n integration
│   │   ├── checkout/      # Stripe checkout
│   │   ├── portal/        # Stripe portal
│   │   └── stripe-webhook/ # Stripe webhooks
│   ├── dashboard/         # Protected dashboard pages
│   ├── login/             # Login page
│   ├── pricing/           # Pricing page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── globals.css        # Academic design system
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   └── ErrorBoundary.tsx
├── lib/                   # Utilities
│   ├── supabase.ts       # Supabase client
│   ├── stripe.ts         # Stripe integration
│   ├── n8n.ts            # n8n integration
│   └── validations.ts    # Zod schemas
└── middleware.ts          # Route protection
```

## Security Features

- Input validation with Zod schemas
- CSRF protection (Next.js built-in)
- Webhook signature verification (Stripe & n8n)
- Protected API routes
- Error boundaries for graceful failures
- Environment variable security
- TypeScript for type safety

## Design Philosophy

This application follows strict academic design principles:

- **Calm**: No animations or flashy visuals
- **Professional**: Serif fonts, minimal color palette
- **Trustworthy**: Clear language, no marketing hype
- **Human-made**: Feels like a university portal, not a startup

## License

Proprietary - All rights reserved

## Support

For questions or issues:
- Email: support@academicemailassistant.com
- Privacy: privacy@academicemailassistant.com
- Terms: terms@academicemailassistant.com
