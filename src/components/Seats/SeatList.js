import React, { Component } from "react";
import SeatCard from './SeatCard.js'
import { Card, Form } from 'semantic-ui-react'
import { connect } from "react-redux";


class SeatList extends Component {



  render() {
    console.log('SeatList', this.props);

      const seatCards = this.props.seats.map((seat, index) => {
        return (
          <div>
          <h1> Trips You are signed up for </h1>
          <SeatCard key={index} {...seat}/>

          </div>
        )
      })
      return seatCards
    }
  }


export default SeatList
