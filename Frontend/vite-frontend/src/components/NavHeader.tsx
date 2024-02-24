import logo from "../assets/logo-light-blue.png"
type Props = {
}

const NavHeader = (props: Props) => {
  return (
        <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="logo" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      
        <ul className="nav-links" id="nav-links">
          <li>
            <a href="#home" className="nav-link"> Domov </a>
          </li>

          <li>
            <a href="#about" className="nav-link"> O-nas </a>
          </li>

          <li>
            <a href="#services" className="nav-link"> Storitve </a>
          </li>

          <li>
            <a href="#tours" className="nav-link"> Kontakt</a>
          </li>
        </ul>

        <ul className="nav-icons">
          <li>
            <a href="https://www.twitter.com" target="_blank" className="nav-icon"
              ><i className="fab fa-facebook"></i></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" className="nav-icon"
              ><i className="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" className="nav-icon">
                <i className="fab fa-squarespace"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavHeader