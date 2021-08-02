import React, { FormEvent, ChangeEvent, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { State } from '../../../reducers/rootReducer'
import { gql, useMutation } from '@apollo/client';
import { GET_POSTS } from './ForumLanding'

const ADD_POST = gql`
  mutation($title: String!, $content: String!, $author: String!) {
    addPost(title: $title, content: $content, author: $author) {
      title
      content
      author
    }
  }
`;

const CreatePost = ({ toggle }: any) => {
  const [addPost, { data, loading, error }] = useMutation(ADD_POST)
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const user = useSelector((state: State) => state.app.user)

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
  
    addPost({
      variables: {
        title,
        content,
        author: user?.email,
      },
      refetchQueries: [{
        query: GET_POSTS,
      }]
    })

    setTitle('')
    setContent('')
  }

  if (error) {
    console.log(error)
  }

  return (
    <div className="container-fluid" style={{ marginTop: 20 }}>
      <h2>Create a post</h2>
      <Form
        className="form"
        onSubmit={(evt: FormEvent<HTMLFormElement>) => handleSubmit(evt)}
      >
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title..."
            name="title"
            value={title}
            onChange={(evt: ChangeEvent<HTMLInputElement>) =>
              setTitle(evt.target.value)
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea" rows={3} 
            type="text"
            placeholder="Content..."
            name="content"
            value={content}
            onChange={(evt: ChangeEvent<HTMLInputElement>) =>
              setContent(evt.target.value)
            }
          />
        </Form.Group>
        <input
          type="submit"
          className="btn btn-success"
          value="Save post"
        />
        <input
          type="button"
          className="btn btn-warning"
          value="Abort"
          onClick={toggle}
        />
      </Form>
    </div>
  )
}

export default CreatePost
