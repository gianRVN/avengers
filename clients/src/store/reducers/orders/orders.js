const initialState = {
  isShowedOrder: false,
  isAllowedOrder: true,
  orders: []
}

const orders = (state=initialState, action) => {
  switch(action.type) {
    case("CHANGE_ORDER"):
      return {...state, isShowedOrder: !state.isShowedOrder}
    case("CLOSE_ORDER"):
      return {...state, isShowedOrder: false}
    default: 
      return state
  }
}

export default orders