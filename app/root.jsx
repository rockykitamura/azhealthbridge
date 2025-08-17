import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "./tailwind.css";

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:wght@400;500;600;700;800&display=swap",
  },
];

export const meta = () => {
  return [
    { title: "Arizona Medicare Plans | AZ Health Bridge - Medicare Advantage & Supplement Plans" },
    { name: "description", content: "Find the best Medicare plans in Arizona. Compare Medicare Advantage, Supplement, and Part D plans. Local Arizona Medicare experts serving Phoenix, Tucson, Scottsdale, and all AZ counties." },
    { name: "keywords", content: "Arizona Medicare, Medicare Arizona, Medicare Advantage Arizona, Medicare Supplement Arizona, Medicare Part D Arizona, Phoenix Medicare, Tucson Medicare, Scottsdale Medicare, AZ Medicare plans" },
    { property: "og:title", content: "Arizona Medicare Plans | AZ Health Bridge" },
    { property: "og:description", content: "Expert Medicare guidance for Arizona residents. Compare plans, get quotes, and enroll in Medicare Advantage, Supplement, and Part D plans." },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Arizona Medicare Plans | AZ Health Bridge" },
    { name: "twitter:description", content: "Find the best Medicare plans in Arizona with local experts" },
    { name: "robots", content: "index, follow" },
    { name: "googlebot", content: "index, follow" },
    { name: "geo.region", content: "US-AZ" },
    { name: "geo.placename", content: "Arizona" },
    { name: "geo.position", content: "34.0489;-111.0937" },
    { name: "ICBM", content: "34.0489, -111.0937" },
  ];
};

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="canonical" href="https://www.azhealthbridge.com" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AZ Health Bridge",
              "description": "Arizona Medicare information resource for Medicare Advantage, Medicare Supplement, and Part D plans",
              "url": "https://www.azhealthbridge.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.azhealthbridge.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "areaServed": [
                {
                  "@type": "State",
                  "name": "Arizona"
                }
              ]
            }
          `}
        </script>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
