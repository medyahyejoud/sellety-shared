import { SHOPIFY_ORDER_FRAGMENT } from "../fragments";

export const SHOPIFY_GET_ORDER = /* GraphQL */ `
  query getOrder($id: ID!, $locale: LanguageCode)
  @inContext(language: $locale) {
    node(id: $id) {
      ... on Order {
        ...Order
      }
    }
  }

  ${SHOPIFY_ORDER_FRAGMENT}
`;