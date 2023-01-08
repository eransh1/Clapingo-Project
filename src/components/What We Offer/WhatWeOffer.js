import React from 'react'
import styles from "./WhatWeOffer.module.css"

const WhatWeOffer = () => {
  return (
    <section className={styles.section}>
<h3 className={styles.sectionHeading}>What we offer ?</h3>
<div className={styles.offerCont}>
    <div className={styles.cardCont}>
        <div className={styles.card1}>
            <div className={styles.top}></div>
            <div className={styles.bottom}>
                <h4 className={styles.cardHeading}>Customised Curriculum</h4>
                <p className={styles.cardInfo}>Customised sessions and module for Basic, Intermediate and Advanced learners.</p>
            </div>
        </div>
        <div className={styles.card2}>
        <div className={styles.top}></div>
            <div className={styles.bottom}>
                <h4 className={styles.cardHeading}>Experimental Learning </h4>
                <p className={styles.cardInfo}>Do not study English, rather consume and use it.</p>
            </div>
        </div>
        <div className={styles.card3}>
        <div className={styles.top}></div>
            <div className={styles.bottom}>
                <h4 className={styles.cardHeading}>Shadowing Method</h4>
                <p className={styles.cardInfo}>Think and speak in English rather than translating it from mother tongue.</p>
            </div>
        </div>
    </div>
</div>
    </section>
  )
}

export default WhatWeOffer