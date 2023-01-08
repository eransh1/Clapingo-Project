import React, { useEffect, useState } from 'react'
import styles from "./Signup.module.css"
import img from "../../images/loginImage.png"
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const Signup = () => {
  const navigate=useNavigate()
  const [signUpDetails,setSignUpDetails]=useState({email:"",pass:""})
  const[accountDeatil,setAccountDetail]=useState(null)
  const[userEmailArray,setUserEmailArray]=useState([])


//CHECK IF USER IS ALREADY LOGGED IN  
useEffect(()=>{
const data=localStorage.getItem("currentLogedIn")
if(data){navigate("/dashboard")}
},[])

//GET LIST OF ALL ACCOUNTS REGISTERED SO FAR
useEffect(()=>{
const data=localStorage.getItem("accountDetails")
if (data){setAccountDetail(JSON.parse(data))}
else{setAccountDetail([])}
},[signUpDetails])


//GET LIST OF ACCOUNTS EMAIL IF EXIST
useEffect(()=>{
if(accountDeatil?.length===0){return}
accountDeatil?.map((item)=>{
  setUserEmailArray((prev)=>{return [...prev,item.email]})
})
},[accountDeatil])


const handleInputChange=(e)=>{
const{name,value}=e.target
setSignUpDetails((prev)=>{
  return {...prev,[name]:value}
})
}

const SignUpIfValid=()=>{
  if(signUpDetails.email===""||signUpDetails.pass===""){
    toast.error("Kindly Fill All Fields");return
  }
  let accountArray
  if(accountDeatil===null){accountArray=[]}
  else if(accountDeatil!==null){accountArray=accountDeatil}
if(userEmailArray.includes(signUpDetails.email)){toast.error("Username Alread Registered");return}
  localStorage.setItem("accountDetails",JSON.stringify([...accountArray,signUpDetails]))
  localStorage.setItem("currentLogedIn",JSON.stringify(signUpDetails))
  toast.success("Registered")
  navigate("/dashboard")
}
  return (
    <>
    <Navbar/>
    <section className={styles.Section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h3 className={styles.heading}>SignUp</h3>
          <div className={styles.loginForm}>
            <input onChange={handleInputChange} className={styles.input} type="text" placeholder='Enter UserName' name='email' value={signUpDetails.email} />
            <input onChange={handleInputChange} className={styles.input} type="password" placeholder='Enter Password' name='pass' value={signUpDetails.pass}/>
            <button onClick={SignUpIfValid} className={styles.login}>SignUp</button>
          </div>

          <p className={styles.infoo}>Already Have An Account? <span><NavLink className={styles.link} to="/login">Login</NavLink></span></p>
        </div>
        <div className={styles.right}>
      <img className={styles.loginImage} src={img} alt="signUp" />
        </div>
      </div>
    </section>
    </>
  )
}

export default Signup