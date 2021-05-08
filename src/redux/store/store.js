import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import appReducer from "../reducers/appReducer";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

export const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk)))