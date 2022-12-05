import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './css/Form.css'


//const regexEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/



export const Form = () => {

  const [userData, setUserData] = useState({ username: '', password: '' });


  useEffect(() => {
    validate();
  }, [userData]);

  const [errors, setErrors] = useState({ username: '', password: '' })

  const regexEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
  const validate = () => {
    regexEmail.test(userData.username) ? 
    setErrors({...errors, username:''}):
    setErrors({...errors, username:'Ingresa un usuario valido'});

    userData.password <=6 ? 
    setErrors({...errors, password:''}):
    setErrors({...errors, password:'Debe de tener 6 caracteres'});
  }

  const handleInputChange = (evento) => {
    //const property= evento.target.name; // propiedad que quiero cambiar
    //const value = evento.target.value; //valor que le quiero dar
    setUserData({
      ...userData,
      [evento.target.name]: evento.target.value
    })
  }

  


  
  
  const submitHandler = (event) => {
    event.preventDefault();
    alert('Bienvenido');
    setUserData('');
  }

  
 


  return (
    <div className='signInBox'>


      <div className='inputsElementos'>
      <h1 className='textoH1'>Welcome!</h1>
      <h3 className='textoH3'>Sign-in to get more info ...</h3>
          <div>
             <label className='labelText' htmlFor='username' >Username: </label>
              <input className='{errors.username && error}' autoComplete='off' type='text' name='username' value={userData.username} onChange={handleInputChange}/>
              <span>{errors.username && errors.username}</span>
          </div>

        <div>
            <label className='labelText' htmlFor='password'>Password: </label>
            <input className='{errors.password && style.error}' type='password' name='password' value={userData.password} onChange={handleInputChange} />
            <span>{errors.password && errors.password}</span>
        </div>
        
        <div>
            <button className='btnSignIn' type='submit' onClick ={submitHandler}> Sign in</button>
        </div>

     </div>
    </div>
  )
}
