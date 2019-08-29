import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <form className="form">
        <label className="form__label">
          <input className="form__input" type="text" placeholder="First Name" />
        </label>
        <label className="form__label">
          <input className="form__input" type="text" placeholder="Last Name" />
        </label>
        <label className="form__label">
          <input className="form__input" type="text" placeholder="Email Address" />
        </label>
        <label className="form__label">
          <input className="form__input" type="text" placeholder="Password" />
        </label>
        <button className="form__button">Claim your free trial</button>
        <p className="form__text">By clicking the button you are agreeing to our <a href="https://www.example.com" className="form__link">Terms and Services</a></p>
      </form>
    )
  }
}

export default Form
