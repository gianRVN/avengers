const initialState = {
  isShowedAllProductAdd: true,
  isAllowedAllProductAdd: true,
}

const allProductsAdd = (state=initialState, action) => {
  switch(action.type) {
    case("CHANGE_ALL_PRODUCTS_ADD"):
      return {...state, isShowedAllProductAdd: !state.isShowedAllProductAdd}
    case("CLOSE_ALL_PRODUCTS_ADD"):
      return {...state, isShowedAllProductAdd: false}
    default: 
      return state
  }
}

export default allProductsAdd