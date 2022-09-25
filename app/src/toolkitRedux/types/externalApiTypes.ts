export type PaginationDataProps = {
  usersPaginationData: {
    currentPage: number,
    stepRange: number,
    totalPages: number
  }
}

export type InitialStateProps = {
  users: Array<any>
  accessToken: string
} & PaginationDataProps