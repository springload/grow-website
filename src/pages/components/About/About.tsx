import * as React from "react"
import * as styles from "../../Index.module.scss"

const About = () => {
  return (
    <div className={styles.aboutSection} id="about">
      <div className={styles.aboutHeader}>
        <h1 className={styles.aboutHeading}>
          Empowering women to thrive in tech
        </h1>
      </div>
      <p className={`${styles.uWidthEightyPercent} ${styles.paragraphLarge}`}>
        Grow offers free workshops dedicated to helping all women learn the
        basics of web development. If you have little or no experience in
        coding, Grow provides a safe space for you to discover the opportunities
        in tech. Get a feel for it, see if you like it or not. Maybe even make a
        career out of it. Or walk away vowing never to touch code again — that’s
        totally okay too.
      </p>
    </div>
  )
}

export default About
