export type PaginationDataProps = {
  usersPaginationData: {
    currentPage: number,
    stepRange: number,
    totalPages: number
  }
}

export type InitialStateProps = {
  searchLogin?: string
  selectedLogin?: string
  users: Array<any>
  isLoadingUsers: boolean
  accessToken: string
  errorGithub: {[key: string]: string} | null
} & PaginationDataProps