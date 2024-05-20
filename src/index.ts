declare global {
  interface Window {
    _paq: any[];
  }
}

/**
 * Injects the Matomo tracking script into the DOM and loads it asynchronously.
 * It is idempotent, i.e. safe to call multiple times, because it will only load the script once
 *
 * @param trackerUrl - Your Matomo URL
 * @param siteId - Site ID of the website you are tracking in Matomo
 *
 * @example
 * ```
 * import { load } from "@mbinjamil/matomo-client";
 *
 * load("https://your-matomo-url.com", 1);
 * ```
 */
export const load = (trackerUrl: string, siteId: number): void => {
  if (window._paq) {
    return;
  }

  let tracker = document.createElement("script");
  tracker.src = "https://cdn.matomo.cloud/matomo.js";
  tracker.async = true;

  const url = new URL(trackerUrl);
  url.pathname = "/matomo.php";
  window._paq = window._paq || [];
  push(["enableLinkTracking"]);
  push(["setTrackerUrl", url.href]);
  push(["setSiteId", siteId]);

  let firstScript =
    document.getElementsByTagName("script")[0] ||
    document.querySelector("body");
  firstScript.parentNode.insertBefore(tracker, firstScript);
};

/**
 * Logs a page view. The URL is set to `window.location.href` because Matomo
 * by default does not support client-side routing
 *
 * @param pageTitle - A custom title that overrides the default HTML page title
 *
 * @example
 * ```
 * import { trackPageView } from "@mbinjamil/matomo-client";
 *
 * trackPageView();
 * ```
 */
export const trackPageView = (pageTitle?: string): void => {
  push(["setCustomUrl", window.location.href]);
  push(["trackPageView", pageTitle]);
};

/**
 * Logs an event of interest
 *
 * @param category - An event category (Videos, Music, Games...)
 * @param action - An event action (Play, Pause, Duration, Add Playlist, Downloaded, Clicked...)
 * @param name - An optional event name
 * @param value - An optional numeric value
 *
 * @example
 * ```
 * import { trackEvent } from "@mbinjamil/matomo-client";
 *
 * trackEvent("ecommerce", "checkout", "total_amount", 1010);
 * ```
 */
export const trackEvent = (
  category: string,
  action: string,
  name: string,
  value: number
): void => {
  push(["trackEvent", category, action, name, value]);
};

/**
 * Low-level Matomo API to execute any supported configuration or tracking calls
 * @see https://developer.matomo.org/api-reference/tracking-javascript
 *
 * @param values - An array defining API method name and its parameters
 *
 * @example
 * push([ 'API_method_name', parameter_list ]);
 */
export const push = (values: ReadonlyArray<string | number>): void => {
  window._paq.push(values);
};
