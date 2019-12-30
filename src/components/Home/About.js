import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import image from "../../images/defaultBcg.jpeg"
export default function About() {
  return (
    <section className={styles.about}>
      <Title title="avout" subtitle="hampi" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div>
            <img src={image} alt="About Company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>The abode of bygone ruins</h4>
          <p>
            Hampi, the city of ruins, is a UNESCO World Heritage Site. Situated
            in the shadowed depth of hills and valleys in the state of
            Karnataka, this place is a historical delight for travellers.
          </p>
          <p>
            Surrounded by 500 ancient monuments, beautiful temples, bustling
            street markets, bastions, treasury building and captivating remains
            of Vijayanagar Empire, Hampi is a backpacker's delight.
          </p>
          <a
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            href="[https://en.wikipedia.org/wiki/Hampi](https://en.wikipedia.org/wiki/Hampi)"
          >
            Read more
          </a>
        </article>
      </div>
    </section>
  )
}
