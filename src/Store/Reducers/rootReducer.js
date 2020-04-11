import authReducer from './AuthReducer';
import { combineReducers } from 'redux';
import postReducer from './postReducer';
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer, FirebaseReducer} from 'react-redux-firebase'


const rootReducer = combineReducers({
 auth: authReducer,
 post: postReducer,
 firestore: firestoreReducer,
 firebase: firebaseReducer
})

export default rootReducer