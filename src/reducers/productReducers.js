import { keyboard } from "@testing-library/user-event/dist/keyboard"
import { LIST_PRODUCTS_REQUEST, LIST_PRODUCTS_SUCCESS, PRODUCT_DETAILS_FAILURE, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from "../constants/productActionConstants"

export const listProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case LIST_PRODUCTS_REQUEST: {
      return { ...state, loading: true }
    }
    case LIST_PRODUCTS_SUCCESS: {
      return { ...state, loading: false, products: action.payload }
    }
    default: {
      return state
    }
  }
}

export const fetchProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST: {
      return {
        ...state,
        loading: true,
        success: false,
        failure: false,
        product: {}
      }
    }
    case PRODUCT_DETAILS_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true,
        failure: false,
        product: action.payload
      }
    }
    case PRODUCT_DETAILS_FAILURE: {
      return {
        ...state,
        loading: false,
        success: false,
        failure: true,
        product: {}
      }
    }
    default: {
      return state
    }
  }
}