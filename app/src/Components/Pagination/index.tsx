import React, { FC, useMemo } from 'react'

import { PaginationProps } from './types'
import * as Styled from './Pagination.styled'

const Pagination: FC<PaginationProps> = ({ totalElements, currentPage, stepRange }) => {
  const totalPages = useMemo<number>(() => {
    return Math.ceil(totalElements / stepRange)
  }, [ totalElements, stepRange ])

  // @ts-ignore & @TODO need to calculate
  const pagesList = useMemo<[number]>(() => {
    return [1]
  }, [currentPage, totalElements, stepRange])

  return (
    <Styled.Pagination>
      { currentPage } of { totalPages } pages
    </Styled.Pagination>
  )
}

export default Pagination