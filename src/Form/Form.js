import React, { Component } from 'react';
import './Form.css'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameInput: '',
      dateInput: '',
      timeInput: '',
      guestInput: '',
    }
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const request = {
      id: Date.now(),
      name: this.state.nameInput,
      date: this.state.dateInput,
      time: this.state.timeInput,
      number: this.state.guestInput,
    }
    this.props.handleClick(request);
    this.setState({
      nameInput: '',
      dateInput: '',
      timeInput: '',
      guestInput: '',
    })
  }

  render() {
    return (
      <div className='input-feild'>
        <input type='text' name="nameInput" value={this.state.nameInput} placeholder='Name' onChange={(event) => this.onChange(event)}/>
        <input type='date' name="dateInput" value={this.state.dateInput} placeholder='Date (mm/dd)' onChange={(event) => this.onChange(event)}/>
        <input type='time' name="timeInput" value={this.state.timeInput} placeholder='Time' onChange={(event) => this.onChange(event)}/>
        <input type='number' name="guestInput" value={this.state.guestInput} placeholder='Number of guest' onChange={(event) => this.onChange(event)}/>
        <input type='submit' onClick={(event) => this.handleSubmit(event)}/>
      </div>
    )
  }
}
