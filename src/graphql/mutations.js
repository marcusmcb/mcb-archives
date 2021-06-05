/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createArchiveItem = /* GraphQL */ `
  mutation CreateArchiveItem(
    $input: CreateArchiveItemInput!
    $condition: ModelArchiveItemConditionInput
  ) {
    createArchiveItem(input: $input, condition: $condition) {
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
export const updateArchiveItem = /* GraphQL */ `
  mutation UpdateArchiveItem(
    $input: UpdateArchiveItemInput!
    $condition: ModelArchiveItemConditionInput
  ) {
    updateArchiveItem(input: $input, condition: $condition) {
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
export const deleteArchiveItem = /* GraphQL */ `
  mutation DeleteArchiveItem(
    $input: DeleteArchiveItemInput!
    $condition: ModelArchiveItemConditionInput
  ) {
    deleteArchiveItem(input: $input, condition: $condition) {
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
