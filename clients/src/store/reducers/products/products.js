const initialState = {
  isShowedProduct: false,
  isAllowedProduct: true,
}

const products = (state=initialState, action) => {
  switch(action.type) {
    case("CHANGE_PRODUCT"):
      return {...state, isShowedProduct: !state.isShowedProduct}
    case("CLOSE_PRODUCT"):
      return {...state, isShowedProduct: false}
    default: 
      return state
  }
}

export default products