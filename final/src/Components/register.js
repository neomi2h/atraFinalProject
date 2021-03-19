import React, { useRef, useState } from 'react';
import { register } from '../service'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router'

export default function Register() {

    const nameRef = useRef('');
    const passwordRef = useRef('');
    const phonedRef = useRef('');
    const emailRef = useRef('');
    const [finishRegister,setFinishRegister]=useState('')
    
    if (finishRegister==="ok")
    return <Redirect to={{pathname: "/login"}}/>

    function sendDetils() {
        if (nameRef.current.value !== '' && passwordRef.current.value !== '' && phonedRef.current.value!=='' && emailRef.current.value!=='')
        {
            register({ name: nameRef.current.value, password: passwordRef.current.value, email:emailRef.current.value, phone:phonedRef.current.value });
            setFinishRegister("ok");
        }
        else
            alert('you must enter details');
    }

    return (
        <>
    <div id="login-form" style={{ width:"400px", height:"500px", paddingTop:"50px", margin:"auto", boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)"}} >
        <BsFillPersonPlusFill style={{ width:"80px", color:"green", height:"80px"}}/>
         <p>Create your account</p>
            <input id="name" style={{width:"80%", height:"40px", paddingLeft:"10px"}} type="text" placeholder="Name" ref={nameRef}></input>
            <br></br>
            <br></br>
            <input id="password" style={{width:"80%", height:"40px", paddingLeft:"10px"}} type="password" placeholder="Password" ref={passwordRef}></input>
            <br></br>
            <br></br>
            <input id="phone" style={{width:"80%", height:"40px", paddingLeft:"10px"}} type="text" placeholder="Phone" ref={phonedRef}></input>
            <br></br>
            <br></br>
            <input id="email" style={{width:"80%", height:"40px", paddingLeft:"10px"}} type="email" placeholder="E-mail" ref={emailRef}></input>
            <br></br>
            <br></br>
            <button style={{width:"85%", height:"40px", background:"green", border:"none"}} onClick={sendDetils}>Register</button>
            <p>Do you have account?<Link to='/'> <strong>Login</strong></Link></p>
      </div> 
       </>
    )
}