import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
const store = createStore(rootReducer, applyMiddleware(logger));
/* import { persistStore } from "redux-persist";
export const persistor = persistStore(store); 
export default { store, persistor };*/
export default store;