import { createSlice } from '@reduxjs/toolkit'

type TypeInitialState = { users: Array<any> }

const initialState: TypeInitialState = { users: [] }

const reducerExternalApi = createSlice({
  name: 'externalApiReducer',
  initialState,
  reducers: {
    setUsersToolkit(state, action) {
      state.users = action.payload
    }
  }
})

export default reducerExternalApi.reducer
export const { setUsersToolkit } = reducerExternalApi.actions