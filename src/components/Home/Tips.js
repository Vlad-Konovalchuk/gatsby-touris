import React from "react"
import Title from "../Title"
import tips from "../../constants/tips"
import styles from "../../css/tips.module.css"
export default function Tips() {
  return (
    <section className={styles.tips}>
      <Title title="hot" subtitle="tips" />
      <div className={styles.center}>
        {tips.map((item, idx) => {
          return (
            <article key={idx} className={styles.tip}>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
