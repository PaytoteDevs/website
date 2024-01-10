/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserToken = /* GraphQL */ `
  query GetUserToken($id: ID!) {
    getUserToken(id: $id) {
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
export const listUserTokens = /* GraphQL */ `
  query ListUserTokens(
    $filter: ModelUserTokenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserTokens(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        access_token
        refresh_token
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAuthentications = /* GraphQL */ `
  query GetAuthentications($id: ID!) {
    getAuthentications(id: $id) {
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
export const listAuthentications = /* GraphQL */ `
  query ListAuthentications(
    $filter: ModelAuthenticationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthentications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Square
        Stripe
        userID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
