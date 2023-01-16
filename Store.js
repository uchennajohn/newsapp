import { legacy_createStore as createStore, combineReducers } from 'redux';
import loginReducer from './Redux/LoginUserSlice';
import userReducer from "./Redux/CreateUserSlice"

const rootReducer = combineReducers({
  login: loginReducer,
  createUser: userReducer
});

const store = createStore(rootReducer);

export default store;