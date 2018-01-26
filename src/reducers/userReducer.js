export function userReducer(state = {
  users: [],
}, action) {

  switch(action.type) {
    case "FETCH_USER":
      return {...state, user: action.payload}
    default:
      return state
  }
}
