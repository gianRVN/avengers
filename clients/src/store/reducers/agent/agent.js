const initialState = {
  isShowedAgent: false,
  isAllowedAgent: false,
}

const agent = (state=initialState, action) => {
  switch(action.type) {
    case("CHANGE_AGENT"):
      return {...state, isShowedAgent: !state.isShowedAgent}
    case("CLOSE_AGENT"):
      return {...state, isShowedAgent: false}
    default: 
      return state
  }
}

export default agent