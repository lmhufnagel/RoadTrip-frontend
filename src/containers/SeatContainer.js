import React, { Component } from "react";
import SeatList from "../components/Seats/SeatList";
import SeatCard from ".././components/Seats/SeatCard";
import { Grid, Form, Button, Select } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchRides } from "../actions/trips";

class RideContainer extends Component {
  state = {
    searchedRides: [],
    searchTerm: '',
    selectedRide: [],
    origin_option: "",
    destination_option: ""
  }

  componentDidMount() {
    this.props.fetchRides()
  }

  render(){
    return(
      
    )
  }

  function mapStateToProps(state) {
    console.log(state);
    return {
      rides: state.rides,
      filteredRides: this.filteredRides,
      lastRideFiltered:this.lastRideFiltered
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      fetchRides: (rides) => dispatch(fetchRides(rides))
      }
      searchStart,
      setLastRideFiltered,
      setFilteredRides
  }



  export default connect(mapStateToProps, mapDispatchToProps)(RideContainer);
