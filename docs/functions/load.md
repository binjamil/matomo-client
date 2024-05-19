[@mbinjamil/matomo-client](../README.md) / load

# Function: load()

> **load**(`trackerUrl`, `siteId`): `void`

Injects the Matomo tracking script into the DOM and loads it asynchronously.
It is idempotent, i.e. safe to call multiple times, because it will only load the script once

## Parameters

• **trackerUrl**: `string`

Your Matomo URL

• **siteId**: `number`

Site ID of the website you are tracking in Matomo

## Returns

`void`

## Example

```
import { load } from "@mbinjamil/matomo-client";

load("https://your-matomo-url.com", 1);
```

## Source

[index.ts:21](https://github.com/binjamil/matomo-client/blob/417fd16ac77407d41cce9a0e7a537ca37a9a6c3d/src/index.ts#L21)
