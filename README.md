# Matomo Client

A framework-agnostic JavaScript client for [Matomo analytics](https://matomo.org/).

### Installation

```
npm install @mbinjamil/matomo-client
```

## Motivation

The standard installation flow for Matomo is to add a script tag in your HTML, which automatically records a page view when loaded. This is not suitable for single-page applications, like React, Next.js and many others, where client-side routing takes place. Other Matomo JS libraries are outdated and archived.

Heavily inspired by [fathom-client](https://github.com/derrickreimer/fathom-client), this library provides a simple interface to orchestrate Matomo calls. It features:


- **Asynchronous script loading.** A `load` function that asynchronously injects the Matomo `<script>` tag (great for single-page app environments) and is idempotent (multiple calls to it have no side effects).
- **`import`-able tracking functions.** Tracking functions (`trackPageview` and `trackEvent`) can be imported and safely called anywhere (even if the Matomo script has not yet finished loading).

## Usage

### [API Reference](docs/README.md)

The basic way to use this library to call `load` function when your app first loads (or mounts) and call any tracking functions wherever you want. Ideally you would call `trackPageView` whenever your app changes routes.

Below I've described usage for two popular choices, but you can use it with any frontend library or framework by following the basic principles.

### React Router (or Remix)

Create a new `<Matomo>` component:

```jsx
import { useLocation } from "react-router-dom";
import { load, trackPageView } from "@mbinjamil/matomo-client";
import { useEffect } from "react";

export default function Matomo() {
  const location = useLocation();

  // Load script on mount
  useEffect(() => {
    load("https://mbinjamildev.matomo.cloud/", 1);
  }, []);

  // Track page view on route change
  useEffect(() => {
    trackPageView();
  }, [location.pathname, location.search]);

  return null;
}
```

Then, add the component to the root route or layout:

```jsx
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Matomo from "./Matomo";

export default function Root() {
  return (
    <div>
      <Matomo />
      <Outlet />
    </div>
  );
}
```

### Next.js

Create a new `<Matomo>` client component:

```jsx
"use client"
import { load, trackPageView } from "@mbinjamil/matomo-client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function Matomo() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Load script on mount
  useEffect(() => {
    load("https://mbinjamildev.matomo.cloud/", 1);
  }, []);

  // Track page view on route change
  useEffect(() => {
    trackPageView();
  }, [pathname, searchParams])

  return null
}
```

Then, add the client component to your root `layout.tsx` file:

```tsx
import Matomo from "./Matomo";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Matomo />
        <Page>{children}</Page>
      </body>
    </html>
  );
}
```
