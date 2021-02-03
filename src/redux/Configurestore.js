import { combineReducers, createStore } from "redux";
import CounterReducer from './Duck/Counter'



const reducer=combineReducers({
    counter:CounterReducer
})

const store=createStore(reducer);

export default store;