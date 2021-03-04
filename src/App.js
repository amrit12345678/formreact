import React, {Component} from 'react';
import './style.css'

class Form extends Component{
  render(){
    return(
      <div className = 'hello'>
      <h1>Fill the Form Below</h1>
      <label for='name'>
        Name:
      </label>
      <input
        className = 'field'
        type = 'name'
        placeholder = 'Name'
      />
      <br/>
      <label for='address'>
        Address:
      </label>
      <input
        className = 'field'
        type = 'address'
        placeholder = 'Address'
      />
      <br/>
      <label for='phone'>
        Phone:
      </label>
      <input
        className = 'field'
        type = 'phone'
        placeholder = 'Phone'
      />
      <br/>
      <label for='email'>
        Email:
      </label>
      <input
        className = 'field'
        type = 'email'
        placeholder = 'Email'
      />
      <br/>
      <label for='password'>
        Password:
      </label>
      <input
        className = 'field'
        type = 'password'
        placeholder = 'Password'
      />
      <br/>
      <button className = 'field'> 
        Submit
      </button>
      <br/>

      </div>
    )
  }
}
export default Form;
