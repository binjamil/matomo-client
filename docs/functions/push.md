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

[index.ts:97](https://github.com/binjamil/matomo-client/blob/417fd16ac77407d41cce9a0e7a537ca37a9a6c3d/src/index.ts#L97)
