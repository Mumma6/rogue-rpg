import React from 'react'
import { useRender } from '../../../customHooks/useRender'
import CreatePost from './CreatePost'
import PostList from './PostList'
import { useDispatch } from 'react-redux'
import types from '../../../reducers/types'

import { gql, useQuery } from '@apollo/client';

export interface IPost {
  _id: string,
  title: string,
  content: string
  author: string,
  created: string,
  comments?: any[],
}

export const GET_POSTS = gql`
  {
    posts {
      _id
      title
      content
      author
      created
      comments {
        content
        author
        id
      }
    }
  }
`

const ForumLanding = () => {
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(GET_POSTS)

  const defaultToggle = () => setCurrentComponent('default')
  const components = {
    createPost: () => <CreatePost toggle={() => defaultToggle()} />,
    postList: () => <PostList posts={data?.posts} toggle={() => defaultToggle()} />
  }


  const { render, currentComponent, setCurrentComponent } = useRender(
    components,
  )
  return (
    <div className="container">
      <h2 className="my-3">Forum</h2>
      <button
        type="button"
        className="btn btn-info"
        onClick={() =>
          dispatch({
            type: types.INGAME_PAGE,
          })
        }
      >
        <i className="fas fa-arrow-left"></i>
      </button>
      <div className="btn-group" role="group">
      <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCurrentComponent('postList')}
        >
          Show posts
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCurrentComponent('createPost')}
        >
          Create post
        </button>
      </div>
      {render(currentComponent)}
    </div>
  )
}

export default ForumLanding
