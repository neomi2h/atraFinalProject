import React, { useRef, useState } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {BsFillPersonFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router'
import {actions} from '../Redux/Actions/action'
function mapStateToProps(state){
    return{
        user: state.user.user
    };
}
const mapDispatchToProps = (dispatch) => ({
    
    setUser: (user) => dispatch(actions.setUser(user)),
    
}) 
export default connect(mapStateToProps,mapDispatchToProps)(function Login(props) {
const {setUser}=props
    const nameRef = useRef('');
    const passwordRef = useRef('');
    const[clogin,setClogin] =useState('')
    
    if (clogin==="ok")
        return <Redirect to={{pathname: "/drinks"}}/>
   
    async function sendDetils() {
        if (nameRef.current.value !== '' && passwordRef.current.value !== '')
        {
             await login({ name: nameRef.current.value, password: passwordRef.current.value });
             
            }
        else{
            alert('you must enter details');}
    }

    async function login(user) {
        await axios.post('http://localhost:8080/login', user).then(
            res => {
                console.log('login work');
                let  tempuser=JSON.stringify(res.data.theUser[0])
                setUser(tempuser);
                setClogin("ok");
            },
            err => {
                console.log('error login');
                setClogin("bad");
                alert("User not found")
            }
        )
    }

    return (
        <>
    <div id="login-form" style={{ width:"400px", height:"500px", paddingTop:"50px", margin:"auto", boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)"}} >
        <BsFillPersonFill style={{ width:"80px", color:"green", height:"80px"}}/>
         <p>Login your account</p>
            <input id="name" style={{width:"80%", height:"40px", paddingLeft:"10px"}} type="text" placeholder="Name" ref={nameRef}></input>
            <br></br>
            <br></br>
            <input id="password" style={{width:"80%", height:"40px", paddingLeft:"10px"}} type="password" placeholder="Password" ref={passwordRef}></input>
            <br></br>
            <br></br>
            <button style={{width:"85%", height:"40px", background:"green", border:"none"}} onClick={sendDetils}>Login</button>
             <br></br>
            <p>Don't have account?<Link to='/register'> <strong>Create New Account</strong></Link></p>
      </div> 
       </>
    )
})