import {combineReducers, configureStore} from '@reduxjs/toolkit'
import reducerExternalApi  from './reducers/externalApi'

const rootReducer = combineReducers({
  reducerExternalApi
})

const store = configureStore({
  reducer: rootReducer
})

export default store