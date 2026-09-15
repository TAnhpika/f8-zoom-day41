import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore,
} from "redux";
import { logger } from "redux-logger";
import { thunk } from "redux-thunk";

import productReducer from "./product/reducer";
import uiReducer from "./ui/reducer";

const rootReducer = combineReducers({
    product: productReducer,
    ui: uiReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
