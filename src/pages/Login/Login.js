import React, { useState,useEffect } from 'react'
import styles from "./Login.module.css"
import img from "../../images/loginImage.png"
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate=useNavigate()
const [loginDetails,setLoginDetails]=useState({email:"",pass:""})
const[accountsArray,setAccountArray]=useState(null)
const[accountEmailsArray,setAccountEmailsArray]=useState([])
console.log("login",loginDetails)

//GET LAST LOGGEDIN DATA
useEffect(()=>{
  let dta
const data=localStorage.getItem("lastLoggedIn")
if(data){dta=JSON.parse(data);setLoginDetails({email:dta.email,pass:dta.pass})}
},[])

//CHECK IF USER IS ALREADY LOGGED IN
useEffect(()=>{
  const data=localStorage.getItem("currentLogedIn")
  if(data){navigate("/dashboard")}
  },[])

//GET LIST OF ALL ACCOUNTS REGISTERED SO FAR
useEffect(()=>{
  const data=localStorage.getItem("accountDetails")
  if (data){setAccountArray(JSON.parse(data))}
  else{setAccountArray([])}
},[])


//GET LIST OF ACCOUNTS EMAIL IF EXIST
useEffect(()=>{
if(accountsArray?.length===0){return}
accountsArray?.map((item)=>{
  setAccountEmailsArray((prev)=>{
    return[...prev,item.email]
  })
})
},[accountsArray])


const handleInputChange=(e)=>{
const{name,value}=e.target
setLoginDetails((prev)=>{
  return {...prev,[name]:value}
})
}


const loginIfValid=()=>{
  if(loginDetails.email===""||loginDetails.pass===""){toast.error("kindly Fill All Fields");return}
  console.log(loginDetails,"loginInfo")
 if(accountEmailsArray.includes(loginDetails.email)){
  accountsArray.map((item)=>{
    if(item.email===loginDetails.email&&item.pass===loginDetails.pass){
toast.success("Sucessfully Logged In")
localStorage.setItem("currentLogedIn",JSON.stringify(loginDetails))
navigate("/dashboard")
return
    }
    toast.error("Invalid UserName Or Password");
    return
  })
 }
 if(!accountEmailsArray.includes(loginDetails.email)){toast.error("UserID Does Not Exist In Our Database");return}
}

  return (
    <>
    <Navbar/>
    <section className={styles.loginSection}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h3 className={styles.heading}>Login</h3>
          <div className={styles.loginForm}>
            <input onChange={handleInputChange} className={styles.input} type="text" placeholder='Enter UserID' name='email' value={loginDetails.email} />
            <input onChange={handleInputChange} className={styles.input} type="password" placeholder='Enter Password' name='pass' value={loginDetails.pass}/>
            <button onClick={loginIfValid} className={styles.login}>Login</button>
          </div>

          <p className={styles.infoo}>Dont Have An Account? <span><NavLink className={styles.link} to="/signup">SignUp</NavLink></span></p>
        </div>
        <div className={styles.right}>
      <img className={styles.loginImage} src={img} alt="login" />
        </div>
      </div>
    </section>
    </>
  )
}

export default Login