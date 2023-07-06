import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/pic1.png`} alt="" />
      </Link>
      <header>
        <h2>FRAGE</h2>
        <p><a href="mailto:frageperez@yahoo.com">frageperez@yahoo.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Frage. I am an <a href="/">EARIST</a> graduate,
        and a Web Developer at <a href="https://datagenf.com">Datagen Facilities</a>. Previously,
        I was Jr. programmer at <a href="/"> Northpoint Development Bank</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Frage R&apos;Perez <Link to="https://www.linkedin.com/in/frage-perez-59b5911ba/">linkedin/frageperez</Link>.</p>
    </section>
  </section>
);

export default SideBar;
