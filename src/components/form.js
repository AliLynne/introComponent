import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <form>
        <label>
          First Name
          <input type="text" placeholder="First Name" />
        </label>
        <label>
          Last Name
          <input type="text" placeholder="Last Name" />
        </label>
        <label>
          Email Address
          <input type="text" placeholder="Email Address" />
        </label>
        <label>
          Password
          <input type="text" placeholder="Password" />
        </label>
        <button>Claim your free trial</button>
        <p>By clicking the button you are agreeing to our <span>Terms and Services</span></p>
      </form>
    )
  }
}

export default Form
