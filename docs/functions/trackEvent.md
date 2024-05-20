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

[index.ts:76](https://github.com/binjamil/matomo-client/blob/b4505de54b50c9fbd5eed98005227d63fa764d63/src/index.ts#L76)
