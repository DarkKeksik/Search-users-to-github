import React, {FC, useEffect, useMemo, useState} from 'react'

import { PaginationProps } from './types'
import * as Styled from './Pagination.styled'
import { useDebounce } from "../../utils/hooks";

const Pagination: FC<PaginationProps> = ({ totalElements, currentPage, stepRange, onChangePage }) => {
  const totalPages = useMemo<number>(() => Math.ceil(totalElements / stepRange), [totalElements, stepRange])
  const [pageActive, setPageActive] = useState(currentPage)
  const pageActiveDebounce = useDebounce(pageActive, 300)

  const getPagesList: Array<number> = useMemo(() => {
    switch (pageActive) {
      case 1:
        return [pageActive, pageActive + 1, pageActive + 2]
      case 2:
        return [pageActive, pageActive + 1, pageActive + 2]
      case 3:
        return [pageActive - 1 , pageActive, pageActive + 1, pageActive + 2]
      case totalPages - 1:
        return [pageActive - 2, pageActive - 1, pageActive]
      case totalPages - 2:
        return [pageActive - 2, pageActive - 1, pageActive, pageActive + 1]
      case totalPages:
        return [pageActive - 2, pageActive - 1, pageActive]
      default:
        return [pageActive - 2, pageActive - 1, pageActive, pageActive + 1, pageActive + 2]
    }
  }, [pageActive, totalElements, stepRange])

  // Dispatch from parent a current page with debounce
  useEffect(() => {
    onChangePage(pageActive)
  }, [pageActiveDebounce])

  return (
    <Styled.Pagination>
      {pageActive !== 1 && <Styled.PageFirst onClick={() => setPageActive(1)}>1</Styled.PageFirst>}

      <Styled.PagesWrap>
        {getPagesList.map((pageNumber) => (
          <Styled.PageItem
            isActive={pageNumber === pageActive}
            key={pageNumber}
            onClick={() => setPageActive(pageNumber)}
          >
            { pageNumber }
          </Styled.PageItem>
        ))}
      </Styled.PagesWrap>

      {pageActive !== totalPages && (
        <Styled.PageLast onClick={() => setPageActive(totalPages)}>{ totalPages }</Styled.PageLast>
      )}
    </Styled.Pagination>
  )
}

export default Pagination