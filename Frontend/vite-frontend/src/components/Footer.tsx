import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        <li>
          <a href="#home" className="footer-link">Domov</a>
        </li>
        <li>
          <a href="#about" className="footer-link">O-nas</a>
        </li>
        <li>
          <a href="#services" className="footer-link">Storitve</a>
        </li>
        <li>
          <a href="#featured" className="footer-link">Kontakt</a>
        </li>
      </ul>
      <ul className="footer-icons">
        <li>
          <a href="https://www.twitter.com" target="_blank" className="footer-icon"><i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" className="footer-icon"
            ><i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" className="footer-icon"><i className="fab fa-squarespace"></i></a>
        </li>
      </ul>
      <p className="copyright">
       copyright &copy; HRIBI-IT
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer