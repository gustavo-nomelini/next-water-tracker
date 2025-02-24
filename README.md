This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Colaborando!

## Initial Setup:

```

yarn create next-app name-of-your-app
yarn add --dev prettier prettier-plugin-tailwindcss

touch .prettier
{
"plugins": ["prettier-plugin-tailwindcss"]
}

yarn add @headlessui/react
yarn add @heroicons/react


```

## Folder Structure for Next.js APP

```

water-tracker/
│── public/ # Static assets (icons, images, etc.)
│── src/
│ ├── app/ # Next.js App Router (Routing)
│ │ ├── api/ # API Routes (Server Actions)
│ │ │ ├── water/ # API for logging water consumption
│ │ │ ├── users/ # API for user authentication
│ │ ├── dashboard/ # Dashboard page
│ │ │ ├── page.tsx # Dashboard main component
│ │ ├── history/ # Water consumption history page
│ │ │ ├── page.tsx # History page
│ │ ├── settings/ # User settings (goal, notifications)
│ │ │ ├── page.tsx # Settings page
│ │ ├── layout.tsx # Main layout (navbar, sidebar)
│ │ ├── page.tsx # Home page (Landing page)
│ │ ├── loading.tsx # Loading state (Suspense fallback)
│ │ ├── error.tsx # Error boundary for app
│ ├── components/ # Reusable UI components
│ │ ├── ui/ # Generic UI components (Button, Card, etc.)
│ │ ├── layout/ # Layout components (Header, Sidebar, etc.)
│ │ ├── dashboard/ # Components specific to dashboard
│ │ ├── tracking/ # Components for water tracking
│ │ ├── charts/ # Components for progress visualization
│ │ ├── forms/ # Form-related components
│ │ ├── notifications/ # Notifications and reminders
│ ├── hooks/ # Custom React hooks
│ ├── lib/ # Utilities (helpers, fetchers, etc.)
│ ├── context/ # Global context providers (User, Theme, etc.)
│ ├── styles/ # Tailwind & global styles
│ ├── types/ # TypeScript interfaces & types
│ ├── utils/ # Helper functions (date formatting, etc.)
│── .env.local # Environment variables
│── package.json # Dependencies and scripts
│── tailwind.config.js # Tailwind CSS configuration
│── tsconfig.json # TypeScript configuration
│── yarn.lock # Yarn dependency lock file
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
