import React from 'react'
import styles from "./HoneYourEnglish.module.css"

const HoneYourEnglish = () => {
  return (
   <>
    <section className={styles.section}>
    <div className={styles.left}>
        <h1 className={styles.heading}>Hone your english speaking skills over <span className={styles.subHeading}>one-on-one</span> video call</h1>
        <p className={styles.info}>Practice english conversation with excellent communuicators across the country and speak like a PRO 😎.</p>
        <div className={styles.buttonCont}>
            <button className={styles.btn1}>Book a trial</button>
            <button className={styles.btn2}>Download our app</button>
        </div>
    </div>
    <div className={styles.right}>
        <div className={styles.imageCont}></div>
    </div>
   </section>
   </>
  )
}

export default HoneYourEnglish