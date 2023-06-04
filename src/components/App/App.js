import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { isMobile } from "react-device-detect";
import Navbar from 'components/Navbar/Navbar.js';
import * as S from './App-styles';
import Home from 'components/Static/Home';
import Welcome from 'components/Static/Welcome';
import Staff from 'components/Static/Staff';
import Workshops from 'components/Static/Workshops';
import Schedule from 'components/Static/Schedule';
import Dances from 'components/Static/Dances';
import Fragrance from 'components/Static/Fragrance';
import Contact from 'components/Static/Contact';
import Registration from 'components/Registration';

export default function App() {
  return (
    <>
      <S.GlobalStyle />
      <S.Container className={isMobile ? 'mobile' : 'desktop'}>
        <Router>
          <Navbar />
          <S.Spacer />
          <S.Spacer />
          <Routes>
            <Route exact path="/" element=<Home /> />
            <Route exact path="/welcome" element=<Welcome /> />
            <Route exact path="/staff" element=<Staff /> />
            <Route exact path="/workshops" element=<Workshops /> />
            <Route exact path="/schedule" element=<Schedule /> />
            <Route exact path="/dances" element=<Dances /> />
            <Route exact path="/fragrance" element=<Fragrance /> />
            <Route exact path="/contact" element=<Contact /> />
            <Route exact path="/registration" element=<Registration /> />
          </Routes>
        </Router>
      </S.Container>
    </>
  );
}
