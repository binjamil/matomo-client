[@mbinjamil/matomo-client](../README.md) / trackPageView

# Function: trackPageView()

> **trackPageView**(`pageTitle`?): `void`

Logs a page view. The URL is set to `window.location.href` because Matomo
by default does not support client-side routing

## Parameters

• **pageTitle?**: `string`

A custom title that overrides the default HTML page title

## Returns

`void`

## Source

[index.ts:40](https://github.com/binjamil/matomo-client/blob/ffe9db3ab8b729a706d4a5e6374173837f833606/src/index.ts#L40)
