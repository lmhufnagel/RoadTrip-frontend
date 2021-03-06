import React, { Component } from "react";
import { Button, Card, Image, Icon } from 'semantic-ui-react'
import { connect } from "react-redux";
import { cancelSeat } from "../../actions/trips"



class SeatCard extends Component {

  handleCancelSeat = () => {
    console.log("clicked!", this.props.id)
    const seatObj = {seat: {
      available: true,
      ride_id: this.props.id,
      rider_id: null
    }}
    this.props.cancelSeat(seatObj)
  }

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'CANCEL_SEAT'
    });
  }

  deleteSeat(event) {
    this.props.actions.deleteSeat(this.state.seat)
  }

    render() {

      // const todos = this.props.store.getState().todos.map((todo, index) => {
      //       return <Todo text={todo.text} key={index} store={this.props.store}
      //     })

      console.log("card", this.props);
      return (
        <div>
        <Card.Group itemsPerRow={2}>
          <Card >
            <Card.Content>
              <Card.Header>
              <div>Leaving: {this.props.trip.start_location} => {this.props.trip.start_time}</div>
              </Card.Header>
              <Card.Meta>
                <div>Arriving in: {this.props.trip.end_location} => {this.props.trip.end_time}</div>
              </Card.Meta>
              <Card.Meta>
                <div>Cost: {this.props.trip.seat_price} </div>
              </Card.Meta>
              <Card.Meta>
                <div>Driver: {this.props.trip.driver} </div>
              </Card.Meta>
              <Card.Meta>
                <div>Rating: {this.props.trip.driver} </div>
              </Card.Meta>
              <Card.Meta>
                <div>Other Passengers: {this.props.trip.passengers} </div>
              </Card.Meta>
              <Card.Description>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>

                <Button onClick={this.deleteSeat} color='red'>
                  Cancel
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
        </div>)
    }

  }
  function mapDispatchToProps(dispatch) {
    return {
      cancelSeat: trip => {
        dispatch(cancelSeat(trip));
      }
    };
  }

  export default connect(null, mapDispatchToProps)(SeatCard)
