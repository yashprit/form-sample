import {
  MOVE_FORM,
  ERROR,
  INVALID_FORM,
  FORM_UPLOADED,
  FORM_UPLOADING
} from '../actions/form';

export default function location(state = {
  isComplete: false,
  isFetching: false,
  didInvalidate: false
}, action){
  switch(action.type){
    case FORM_UPLOADED: 
      return Object.assign({}, state, {
        isFetching: false,
        isComplete: true
      })
    case FORM_UPLOADING: 
      return Object.assign({}, state, {
        isFetching: true,
      })
    case ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: true
      })
    case INVALID_FORM:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: true
      })

    default:
      return state
  }
}