import {combineReducers} from 'redux'
import count from './reducers/reducer1'
import hello from './reducers/reducer2'

const rootReducer = combineReducers({
    count,hello
})

export default rootReducer

