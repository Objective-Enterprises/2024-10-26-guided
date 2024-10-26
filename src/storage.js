//EXPLAIN THE WHOLE CODE
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userLoginReducer,
  userLogoutReducer,
} from "./reducers/userReducers";
import { fetchProductDetailsReducer, listProductsReducer } from "./reducers/productReducers";

const reducer = combineReducers({
  login: userLoginReducer,
  logout: userLogoutReducer,
  listProducts: listProductsReducer,
  productDetails: fetchProductDetailsReducer
});


const userInfoFromLocalStorage = sessionStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialListProducts = {
  products: [],
  loading: false
}

const initialProductDetails = {
  loading: false,
  success: false,
  failure: false,
  product: {}
}

const initialState = {
  login: { userInfo: userInfoFromLocalStorage },
  listProducts: initialListProducts,
  productDetails: initialProductDetails
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store