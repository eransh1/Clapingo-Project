import React,{useEffect, useState} from 'react'
import styles from "./HowItWorks.module.css"
import mobileImg from "../../images/mobile.png"

const HowItWorks = () => {
 const [width, setWidth] = useState(window.innerWidth);
const updateWidth = () => {
     setWidth(window.innerWidth);
      };
    
useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
      }, []);

  return (
    <section className={styles.section}>
    <div className={styles.container}>
    <h1 className={styles.heading}>How it works ?</h1>
    {width>1380?
    <div className={styles.mainCont}>
    <div className={styles.cardConatiner}>
    <div className={styles.card1}>
        <h3 className={styles.cardHeading}>1. Create Account</h3>
        <p className={styles.cardInfo}>Create your account using phone number or email and take a free trial at ₹1.</p>
      </div> 
      <div className={styles.card1}>
        <h3 className={styles.cardHeading}>3. Select time slot</h3>
        <p className={styles.cardInfo}>Subscribe & select any time slot between 10 AM to 12 midnight.</p>
      </div> 
    </div>
      
      <div className={styles.mobile}>
<img className={styles.mobileImage} src={mobileImg} alt="mobile" />
      </div> 
      <div className={styles.cardConatiner}>
    <div className={styles.card1}>
        <h3 className={styles.cardHeading}>2. Subscribe</h3>
        <p className={styles.cardInfo}>Choose your preferred duration and select subscription package for your sessions. </p>
      </div> 
      <div className={styles.card1}>
        <h3 className={styles.cardHeading}>4. You are done</h3>
        <p className={styles.cardInfo}>That’s it! Start practicing and reach your learning goal in speaking.</p>
      </div> 
    </div>
    </div>
    :null}

    
    {width<1381&&width>841?<>
        <div className={styles.mainCont1}>

        <div className={styles.top}>
        <div className={styles.cardConatiner1}>
    <div className={styles.card1}>
        <h3 className={styles.cardHeading}>1. Create Account</h3>
        <p className={styles.cardInfo}>Create your account using phone number or email and take a free trial at ₹1.</p>
      </div> 
      <div className={styles.card1}>
        <h3 className={styles.cardHeading}>3. Select time slot</h3>
        <p className={styles.cardInfo}>Subscribe & select any time slot between 10 AM to 12 midnight.</p>
      </div> 
    </div>
      
      <div className={styles.cardConatiner1}>
    <div className={styles.card1}>
        <h3 className={styles.cardHeading}>2. Subscribe</h3>
        <p className={styles.cardInfo}>Choose your preferred duration and select subscription package for your sessions. </p>
      </div> 
      <div className={styles.card1}>
        <h3 className={styles.cardHeading}>4. You are done</h3>
        <p className={styles.cardInfo}>That’s it! Start practicing and reach your learning goal in speaking.</p>
      </div> 
    </div>
        </div>

    <div className={styles.mobile1}>
<img className={styles.mobileImage} src={mobileImg} alt="mobile" />
      </div> 
    </div>
    </>:null}

{width<841?<>
    <div className={styles.card1}>
        <h3 className={styles.cardHeading}>1. Create Account</h3>
        <p className={styles.cardInfo}>Create your account using phone number or email and take a free trial at ₹1.</p>
      </div> 
      <div className={styles.card1}>
        <h3 className={styles.cardHeading}>2. Subscribe</h3>
        <p className={styles.cardInfo}>Choose your preferred duration and select subscription package for your sessions. </p>
      </div> 
      <div className={styles.card1}>
        <h3 className={styles.cardHeading}>3. Select time slot</h3>
        <p className={styles.cardInfo}>Subscribe & select any time slot between 10 AM to 12 midnight.</p>
      </div> 
      <div className={styles.card1}>
        <h3 className={styles.cardHeading}>4. You are done</h3>
        <p className={styles.cardInfo}>That’s it! Start practicing and reach your learning goal in speaking.</p>
      </div>
      <div style={{display:"flex"}}>
      <div className={styles.mobile1}>
<img className={styles.mobileImage} src={mobileImg} alt="mobile" />
      </div> 
      </div>
      
</>:null}

    </div>
    </section>
  )
}

export default HowItWorks