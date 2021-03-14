const initialState = {
  isShowedHq: false,
  isAllowedHq: false,
}

const hq = (state=initialState, action) => {
  switch(action.type) {
    case("CHANGE_HQ"):
      return {...state, isShowedHq: !state.isShowedHq}
    case("CLOSE_HQ"):
      return {...state, isShowedHq: false}
    default: 
      return state
  }
}

export default hq