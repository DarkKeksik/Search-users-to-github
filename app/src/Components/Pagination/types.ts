export type PaginationProps = {
  totalElements: number
  currentPage: number
  stepRange: number
  onChangePage: (pageCurrent: number) => void
}