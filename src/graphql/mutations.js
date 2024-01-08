/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAuthentications = /* GraphQL */ `
  mutation CreateAuthentications(
    $input: CreateAuthenticationsInput!
    $condition: ModelAuthenticationsConditionInput
  ) {
    createAuthentications(input: $input, condition: $condition) {
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
export const updateAuthentications = /* GraphQL */ `
  mutation UpdateAuthentications(
    $input: UpdateAuthenticationsInput!
    $condition: ModelAuthenticationsConditionInput
  ) {
    updateAuthentications(input: $input, condition: $condition) {
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
export const deleteAuthentications = /* GraphQL */ `
  mutation DeleteAuthentications(
    $input: DeleteAuthenticationsInput!
    $condition: ModelAuthenticationsConditionInput
  ) {
    deleteAuthentications(input: $input, condition: $condition) {
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
