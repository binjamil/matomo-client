declare global {
  interface Window {
    _paq: any[];
  }
}

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
  window._paq.push(["enableLinkTracking"]);
  window._paq.push(["setTrackerUrl", url.href]);
  window._paq.push(["setSiteId", siteId]);

  firstScript.parentNode.insertBefore(tracker, firstScript);
};

export const trackPageView = (pageTitle?: string): void => {
  window._paq.push(["trackPageView", pageTitle]);
};

export const trackEvent = (
  category: string,
  action: string,
  name: string,
  value: number
): void => {
  window._paq.push(["trackEvent", category, action, name, value]);
};
