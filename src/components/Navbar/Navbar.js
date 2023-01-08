import React,{useEffect,useState} from 'react'
import styles from "./Navbar.module.css"
import brandLogo from "../../images/brandLogo.png"
import userImg from "../../images/user.png"
import { NavLink } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  const[namee,setNamee]=useState("Login")
  const[userData,setUserData]=useState()

  useEffect(()=>{
    const data=localStorage.getItem("currentLogedIn")
    if(data){setNamee("Logout");setUserData(JSON.parse(data))}
    },[])

    const handleNavBtnClick=()=>{
      if(namee==="Login"){navigate("/login");return}
      localStorage.setItem("lastLoggedIn",JSON.stringify(userData))
      localStorage.removeItem("currentLogedIn")
      navigate("/")
    }

    

  return (
    <>
<nav className="navbar navbar-expand-lg navbarBackground">
<ToastContainer />
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><img className={styles.brandLogo} src={brandLogo} alt="brand" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
        <li className={styles.navItem}>
          <a className={styles.navLink} aria-current="page">Plans & Pricing</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} aria-current="page">Teach with us</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} aria-current="page">Affiliate Program</a>
        </li>
        <li className={styles.navItem}>
          <a className={styles.navLink} aria-current="page">Kids</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <button onClick={handleNavBtnClick} className={styles.loginBtn}><span><img className={styles.userImg} src={userImg} alt="userImg" /></span>{namee}</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar