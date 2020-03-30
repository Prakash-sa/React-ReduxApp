import {combineReducers} from 'redux'
import UserReducer from './reducer-user'
import ActiveUser from './activeuser'

const allreducer =combineReducers({
  users:UserReducer,
  activeuser:ActiveUser
})
export default allreducer;
