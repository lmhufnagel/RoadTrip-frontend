// export function userReducer(state = {
//   users: [],
// }, action) {
//
//   switch(action.type) {
//     case "FETCH_USER":
//       return {...state, user: action.payload}
//     default:
//       return state
//   }
// }


export function userReducer(state = {currentUser: {}}, action) {
  switch(action.type) {

    case "ADD_TRIP":
      return {...state, currentUser: {...state.currentUser, trips: [...state.currentUser.trips, action.payload]}}

    default:
      return {...state}
  }

}
