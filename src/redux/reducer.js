import { SET_PRODUCT_DETAILS } from './actions'

const intialState = {
  productDetails: {}
}

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload }
    default:
      return state;
  }
}
export default reducer;