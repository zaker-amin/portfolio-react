import React from "react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"

const ContactIcons = () => {
  return (
    <>
      <a
        href="https://www.linkedin.com/in/zaker-amin/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn className="transition-all duration-300 hover:scale-125" />
      </a>
      <a
        href="https://github.com/zaker-amin"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="transition-all duration-300 hover:scale-125" />
      </a>
    </>
  )
}

export default ContactIcons
