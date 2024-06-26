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

[index.ts:21](https://github.com/binjamil/matomo-client/blob/b4505de54b50c9fbd5eed98005227d63fa764d63/src/index.ts#L21)
