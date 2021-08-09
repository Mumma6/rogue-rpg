/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemovePost
// ====================================================

export interface RemovePost_removePost {
  __typename: "Post";
  title: string | null;
  _id: string | null;
}

export interface RemovePost {
  removePost: RemovePost_removePost | null;
}

export interface RemovePostVariables {
  id: string;
}
