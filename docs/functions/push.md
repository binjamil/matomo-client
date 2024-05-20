[@mbinjamil/matomo-client](../README.md) / push

# Function: push()

> **push**(`values`): `void`

Low-level Matomo API to execute any supported configuration or tracking calls

## Parameters

• **values**: readonly (`string` \| `number`)[]

An array defining API method name and its parameters

## Returns

`void`

## See

https://developer.matomo.org/api-reference/tracking-javascript

## Example

```ts
push([ 'API_method_name', parameter_list ]);
```

## Source

[index.ts:94](https://github.com/binjamil/matomo-client/blob/b4505de54b50c9fbd5eed98005227d63fa764d63/src/index.ts#L94)
