const initialState = {
  isShowedSetting: false,
  isAllowedSetting: true,
}

const settings = (state=initialState, action) => {
  switch(action.type) {
    case("CHANGE_SETTING"):
      return {...state, isShowedSetting: !state.isShowedSetting}
    case("CLOSE_SETTING"):
      return {...state, isShowedSetting: false}
    default: 
      return state
  }
}

export default settings