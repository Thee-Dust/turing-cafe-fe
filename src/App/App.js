import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import { getReservation } from '../Api/Api'


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


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
