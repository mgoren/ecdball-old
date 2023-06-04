import { NavLink } from 'react-router-dom';
import * as S from './Navbar-styles.js';

export default function Navbar() {

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" activeclassname="active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeclassname="active" to="/welcome">Welcome</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeclassname="active" to="/staff">Caller & Band</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeclassname="active" to="/workshops">Workshops</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeclassname="active" to="/schedule">Schedule</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeclassname="active" to="/dances">Dances</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeclassname="active" to="/fragrance">Fragrance-Free</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeclassname="active" to="/contact">Contact Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeclassname="active" to="/registration">Registration</NavLink>
              </li>
              <span className="navbar-text">
                {window.location.hostname === 'localhost' && <S.LocalhostBanner>[ LOCALHOST ]</S.LocalhostBanner>}
              </span>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
