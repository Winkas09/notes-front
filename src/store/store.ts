
import {createStore, combineReducers} from 'redux'
import { ThemeReducer } from './reducer'

const rootReducer = combineReducers({
    counter: ThemeReducer
})

let store = createStore(rootReducer) 

export default store



// https://medium.com/@pramod.haviruth/guide-to-integrating-react-redux-with-react-app-in-less-than-5-minutes-legacy-way-9fe1158aa568