
import { createStore, combineReducers, applyMiddleware} from 'redux';
import drinks from './Reducers/drinkReducer'
import user from './Reducers/userReducer'
import {getAllDrinks} from './Middleware/middelware';


const reducer =combineReducers({drinks,user})

const store = createStore(reducer,applyMiddleware(getAllDrinks)) 

window.store = store;

export default store;