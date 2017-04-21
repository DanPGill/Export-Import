import { combineReducers } from 'redux'
import todos from './reducers/todos'
import user from './reducers/user'
import cats from './reducers/cats'
import albums from './reducers/kateBush'

const rootReducer = combineReducers({
  todos,
  user,
  cats,
  albums,
})

export default rootReducer
