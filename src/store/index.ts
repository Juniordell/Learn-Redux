import { createStore, combineReducers } from 'redux'
import people from './module/people'
import add from './module/add'

const allReducers = combineReducers({
  people,
  add,
})

const store = createStore(allReducers)

export default store
