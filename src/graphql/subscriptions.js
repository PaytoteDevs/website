/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserToken = /* GraphQL */ `
  subscription OnCreateUserToken(
    $filter: ModelSubscriptionUserTokenFilterInput
  ) {
    onCreateUserToken(filter: $filter) {
      id
      userID
      access_token
      refresh_token
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUserToken = /* GraphQL */ `
  subscription OnUpdateUserToken(
    $filter: ModelSubscriptionUserTokenFilterInput
  ) {
    onUpdateUserToken(filter: $filter) {
      id
      userID
      access_token
      refresh_token
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUserToken = /* GraphQL */ `
  subscription OnDeleteUserToken(
    $filter: ModelSubscriptionUserTokenFilterInput
  ) {
    onDeleteUserToken(filter: $filter) {
      id
      userID
      access_token
      refresh_token
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateAuthentications = /* GraphQL */ `
  subscription OnCreateAuthentications(
    $filter: ModelSubscriptionAuthenticationsFilterInput
    $owner: String
  ) {
    onCreateAuthentications(filter: $filter, owner: $owner) {
      id
      Square
      Stripe
      userID
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
      userID
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
      userID
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
