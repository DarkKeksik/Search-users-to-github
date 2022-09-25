import { createSlice } from '@reduxjs/toolkit'
import { getAccessTokenLS } from '../../utils/localstorage'
import { InitialStateProps } from '../types/externalApiTypes'

const initialState: InitialStateProps = {
  users: [],
  usersPaginationData: {
    currentPage: 1,
    stepRange: 5,
    totalPages: null
  },
  accessToken: getAccessTokenLS
}

const reducerExternalApi = createSlice({
  name: 'externalApiReducer',
  initialState,
  reducers: {
    setUsersToolkit(state, action) {
      state.users = action.payload
    },
    setTokenToolkit(state, action) {
      state.accessToken = action.payload
    },
    setPaginationCurrentPage(state, action) {
      state.usersPaginationData.currentPage = action.payload
    },
    setPaginationTotalPages(state, action) {
      state.usersPaginationData.totalPages = action.payload
    }
  }
})

export default reducerExternalApi.reducer

export const {
  setUsersToolkit, setTokenToolkit,
  setPaginationCurrentPage, setPaginationTotalPages
} = reducerExternalApi.actions