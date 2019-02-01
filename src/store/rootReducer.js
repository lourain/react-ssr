import {combineReducers} from 'redux'
import {directory,hello,count} from './reducers/reducer'

const rootReducer = combineReducers({
    count,hello,directory
})

export default rootReducer

