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

[index.ts:59](https://github.com/binjamil/matomo-client/blob/417fd16ac77407d41cce9a0e7a537ca37a9a6c3d/src/index.ts#L59)
