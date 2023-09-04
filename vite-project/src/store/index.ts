import { legacy_createStore,combineReducers,compose,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk"
import handleNum from "./Numberstatus/reduce.ts";
import handleArray from "./Arraystatus/reduce.ts";
const reducers=combineReducers({
    handleNum,
    handleArray
})

// const store= legacy_createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())

let composeEnhances=window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE?window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE({}):compose
const store=legacy_createStore(reducers,composeEnhances(applyMiddleware(reduxThunk)))
export default store