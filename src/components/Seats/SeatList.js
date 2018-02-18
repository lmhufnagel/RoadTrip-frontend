import React, { Component } from "react";
import SeatCard from './SeatCard.js'
import { Card, Form } from 'semantic-ui-react'
import {fetchReservedSeats, reserveSeat} from "./../../actions/trips"
import { fetchUsers } from "./../../actions/users"
import '../../style/list.css'
import { connect } from "react-redux";


class SeatList extends Component {

  componentWillMount() {
    this.props.getUsers()
  }

  makeSeatCards = () => {
    const user = this.props.users.filter((user) => user.seats.length > 0)
    console.log(user);
    if (user[0]) {
      return user[0].seats.map((seat, idx) => <SeatCard {...seat} key={idx}/>)
    }
    return <div>"LOADING"</div>
  }


  render() {
    console.log('SeatList', this.props);

      return (
        <div className= 'seats'>
          <h1>Trips you are signed up for: </h1>
          {this.makeSeatCards()}
        </div>
      )
    }

  }



  function mapStateToProps(state) {
    console.log("SEATLIST", state);
    return {
      trips: state.trips,
      rides: state.rides,
      users: state.users
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      // onSelect: trip => {
      //   dispatch(selectTriptrip));
      // },
      reserveSeat: trip => {
        dispatch(reserveSeat(trip));
      },
      getUsers: () => {
        dispatch(fetchUsers());
      }
    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SeatList)
