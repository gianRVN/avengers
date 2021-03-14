const initialState = {
  isShowedModules: false,
  isAllowedModules: true,
}

const modules = (state=initialState, action) => {
  switch(action.type) {
    case("CHANGE_MODULES"):
      return {...state, isShowedModules: !state.isShowedModules}
    case("CLOSE_MODULES"):
      return {...state, isShowedModules: false}
    default: 
      return state
  }
}

export default modules