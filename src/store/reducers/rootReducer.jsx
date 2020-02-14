import playerReducer from './playerReducer'
import { firestoreReducer } from 'redux-firestore'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    players: playerReducer,
    firestore: firestoreReducer,
})

export default rootReducer