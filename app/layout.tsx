import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import SiteHeader from './components/site-header';
import SiteFooter from './components/site-footer';
import { portfolio } from './content/portfolio';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(portfolio.domain),
  title: {
    default: 'Leo Sharif — Math, Finance & Computer Science',
    template: '%s · Leo Sharif',
  },
  description:
    'The personal portfolio of Leo Sharif. Mathematics, finance, ' +
    'computer science, and a little more on the other side.',
  openGraph: {
    title: 'Leo Sharif',
    description:
      'Math, finance, computer science. There’s more than one side to me.',
    type: 'website',
    locale: 'en_AU',
    siteName: 'Leo Sharif',
  },
};

// Set the saved theme before paint; no remote font or theme library required.
const themeScript = `
  (function () {
    var root = document.documentElement;
    var systemTheme = matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

    try {
      var savedTheme = localStorage.getItem('leo-portfolio-theme');
      root.dataset.theme = savedTheme === 'light' || savedTheme === 'dark'
        ? savedTheme
        : systemTheme;
    } catch (error) {
      root.dataset.theme = systemTheme;
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="site-shell">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
