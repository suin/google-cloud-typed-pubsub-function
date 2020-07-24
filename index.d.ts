export type PubSubFunction = (
  event: {
    /**
     * A base64-encoded string.
     */
    readonly data: string
    readonly attributes: null | { readonly [k: string]: string }
  },
  context: {
    readonly eventId: string
    readonly timestamp: string
    readonly eventType: string
  },
) => void | Promise<void>
