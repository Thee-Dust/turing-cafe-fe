import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import { getReservation } from '../Api/Api';
import Card from '../CardDisplay/CardDisplay';


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
    this.state.reservations.push(request);
    console.log(this.state.reservations)
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form handleClick={this.handleClick} />
        <Card reservations={this.state.reservations}/>
      </div>
    )
  }
}

export default App;
