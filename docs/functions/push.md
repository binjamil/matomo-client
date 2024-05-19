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

[index.ts:83](https://github.com/binjamil/matomo-client/blob/0aa0d3c26d26b54fc742897faa51e4fa42a1e734/src/index.ts#L83)
