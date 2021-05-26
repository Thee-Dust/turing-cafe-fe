import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import { getReservation } from '../Api/Api';
import Card from '../Card/Card';


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

  handleClick = (event) => {
    event.preventDefault();
    
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form reservations={this.state.reservations}/>
        </div>
        <div className='resy-container'>
          <Card reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
