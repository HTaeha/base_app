// Imports: Dependencies
import { combineReducers } from 'redux'
import alarm from './alarm'

// Imports: Reducers
// import authReducer from './authReducer'
// import counterReducer from './counterReducer'
// import loadReducer from './loadReducer'

// Redux: Root Reducer
const rootReducer = combineReducers({
//   authReducer: authReducer,
//   counterReducer: counterReducer,
	//   loadReducer: loadReducer,
	alarm: alarm
})

// Exports
export default rootReducer

export type RootState = ReturnType<typeof rootReducer>