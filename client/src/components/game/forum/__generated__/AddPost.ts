/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddPost
// ====================================================

export interface AddPost_addPost {
  __typename: "Post";
  title: string | null;
  content: string | null;
  author: string | null;
}

export interface AddPost {
  addPost: AddPost_addPost | null;
}

export interface AddPostVariables {
  title: string;
  content: string;
  author: string;
}
