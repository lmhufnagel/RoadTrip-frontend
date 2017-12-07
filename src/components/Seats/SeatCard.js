// import React, { Component } from "react";
// import { Card, Icon, Image, Button } from "semantic-ui-react";
// import { connect } from "react-redux";
// import { cancelSeat } from "../../actions/trips"
//
//
//
// class SeatCard extends Component {

  // handleCancelSeat = () => {
  //   console.log("clicked!", this.props.id)
  //   const seatObj = {seat: {
  //     available: true,
  //     ride_id: this.props.id,
  //     rider_id: null
  //   }}
  //   this.props.reserveSeat(seatObj)
  // }
  //
  // createTripCards = () => {
  //
  //
  //     render() {
  //
  //       console.log("card", this.props);
  //
  //       return (
  //         <Card fluid >
  //           <Card.Content extra>
  //             <Card.Header>
  //             Driver: {this.props.driver.username}
  //             </Card.Header>
  //             <Card.Description> Origin: {this.props.start_location} => Departure Time: {this.props.start_time}</Card.Description>
  //             <Card.Description>Destination: {this.props.end_location} => Estimated Arrival Time: {this.props.end_time}</Card.Description>
  //             <Card.Description>Available Seats: {this.props.available_seats}</Card.Description>
  //             <Card.Description>Car: {this.props.car}</Card.Description>
  //             <Card.Description>Rating: {this.props.rating}</Card.Description>
  //             <Card.Description>About this trip: {this.props.comments}</Card.Description>
  //             <div className='reserve button'>
  //               <Button basic color='green' onClick={this.handleCancelSeat}>Reserve a seat! </Button>
  //             </div>
  //         </Card.Content>
  // //         </Card>
  // //       )
  //     }
  //   }
  // }
  //
  //
  //   function mapStateToProps(state) {
  //     return {
  //       trips: state.trips
  //     };
  //   }
  //
  //   function mapDispatchToProps(dispatch) {
  //     return {
  //       // onSelect: trip => {
  //       //   dispatch(selectTriptrip));
  //       // },
  //       cancelSeat: trip => {
  //         dispatch(cancelSeat(trip));
  //       }
  // //     };
  // //   }
  //
  //   export default connect(mapStateToProps, mapDispatchToProps)(SeatCard)
