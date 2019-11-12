import React from "react"
import { Link } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const nav = () => {
  const bars = <FontAwesomeIcon icon={faBars} />
  return (
    <>
      <nav className="bottom-border">
        <div className="title">
          <h1>Jessica Evans</h1>
        </div>
        <div className="dropdown">
          <button className="dropbtn">{bars}</button>
          <div className="dropdown-content">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default nav
