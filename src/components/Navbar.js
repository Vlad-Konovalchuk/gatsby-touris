import React, { useState } from "react"
import { Link } from "gatsby"
import classNames from "classnames/bind"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import logo from "../images/logo.png"

export default function Navbar() {
  const [isOpen, toggleIsOpen] = useState(false)
  const toggleNav = () => {
    toggleIsOpen(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} c lassName={styles.brandLogo} alt="Logo" />
          <button className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={classNames(styles.navLinks, { [styles.showNav]: isOpen })}
        >
          {links.map((item, idx) => (
            <li key={idx}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, idx) => (
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
      </div>
    </nav>
  )
}
