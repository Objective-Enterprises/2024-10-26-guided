import axios from "axios"
import { LIST_PRODUCTS_REQUEST, LIST_PRODUCTS_SUCCESS, PRODUCT_DETAILS_FAILURE, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from "../constants/productActionConstants"
import { GET_ALL_PRODUCTS_API } from "../constants/backend"

export const listProducts = () => async (dispatch) => {
  dispatch({ type: LIST_PRODUCTS_REQUEST })
  const response = await axios.get(GET_ALL_PRODUCTS_API)
  dispatch({ type: LIST_PRODUCTS_SUCCESS, payload: response.data.data })
}

export const fetchProductDetails = (productId) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST })
  const url = `${GET_ALL_PRODUCTS_API}/${productId}`
  try {
    const response = await axios.get(url)
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: response.data.data
    })
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAILURE })
  }
}
