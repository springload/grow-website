import * as React from "react"
import * as styles from "../../Index.module.scss"
import AnchorLink from "react-anchor-link-smooth-scroll"

import ContactData from "./ContactData"

const Contact = () => {
  return (
    <div className={styles.sectionContact}>
      <div className={styles.gutters}>
        <div className={styles.flexWrapper}>
          <div className={styles.flexItem}>
            <h2>Apply</h2>
            <p
              className={`${styles.uMarginBottomXXL} ${styles.headingMediumLight}`}
            >
              Want to learn more about wonderful world of coding? Come along to
              our next free workshop – we’d love to have you!
            </p>
            <p className={styles.uMarginTopS}>
              <AnchorLink href="#">Apply to our next workshop</AnchorLink>
            </p>
          </div>

          <div className={styles.flexItem} id="contact">
            <h2>Get in touch</h2>
            <p
              className={`${styles.uMarginBottomXL} ${styles.headingMediumLight}`}
            >
              {" "}
              Any questions or suggestions, or want to be up to date on what’s
              happening? Contact us via email or phone, or follow us on social
              media.
            </p>
            <p>
              {ContactData.map(item => {
                return (
                  <div className={styles.inline}>
                    <AnchorLink href={item.href} className={styles.linkContact}>
                      {item.text}
                    </AnchorLink>
                  </div>
                )
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact