import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import type {LinksFunction} from '@shopify/remix-oxygen';
import reviveLandingStyles from './styles/revive-landing.css?url';

export const links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: reviveLandingStyles}];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
