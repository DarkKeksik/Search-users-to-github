export type PaginationDataProps = {
  usersPaginationData: {
    currentPage: number,
    stepRange: number,
    totalPages: number
  }
}

export type InitialStateProps = {
  searchLogin?: string
  users: Array<any>
  accessToken: string
} & PaginationDataProps