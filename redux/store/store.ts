// import { createStoreHook } from 'react-redux'
// import storage from "redux-persist/lib/storage"

// export const config = {
// 	key: 'root',
// 	storage: storage,
// 	blacklist: [],
// 	transforms: [TransformCredentials]
// }

// Imports: Dependencies
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createStore, applyMiddleware, $CombinedState, CombinedState } from 'redux'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer, PersistConfig } from 'redux-persist'
import thunk from 'redux-thunk'

// Imports: Redux
import rootReducer from '../reducers'
import alarm from '../reducers/alarm'

// Middleware: Redux Persist Config
const persistConfig:any= {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [
    alarm,
    // 'authReducer',
    // 'counterReducer',
  ],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [
    // 'loadReducer',
    // 'signInReducer'
  ],
}

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(
    thunk,
    createLogger(),
  ),
)

// Middleware: Redux Persist Persister
let persistor = persistStore(store)

// Exports
export {
  store,
  persistor,
}