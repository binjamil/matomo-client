[@mbinjamil/matomo-client](../README.md) / trackEvent

# Function: trackEvent()

> **trackEvent**(`category`, `action`, `name`, `value`): `void`

Logs an event of interest

## Parameters

• **category**: `string`

An event category (Videos, Music, Games...)

• **action**: `string`

An event action (Play, Pause, Duration, Add Playlist, Downloaded, Clicked...)

• **name**: `string`

An optional event name

• **value**: `number`

An optional numeric value

## Returns

`void`

## Example

```
import { trackEvent } from "@mbinjamil/matomo-client";

trackEvent("ecommerce", "checkout", "total_amount", 1010);
```

## Source

[index.ts:79](https://github.com/binjamil/matomo-client/blob/6ed3beaf3789c86fc90228d391fdeedb61a3c1c6/src/index.ts#L79)
