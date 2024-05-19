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

[index.ts:52](https://github.com/binjamil/matomo-client/blob/0aa0d3c26d26b54fc742897faa51e4fa42a1e734/src/index.ts#L52)
