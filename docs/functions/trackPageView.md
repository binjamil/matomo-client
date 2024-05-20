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

## Example

```
import { trackPageView } from "@mbinjamil/matomo-client";

trackPageView();
```

## Source

[index.ts:56](https://github.com/binjamil/matomo-client/blob/b4505de54b50c9fbd5eed98005227d63fa764d63/src/index.ts#L56)
