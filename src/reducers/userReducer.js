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

    case "DELETE_TRIP":
      const newTrips = state.currentUser.trips.filter(app => {
        return app.id !== action.payload
      })
      return {...state, currentUser: {...state.currentUser, trips: [...newTrips]}}

    case "SET_DEMO_USER":
      return {...state, currentUser: action.payload}

    default:
      return {...state}
  }

}
