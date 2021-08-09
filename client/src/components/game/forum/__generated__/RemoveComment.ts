/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveComment
// ====================================================

export interface RemoveComment_removeComment {
  __typename: "Post";
  content: string | null;
}

export interface RemoveComment {
  removeComment: RemoveComment_removeComment | null;
}

export interface RemoveCommentVariables {
  postId: string;
  commentId: string;
}
