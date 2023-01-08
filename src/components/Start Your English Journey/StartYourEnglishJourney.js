import React from 'react'
import styles from "./StartYourEnglishJourney.module.css"

const StartYourEnglishJourney = () => {
  return (
    <section className={styles.section2}>
        <div className={styles.left}>
            <div className={styles.top}>
                <div className={styles.smallCont}>
                    <h3 className={styles.smallContHeading}>50K <span className={styles.smallContSubHeading}>+</span></h3>
                    <p className={styles.info}>Mobile Downloads</p>
                </div>
                <div className={styles.smallCont}>
                <h3 className={styles.smallContHeading}>80K <span className={styles.smallContSubHeading}>+</span></h3>
                    <p className={styles.info}>Happy Learners</p>
                </div>
            </div>
            <div className={styles.bottom}>
            <div className={`${styles.smallCont} ${styles.bottomLeftSmallCont}`}>
                 <h3 className={styles.smallContHeading}>53K <span className={styles.smallContSubHeading}>+</span></h3>
                 <p className={styles.info}>Sessions per month</p>
            </div>
                <div className={styles.smallCont}>
                <h3 className={styles.smallContHeading}>200K <span className={styles.smallContSubHeading}>+</span></h3>
                 <p className={styles.info}>Speakers around the globe</p>
                </div>
            </div>
        </div>
        <div className={styles.right}>
            <p className={styles.rightInfoTop}>Book a trial</p>
            <h3 className={styles.rightHeading}>Start your English speaking journey today!</h3>
            <p className={styles.rightInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque pellentesque praesent vitae sit sagittis venenatis.</p>
            <button className={styles.rightButton}>Book a trial</button>
        </div>
    </section>
  )
}

export default StartYourEnglishJourney