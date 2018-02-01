import React, { Component } from "react";
import SeatList from "../components/Seats/SeatList";
import SeatCard from ".././components/Seats/SeatCard";
import { Grid, Form, Button, Select } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchRides } from "../actions/trips";
import '../style/list.css'

class SeatContainer extends Component {
  state = {
    reservedSeats: []
  }

  componentDidMount() {
    this.props.fetchReservedSeats()
  }

  render(){
    return(
      <SeatList className='RideList' rides={reservedSeats}/>
    )
  }

  function mapStateToProps(state) {
    console.log(state);
    return {
      rides: state.rides,
      reservedSeats: state.reservedSeats
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      fetchReservedSeats: (seats) => dispatch(fetchReservedSeats(seats))
      }
  }



  export default connect(mapStateToProps, mapDispatchToProps)(SeatContainer);
