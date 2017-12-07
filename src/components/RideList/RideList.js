import React, { Component } from "react";
import RideCard from './RideCard.js'
import { Card, Form } from 'semantic-ui-react'
import { fetchRides } from "./../../actions/trips"
import { connect } from "react-redux";
import '../../style/list.css'

class RideList extends Component {



  render() {
    console.log('RideList', this.props);

      const rideCards = this.props.rides.map((ride, index) => {
        return (
          <div className= 'rides'>
          <RideCard key={index} {...ride}/>

          </div>
        )
      })
      return rideCards
    }
  }


export default RideList
