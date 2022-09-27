import React, { FC, useMemo } from 'react'

import { PaginationProps } from './types'
import * as Styled from './Pagination.styled'

const Pagination: FC<PaginationProps> = ({ totalElements, currentPage, stepRange, onChangePageCustom }) => {
  const totalPages = useMemo<number>(() => {
    return Math.ceil(totalElements / stepRange)
  }, [ totalElements, stepRange ])

  // @ts-ignore & @TODO need to calculate
  const pagesList = useMemo<[number]>(() => {
    return [currentPage]
  }, [currentPage, totalElements, stepRange])

  return (
    <Styled.Pagination>
      { currentPage !== 1 && (
        <Styled.PageFirst onClick={() => {
          onChangePageCustom(currentPage)
        }}>1</Styled.PageFirst>
      )}
      {/*{ currentPage } of { totalPages } pages*/}
      {/*<Styled.PageLast onClick={() => onChangePage(5)}>{ totalPages }</Styled.PageLast>*/}
      { currentPage !== totalPages && (
        <Styled.PageLast onClick={() => onChangePageCustom(totalPages)}>{ totalPages }</Styled.PageLast>
      )}
    </Styled.Pagination>
  )
}

export default Pagination