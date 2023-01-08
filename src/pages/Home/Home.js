import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import HoneYourEnglish from '../../components/Hone Your English/HoneYourEnglish'
import HowItWorks from '../../components/How It Works/HowItWorks'
import Navbar from '../../components/Navbar/Navbar'
import StartYourEnglishJourney from '../../components/Start Your English Journey/StartYourEnglishJourney'
import WhatWeOffer from '../../components/What We Offer/WhatWeOffer'
import styles from "./Home.module.css"

const Home = () => {
const navigate=useNavigate()

//CHECK IF USER IS ALREADY LOGGED IN
useEffect(()=>{
  const data=localStorage.getItem("currentLogedIn")
  if(data){navigate("/dashboard")}
},[])

  return (
  <>
  <Navbar/>
   <HoneYourEnglish/>
   <StartYourEnglishJourney/>
   <WhatWeOffer/>
   <HowItWorks/>
   
  </>
  )
}

export default Home