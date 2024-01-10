/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserToken = /* GraphQL */ `
  mutation CreateUserToken(
    $input: CreateUserTokenInput!
    $condition: ModelUserTokenConditionInput
  ) {
    createUserToken(input: $input, condition: $condition) {
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
export const updateUserToken = /* GraphQL */ `
  mutation UpdateUserToken(
    $input: UpdateUserTokenInput!
    $condition: ModelUserTokenConditionInput
  ) {
    updateUserToken(input: $input, condition: $condition) {
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
export const deleteUserToken = /* GraphQL */ `
  mutation DeleteUserToken(
    $input: DeleteUserTokenInput!
    $condition: ModelUserTokenConditionInput
  ) {
    deleteUserToken(input: $input, condition: $condition) {
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
export const createAuthentications = /* GraphQL */ `
  mutation CreateAuthentications(
    $input: CreateAuthenticationsInput!
    $condition: ModelAuthenticationsConditionInput
  ) {
    createAuthentications(input: $input, condition: $condition) {
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
export const updateAuthentications = /* GraphQL */ `
  mutation UpdateAuthentications(
    $input: UpdateAuthenticationsInput!
    $condition: ModelAuthenticationsConditionInput
  ) {
    updateAuthentications(input: $input, condition: $condition) {
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
export const deleteAuthentications = /* GraphQL */ `
  mutation DeleteAuthentications(
    $input: DeleteAuthenticationsInput!
    $condition: ModelAuthenticationsConditionInput
  ) {
    deleteAuthentications(input: $input, condition: $condition) {
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
