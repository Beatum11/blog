import React, {useState} from 'react';
import '../cssFiles/register.css';
import { useNavigate } from 'react-router-dom';

function LogIn() {

    const navigate = useNavigate();


    const [user, setUser] = useState({
      name: '',
      password: ''
    });

    const onChangeHandler = (e) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value
      });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        fetch(`https://pastoral-wind-perfume.glitch.me/users?name=${user.name}&password=${user.password}`)
          .then(response => {
            if(response.status === 200) navigate('/', {state: {
              menuBool: true,
              userName: user.name
            }});
          })
          .catch(err => console.log(err));

        setUser({
          name: '',
          password: ''
        });
    }

  return (
    <div className='register-container'>

        <form className='register-form'>
        <h1>Log In</h1>
        <label>Your name:</label>
        <input name={'name'} type={'text'} onChange={onChangeHandler} 
        placeholder={'Write your name here'}
        />

        <label>Your password:</label>
        <input name={'password'} type={'password'} onChange={onChangeHandler}
        placeholder={'Write your password here'}
         />
        
        <button className='cool-button' type={'submit'} onClick={onSubmitHandler}>Submit</button>
        </form>
    </div>
  )
}

export default LogIn;