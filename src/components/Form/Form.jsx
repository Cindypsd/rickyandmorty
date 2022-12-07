import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './Form.css'


//const regexEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/



export const Form = (props) => {

  const [userData, setUserData] = useState({ username: '', password: '' });


  // useEffect(() => {
  //   validate();
  // }, [userData]);

  const [errors, setErrors] = useState({ username: '', password: '' })

  const validation = () => {
    
  }

  const handleInputChange = (evento) => {
    setUserData({
      ...userData,
      [evento.target.name]: evento.target.value
    })
  }


  
  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   alert('Bienvenido');
  //   setUserData('');
  // }

  
  return (
    <div className='signInBox'>


      <div className='inputsElementos'>
      <h1 className='textoH1'>Welcome!</h1>
      <h3 className='textoH3'>Sign-in to get more info ...</h3>
          <div>
             <label className='labelText' htmlFor='username' >Username: </label>
              <input autoComplete='off' type='text' name='username' value={userData.username} onChange={handleInputChange}/>
          </div>

        <div>
            <label className='labelText' htmlFor='password'>Password: </label>
            <input className='{errors.password && style.error}' type='password' name='password' value={userData.password} onChange={handleInputChange} />

        </div>
        
        <div>
            <button className='btnSignIn' type='submit'> Sign in</button>
        </div>

     </div>
    </div>
  )
}
