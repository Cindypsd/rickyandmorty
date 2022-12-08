import React from 'react'
import { useState } from 'react';
import { validate } from './Validations';
import style from './Form.module.css'





export const Form = ({login}) => {

  const [userData, setUserData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '' })


  const handleInputChange = (evento) => {
    setUserData({
      ...userData,
      [evento.target.name]: evento.target.value
    })
    setErrors(validate({userData,  [evento.target.name]: evento.target.value}))
  }


  const handleSubmit = (userData) => {
    login(userData)
  }
  
  return (
    <div className={style.signInBox}>


      <div className={style.inputsElementos}>
      <h1 className={style.textoH1}>Welcome!</h1>
      <h3 className={style.textoH3}>Sign-in to get more info ...</h3>
          <div>
             <label className={style.labelText} htmlFor='username' >Username: </label>
              <input 
              autoComplete='off' 
              type='text' 
              name='username' 
              value={userData.username} 
              onChange={handleInputChange}
              className={errors.username && style.warning}/>
              {errors.username && <p className={style.danger}>{errors.username}</p>}
          </div>

        <div>
            <label className={style.labelText} htmlFor='password'>Password: </label>
            <input className='{errors.password && style.error}' type='password' name='password' value={userData.password} onChange={handleInputChange}/>
            {errors.password && <p className={style.danger}>{errors.password}</p>}

        </div>
        
        <div>
            <button className='btnSignIn' type='submit' onClick={handleSubmit}> Sign in</button>
        </div>

     </div>
    </div>
  )
}
