declare global {
  interface Window {
    _paq: any[];
  }
}

/**
 * Injects the Matomo tracking script into the DOM and loads it asynchronously
 *
 * @param trackerUrl - Your Matomo URL
 * @param siteId - Site ID of the website you are tracking in Matomo
 */
export const load = (trackerUrl: string, siteId: number): void => {
  let tracker = document.createElement("script");
  let firstScript =
    document.getElementsByTagName("script")[0] ||
    document.querySelector("body");

  const url = new URL(trackerUrl);
  const cdn = new URL(url.host, "https://cdn.matomo.cloud");
  cdn.pathname += "/matomo.js";
  tracker.src = cdn.href;
  tracker.async = true;

  url.pathname = "/matomo.php";
  window._paq = window._paq || [];
  push(["enableLinkTracking"]);
  push(["setTrackerUrl", url.href]);
  push(["setSiteId", siteId]);

  firstScript.parentNode.insertBefore(tracker, firstScript);
};

/**
 * Logs a page view. The URL is set to `window.location.href` because Matomo
 * by default does not support client-side routing
 *
 * @param pageTitle - A custom title that overrides the default HTML page title
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
