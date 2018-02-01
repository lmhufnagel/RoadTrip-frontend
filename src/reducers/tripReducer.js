export default function tripReducer(
  state = {
    rides: [],
    driver: {},
    passengers:[],
    selectedRide: {},
    trip: {},
    users: []
  },
  action
) {
  switch (action.type) {
    case "FETCH_RIDES":
      console.log("REDUCER FOR RIDES", action.payload);
      return {...state, rides: action.payload, isLoading: false}
    case "ADD_NEW_TRIP":
      return Object.assign({}, state, { trips: [...state.trips, action.payload] })
    case "SELECT_TRIP":
      return Object.assign({}, state, {selectedTrip: action.payload})
    case "CHOOSE_DRIVER":
      return Object.assign({}, state, {
        driver: action.payload});
    case "ADD_PASSENGERS":
      return Object.assign({}, state, {riders: [...state.passengers, action.payload]})
    case "LOADING":
      return {...state}
    case "FETCH_USERS":
      return { ...state, users: [...action.payload] }
    default:
      return state;
  }
}
