import React from 'react'
import './Error.css'

export const Error = () => {
  return (
  <div className='errorPage'>


    <img
						src={require('../../images/error404.png')}
						alt='ERROR 404 Page not found'
            ></img>
    
  </div>
  )
}
