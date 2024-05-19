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

[index.ts:71](https://github.com/binjamil/matomo-client/blob/ffe9db3ab8b729a706d4a5e6374173837f833606/src/index.ts#L71)
