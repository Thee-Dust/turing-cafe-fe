import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import { getReservation } from '../Api/Api';
import CardDisplay from '../CardDisplay/CardDisplay';


class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: '',
    }
  }

  componentDidMount = async () => {
    try{
      const reservations = await getReservation();
      console.log(reservations)
      this.setState({reservations: reservations})
    }catch (e){
      this.setState({error: e.message});
    }
  }

  handleClick = (request) => {
    console.log(request)
    this.setState({reservations: [...this.state.reservations, request]});
    console.log(this.state.reservations);
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form handleClick={this.handleClick} />
        <CardDisplay reservations={this.state.reservations}/>
      </div>
    )
  }
}

export default App;
