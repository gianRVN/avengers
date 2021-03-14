const initialState = {
  isShowedAllProductImport: false,
  isAllowedAllProductImport: false,
}

const allProductsImport = (state=initialState, action) => {
  switch(action.type) {
    case("CHANGE_ALL_PRODUCTS_IMPORT"):
      return {...state, isShowedAllProductImport: !state.isShowedAllProductImport}
    case("CLOSE_ALL_PRODUCTS_IMPORT"):
      return {...state, isShowedAllProductImport: false}
    default: 
      return state
  }
}

export default allProductsImport