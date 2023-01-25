import React, { Component } from 'react';
import './styles/register.css';


export class Register extends Component {
  
  render() {

   
    return (
         
<div className='back'>
  

<form action='http://localhost:5000/api/signup' method='POST' >
        <div className='container'>
          <h1>Inscription</h1>
        
      
              <label ><b>Nom d'utulisateur</b></label>
              <br />
            <input  className='text'  type="text" name="username" placeholder="Enter Username" required/>
            
          <label><b>Email</b></label>
          <input className='text' type="text" placeholder="Enter Email" name="email" required/>
          
          <label ><b>Mot de passe</b></label>
          <input className='password' type="password" placeholder="Enter Password" name="password" required/>
      
                  <label ><b>Telephone</b></label>
            <br/>
           
           <input className='phone' type="phone" name="phone" placeholder="812345678" required/>
      
      
          <div class="clearfix">
      
            <button type="submit" className="btn">Sign Up</button>
          </div>
        </div>
      </form>





    
      </div>

    )
  }
}

export default Register