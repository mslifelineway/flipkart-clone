import { createStore } from "redux";
import rootReducer from "../reducers";
console.log("rootReducer: " + JSON.stringify(rootReducer))
const store = createStore(rootReducer);
console.log('store in store: ' + JSON.stringify(store))
export default store;
