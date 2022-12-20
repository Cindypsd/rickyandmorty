import React, { useEffect } from 'react'
import { validate } from './Validations';
import style from './Form.module.css'
import { useNavigate } from 'react-router-dom';



export function Form(props) {

  const navigate = useNavigate();
  const [access, setAccess] = React.useState(false);
  const username = 'ejemplo@gmail.com';
  const password = '1password';

  function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
   }

   useEffect(() => {
     !access && navigate('/');
  }, [access,navigate]);


   const [userData, setUserData ] = React.useState({
       username    : '',
       password   : '',
    });
   
    const [errors, setErrors] = React.useState({
     username    : '',
     password   : '',
    });
   
    const handleChange = (evento)=> {
      setUserData({...userData,[evento.target.name]: evento.target.value})
      setErrors(validate({...userData,[evento.target.name]: evento.target.value}))
    }


   const handleSubmit = (evento)=>{
   evento.preventDefault();
   login(userData)
   }


  return (

    <>
    <div className={style.signInBox}>


      <div className={style.inputsElementos}>
      <h1 className={style.textoH1}>Welcome!</h1>
      <h3 className={style.textoH3}>Sign-in to get more info ...</h3>



      <form onSubmit={handleSubmit}>
 
        <div>
            <label className={style.labelText} htmlFor='username' >Username: </label>
            <input name='username' value={userData.username} onChange={handleChange} className={errors.username && style.error}/>
            
        </div>

        <div>
            <label className={style.labelText} htmlFor='password'>Password: </label>
            <input name='password' value={userData.password} onChange={handleChange} className={errors.password && style.error}/>
            
        </div>
        
        <div>
            <button className={style.btnLog} type='submit'>Login</button>
        </div>

      </form>

     </div>

    </div>

    <div className={errors.username || errors.password ? style.errorTextContainer:null}>

    <p>{errors.username}</p>
    <p>{errors.password}</p>

    </div>
   
   </>
  )
}
