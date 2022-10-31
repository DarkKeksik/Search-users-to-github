import React, { FC, useMemo } from 'react'

import { PaginationProps } from './types'
import * as Styled from './Pagination.styled'

const Pagination: FC<PaginationProps> = ({ totalElements, currentPage, stepRange, onChangePageCustom }) => {
  const totalPages = useMemo<number>(() => {
    return Math.ceil(totalElements / stepRange)
  }, [ totalElements, stepRange ])

  // @TODO need to simplify
  const listOfPages = useMemo(() => {
    switch (currentPage) {
      case 1:
        return [currentPage + 1, currentPage + 2, currentPage + 3]
      case 2:
        return [currentPage, currentPage + 1, currentPage + 2]
      case 3:
        return [currentPage - 1 , currentPage, currentPage + 1, currentPage + 2]
      case totalPages - 1:
        return [currentPage - 2, currentPage - 1, currentPage]
      case totalPages - 2:
        return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1]
      case totalPages:
        return [currentPage - 2, currentPage - 1, currentPage]
      default:
        return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2]
    }
  }, [currentPage, totalElements, stepRange])

  return (
    <Styled.Pagination>
      {currentPage !== 1 && (
        <Styled.PageFirst onClick={() => {
          onChangePageCustom(1)
        }}>1</Styled.PageFirst>
      )}

      <Styled.PagesWrap>
        {listOfPages.map((pageNumber) => (
            <Styled.PageItem isActive={pageNumber === currentPage} key={pageNumber} onClick={() => onChangePageCustom(pageNumber)}>
              { pageNumber }
            </Styled.PageItem>
          )
        )}
      </Styled.PagesWrap>

      {currentPage !== totalPages && (
        <Styled.PageLast onClick={() => onChangePageCustom(totalPages)}>{ totalPages }</Styled.PageLast>
      )}
    </Styled.Pagination>
  )
}

export default Pagination