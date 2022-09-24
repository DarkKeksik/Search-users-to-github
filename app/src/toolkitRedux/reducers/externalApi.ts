import { createSlice } from '@reduxjs/toolkit'
import { getAccessTokenLS } from '../../utils/localstorage'

type TypeInitialState = {
  users: Array<any>
  accessToken: string
}

const initialState: TypeInitialState = {
  users: [],
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
    }
  }
})

export default reducerExternalApi.reducer
export const { setUsersToolkit, setTokenToolkit } = reducerExternalApi.actions