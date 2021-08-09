/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPosts
// ====================================================

export interface GetPosts_posts_comments {
  __typename: "Comment";
  content: string | null;
  author: string | null;
  id: string | null;
}

export interface GetPosts_posts {
  __typename: "Post";
  _id: string | null;
  title: string | null;
  content: string | null;
  author: string | null;
  created: string | null;
  comments: (GetPosts_posts_comments | null)[] | null;
}

export interface GetPosts {
  posts: (GetPosts_posts | null)[] | null;
}
