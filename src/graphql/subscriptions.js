/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAuthentications = /* GraphQL */ `
  subscription OnCreateAuthentications(
    $filter: ModelSubscriptionAuthenticationsFilterInput
    $owner: String
  ) {
    onCreateAuthentications(filter: $filter, owner: $owner) {
      id
      Square
      Stripe
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateAuthentications = /* GraphQL */ `
  subscription OnUpdateAuthentications(
    $filter: ModelSubscriptionAuthenticationsFilterInput
    $owner: String
  ) {
    onUpdateAuthentications(filter: $filter, owner: $owner) {
      id
      Square
      Stripe
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteAuthentications = /* GraphQL */ `
  subscription OnDeleteAuthentications(
    $filter: ModelSubscriptionAuthenticationsFilterInput
    $owner: String
  ) {
    onDeleteAuthentications(filter: $filter, owner: $owner) {
      id
      Square
      Stripe
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
