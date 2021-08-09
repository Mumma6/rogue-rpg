/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, ChangeEvent, useEffect, KeyboardEvent } from 'react'
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
import PaginationComp from './PaginationComp'

const REMOVE_POST = gql`
mutation RemovePost($id: ID!) {
  removePost(id: $id) {
    title
    _id
  }
}
`

const ADD_COMMENT = gql`
  mutation AddComment($id: ID!, $content: String!, $author: String!) {
    addComment(id: $id, content: $content, author: $author) {
      content
      author
    }
  }
`

const REMOVE_COMMENT = gql`
mutation RemoveComment($postId: ID!, $commentId: ID!) {
  removeComment(postId: $postId, commentId: $commentId,) {
    content
  }
}
`

interface PostItem extends IPost {
  showComments?: boolean
}


const PostList = ({ posts, toggle }: { posts: IPost[], toggle: () => void }) => {
  const user = useSelector((state: State) => state.app.user)

  // Modal stuff
  const [show, setShow] = useState(false)
  const [comment, setComment] = useState('')
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [currentPost, setCurrentPost] = useState<PostItem | null>(null)
  const [postItems, setPostItems] = useState<PostItem[]>(posts)

  // Pagination stuff
  const [currentPage, setCurrentPage] = useState<number>(1) as [number, (num: number) => number]
  const [postsPerPage, setPostsPerPage] = useState(4)

  const [removePost] = useMutation(REMOVE_POST)
  const [removeComment] = useMutation(REMOVE_COMMENT)
  const [addComment] = useMutation(ADD_COMMENT)

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postItems.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number): number => setCurrentPage(pageNumber);

  const sortByCreated = (a: PostItem, b: PostItem) => {
    // Need to type convert from string to any. "Cant perform metric operation on strings"
    const toDate = (string: string) => new Date(string) as unknown as number
    return toDate(b.created) - toDate(a.created);
  }

  useEffect(() => {
    const mergeObj = (obj: PostItem) => {
      const prev = postItems.find((i) => i._id === obj._id)
      return {
        ...prev,
        ...obj,
      }
    }

    const toggleComments = (obj: PostItem) => {
      const merged = mergeObj(obj)
      return {
        ...merged,
        showComments: merged?.showComments === undefined ? false : merged?.showComments
      } as PostItem
    }
    setPostItems([...posts]?.sort(sortByCreated).map((post) => toggleComments(post)))
  }, [posts])

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

  const handleShowComments = (post: PostItem) => {
    const selectedPost = postItems.find((p) => p._id === post._id) as PostItem
    const toggleComments = (obj: PostItem) => ({
      ...obj,
      showComments: obj?.showComments === undefined ? true : !obj?.showComments
    })
    const withComment = toggleComments(selectedPost)
    const filteredPostItems = postItems.filter((item) => item._id !== withComment._id)
    const newPostItems = [...filteredPostItems, withComment].sort(sortByCreated)
    setPostItems(newPostItems)
  }

  const saveComment = () => {
    if (comment) {
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
  }

  const handleKeyPress = (evt: KeyboardEvent) => {
    if (evt.key === 'Enter') {
      saveComment()
    }
  }

  return (
    <div style={{ marginTop: 10 }}>
      <ListGroup>
        {currentPosts?.map((post: PostItem) => (
          <ListGroup.Item key={post._id} style={{ marginTop: 10 }}>
            <Card>
              <Card.Body>
                <Card.Title>Title: {post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{post.author}</Card.Subtitle>
                <Card.Text>{post.content}</Card.Text>
              </Card.Body>
            </Card>
            {post.showComments && post.comments?.map((comment) => (
              <Card key={comment.id} style={{ marginTop: 10, marginLeft: 40, marginRight: 40 }} bg="light">
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
              {post.showComments ? 'Hide comments' : `Show comments: ${post.comments?.length}`}
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
      <PaginationComp
        postsPerPage={postsPerPage}
        totalPosts={postItems.length}
        paginate={paginate}
        currentPage={currentPage}
      />
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
                onKeyPress={(evt: KeyboardEvent) => handleKeyPress(evt)}
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


/*
Wish list

Implement search function sometime

<Form.Group>
        <Form.Control
          type="text"
          placeholder="Search for post"
          onChange={(evt: ChangeEvent<HTMLInputElement>) => filteredPosts(evt)}
        />
      </Form.Group>

 const oldPosts = useRef(postItems)

  const filteredPosts = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.currentTarget
    setSearchValue(value)
    if (searchValue === '' || !value) {
      setPostItems(oldPosts.current)
    }
    else {
      // gör till en generisk func
      const mergeObj = (obj: PostItem) => {
        const prev = postItems.find((i) => i._id === obj._id)
        return {
          ...prev,
          ...obj,
        }
      }

      const toggleComments = (obj: PostItem) => {
        const merged = mergeObj(obj)
        return {
          ...merged,
          showComments: merged?.showComments === undefined ? false : merged?.showComments
        } as PostItem
      }

      const f = [...posts]?.sort((a, b) => b.created.localeCompare(a.created)).map((post) => toggleComments(post))

      console.log(f)

      setPostItems(f?.filter((post: PostItem) => post.title.toLowerCase().includes(searchValue.toLowerCase())))
    }
  }


*/