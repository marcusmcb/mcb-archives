/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArchiveItem = /* GraphQL */ `
  query GetArchiveItem($id: ID!) {
    getArchiveItem(id: $id) {
      id
      title
      description
      moreInfo
      filePath
      category
      createdAt
      updatedAt
    }
  }
`;
export const listArchiveItems = /* GraphQL */ `
  query ListArchiveItems(
    $filter: ModelArchiveItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArchiveItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        moreInfo
        filePath
        category
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
