# @suin/google-cloud-typed-pubsub-function

Strongly typed Google Cloud Function interface of the Pub/Sub handler for TypeScript.

## Installation

```bash
yarn add @suin/google-cloud-typed-pubsub-function
# or
npm install @suin/google-cloud-typed-pubsub-function
```

## Usage

```typescript
import { PubSubFunction } from '@suin/google-cloud-typed-pubsub-function'

export const receiveEvent: PubSubFunction = (event, context) => {
  event.data // string
  event.attributes // null or object
  context.eventType // string
  context.eventId // string
  context.timestamp // string
}
```

## API Reference

https://suin.github.io/google-cloud-typed-pubsub-function/
