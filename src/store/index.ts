import { createStore, combineReducers } from 'redux'
import dogs from './module/dogs'
import add from './module/add'

const allReducers = combineReducers({
  dogs,
  add,
})

const store = createStore(allReducers)

export default store
