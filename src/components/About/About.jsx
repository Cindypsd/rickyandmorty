import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
export const About = () => {
  return (
    <>
     <img
            className='txtCindy'
						src={require('../../images/CindyPosada.png')}
						alt='Cindy Posada'
				></img>



    
    <div className='about'>

      <div>

  
      <div>
        <img className='imgCindy'
						src={require('../../images/CindyPsd.png')}
						alt='Cindy Posada'
            ></img>

        <div className='aboutInfotxt'>
          <p><b>Hi! My name is Cindy!</b> I'm the creator of this page, here you can find Rick & Mortys' characters, you could search for them by their ID or get one randomly, also you can check for extra information if you click on the characters' names!</p>
          <p>I hope you find it usefull! See you soon!</p>
        </div>

      </div>

      <div className='aboutInfo'>

          <div className='txtBox'>
             <h3 className='infoTitle'>Status:</h3>
             <p className='aboutTxt '> Alive </p>
          </div>

          <div className='txtBox'>
            <h3 className='infoTitle'>Specie:</h3>
            <p className='aboutTxt'>Human</p>
         </div>

         <div className='txtBox'>
          <h3 className='infoTitle'> Origin:</h3>
          <p className='aboutTxt'>Earth</p>
        </div>

        <div className='txtBox'>
          <h3 className='infoTitle'>Location:</h3>
          <p className='aboutTxt'>Mexico</p>
        </div>

        <div className='txtBox'>
          <h3 className='infoTitle'>Episodes</h3>
          <p className='aboutTxt'> 10,865.9554 </p>   
        </div>

    
      </div>

      <Link to={`/home`} >
           <button className="btnNav">Return</button>
       </Link>

    </div>


</div>  

</>
  )
}
