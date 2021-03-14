const initialState = {
  isShowedWebstore: false,
  isAllowedWebstore: true,
}

const webstore = (state=initialState, action) => {
  switch(action.type) {
    case("CHANGE_WEBSTORE"):
      return {...state, isShowedWebstore: !state.isShowedWebstore}
    case("CLOSE_WEBSTORE"):
      return {...state, isShowedWebstore: false}
    default: 
      return state
  }
}

export default webstore