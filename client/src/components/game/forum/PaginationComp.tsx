import { useState, useEffect, useCallback } from 'react'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'

interface IProps {
  postsPerPage: number,
  totalPosts: number,
  paginate: (num: number) => number,
  currentPage: number,
}

const PaginationComp = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: IProps) => {
  const [pageNumbers, setPageNumbers] = useState<number[]>([])

  const getPageNumbers = useCallback((num: number = 1, nums: number[] = []): number[] => {
    if (num <= Math.ceil(totalPosts / postsPerPage)) {
      nums.push(num)
      return getPageNumbers(num + 1, nums);
    } else {
      return nums
    }
  }, [postsPerPage, totalPosts])

  useEffect(() => {
    setPageNumbers(getPageNumbers())
  }, [getPageNumbers])

  return (
    <Pagination style={{ marginTop: 10 }}>
      <Pagination.First onClick={() => paginate(1)} />
      <Pagination.Prev disabled={currentPage === 1} onClick={() => paginate(currentPage - 1)} />
      {pageNumbers.map((number) => (
        <PageItem key={number} onClick={() => paginate(number)} active={number === currentPage}>
          {number}
        </PageItem>
      ))}
      <Pagination.Next disabled={currentPage === pageNumbers.length} onClick={() => paginate(currentPage + 1)} />
      <Pagination.Last onClick={() => paginate(pageNumbers.length)}  />
    </Pagination>
  )
}

export default PaginationComp
