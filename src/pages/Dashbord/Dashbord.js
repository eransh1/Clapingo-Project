import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Navbar from '../../components/Navbar/Navbar'
import styles from "./Dashbord.module.css"

const Dashbord = () => {
const navigate=useNavigate()
const[userData,setUserData]=useState()


useEffect(()=>{
  toast.success("You Are Logged In")
},[])

//HANDLE LOGOUT
const handleLogOut=()=>{
  localStorage.setItem("lastLoggedIn",JSON.stringify(userData))
  localStorage.removeItem("currentLogedIn")

      navigate("/")
  
}


//GET CURRENT LOGED IN USER DATA
useEffect(()=>{
  const data=localStorage.getItem("currentLogedIn")
  if(data){setUserData(JSON.parse(data))}
},[])

  return (
    <>

    <Navbar/>
    <section className={styles.Section}>
      <div className={styles.container}>
        <h3 className={styles.heading}>Welcome</h3>
        <h3 className={styles.userName}>{userData?.email}</h3>
        <button onClick={handleLogOut} className={styles.logOut}>LogOut</button>
      </div>
    </section>
    </>
  )
}

export default Dashbord