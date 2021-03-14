const initialState = {
  isShowedDashboard: true,
  isAllowedDashboard: true,
}

const dashboard = (state=initialState, action) => {
  switch(action.type) {
    case("CHANGE_DASHBOARD"):
      return {...state, isShowedDashboard: !state.isShowedDashboard}
    case("CLOSE_DASHBOARD"):
      return {...state, isShowedDashboard: false}
    default: 
      return state
  }
}

export default dashboard