import { SHOPIFY_ADDRESS_FRAGMENT } from "../fragments/address-fragment";
import { SHOPIFY_CUSTOMER_USER_ERROR_FRAGMENT } from "../fragments/customer-user-error-fragment";

export const SHOPIFY_UPDATE_CUSTOMER_ADDRESS_MUTATION = /* GraphQL */ `
  mutation customerAddressUpdate(
    $address: MailingAddressInput!
    $customerAccessToken: String!
    $id: ID!
    $locale: LanguageCode
  ) @inContext(language: $locale) {
    customerAddressUpdate(
      address: $address
      customerAccessToken: $customerAccessToken
      id: $id
    ) {
      customerAddress {
        ...AddressFragment
      }
      customerUserErrors {
        ...CustomerUserErrorFragment
      }
    }
  }

  ${SHOPIFY_ADDRESS_FRAGMENT}
  ${SHOPIFY_CUSTOMER_USER_ERROR_FRAGMENT}
`;
