import React, { useState, ChangeEvent } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux'
import { State } from '../../../reducers/rootReducer'
import { gql, useMutation } from '@apollo/client'
import { GET_POSTS, IPost } from './ForumLanding'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

const REMOVE_POST = gql`
mutation($id: ID!) {
  removePost(id: $id) {
    title
    _id
  }
}
`

const ADD_COMMENT = gql`
  mutation($id: ID!, $content: String!, $author: String!) {
    addComment(id: $id, content: $content, author: $author) {
      content
      author
    }
  }
`

const REMOVE_COMMENT = gql`
mutation($postId: ID!, $commentId: ID!) {
  removeComment(postId: $postId, commentId: $commentId,) {
    content
  }
}
`

const PostList = ({ posts, toggle }: { posts: IPost[], toggle: () => void }) => {
  const user = useSelector((state: State) => state.app.user)
  const [show, setShow] = useState(false)
  const [comment, setComment] = useState('')
  const [currentPost, setCurrentPost] = useState<IPost | null>(null)
  const [showComments, setShowComments] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [removePost, { data, loading, error }] = useMutation(REMOVE_POST)
  const [removeComment] = useMutation(REMOVE_COMMENT)
  const [addComment] = useMutation(ADD_COMMENT)

  const deletePost = (id: string) => {
    removePost({
      variables: {
        id,
      },
      refetchQueries: [{
        query: GET_POSTS,
      }]
    })
  }

  const deleteComment = (postId: string, commentId: string) => {
    removeComment({
      variables: {
        postId,
        commentId,
      },
      refetchQueries: [{
        query: GET_POSTS,
      }]
    })
  }

  const openModal = (post: IPost) => {
    setCurrentPost(post)
    handleShow()
  }

  const handleShowComments = (post: IPost) => {
    setCurrentPost(post)
    // Ska kunna visa comments från flera posts

    // Knappen ska ändra namn till Hide comments när man togglat den.

    setShowComments(!showComments)
  }

  const saveComment = () => {
    addComment({
      variables: {
        id: currentPost?._id,
        content: comment,
        author: user?.email,
      },
      refetchQueries: [{
        query: GET_POSTS,
      }]
    })
    setComment('')
    handleClose()
  }

  return (
    <div style={{ marginTop: 10 }}>
      <ListGroup>
        {posts?.map((post: IPost) => (
          <ListGroup.Item key={post._id} style={{ marginTop: 10 }}>
            <Card>
              <Card.Body>
                <Card.Title>Title: {post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{post.author}</Card.Subtitle>
                <Card.Text>{post.content}</Card.Text>
              </Card.Body>
            </Card>
            {showComments &&
              post._id === currentPost?._id && post.comments?.map((comment) => (
                <Card style={{ marginTop: 10, marginLeft: 40, marginRight: 40 }} bg="light">
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">{comment.author}</Card.Subtitle>
                    <Card.Text style={{ color: '#202020', marginBottom: 0 }}>{comment.content}</Card.Text>
                    {user?.email === comment.author && <Button
                      style={{ float: 'right' }}
                      type="button"
                      size="sm"
                      className="btn btn-danger"
                      onClick={() => deleteComment(post._id, comment.id)}>X
                    </Button>}
                  </Card.Body>
                </Card>
              ))
            }
            {post?.comments?.length !== 0 && <Button
              style={{ marginTop: 10 }}
              type="button"
              size="sm"
              className="btn btn-info"
              onClick={() => handleShowComments(post)}>
              Show comments
            </Button>}
            <ButtonGroup style={{ float: 'right', marginTop: 10 }}>
              <button
                type="button"
                className="btn btn-info"
                onClick={() => openModal(post)}>
                Add comment
              </button>
              {user?.email === post.author && <button
                type="button"
                className="btn btn-danger"
                onClick={() => deletePost(post._id)}>Delete
              </button>}
            </ButtonGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <input
        style={{ marginTop: 10 }}
        type="button"
        className="btn btn-warning"
        value="Abort"
        onClick={toggle}
      />

      <>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Add comment: {currentPost?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Control
                type="text"
                autoFocus={true}
                placeholder="Comment..."
                name="comment"
                value={comment}
                onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                  setComment(evt.target.value)
                }
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <button type="button"
              className="btn btn-warning" onClick={handleClose}>
              Close
            </button>
            <button type="button"
              className="btn btn-success" onClick={saveComment}>
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>
      </>

    </div>
  )
}

export default PostList
