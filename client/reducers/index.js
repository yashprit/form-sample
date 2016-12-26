
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import form from './form'

export default combineReducers({
  routing,
  form
})
