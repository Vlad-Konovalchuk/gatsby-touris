import React from "react"
import { Link } from "gatsby"
import styles from "../css/footer.module.css"
import links from "../constants/links"
import socialLinks from "../constants/social-icons"
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, idx) => (
          <Link key={idx} to={item.path}>
            {item.text}
          </Link>
        ))}
      </div>
      <div className={styles.icons}>
        {socialLinks.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </div>
      <div>
        copyright &copy; Awesome Hapi {new Date().getFullYear} all rights
        reserved
      </div>
    </footer>
  )
}
