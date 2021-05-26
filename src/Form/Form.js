import React, { Component } from 'react';

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


  render() {
    return (
      <div>
        <input type='text' />
        <input type='text' />
        <input type='text' />
        <input type='text' />
        <input type='submit' />
      </div>
    )
  }
}
