import React from "react";
import styles from "./NavbarHome.module.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import NKLogo from "../../Images/NKLogo.PNG";

// import nested comp
import { Sliders, Footer, FreqQuestion } from "../index";
import { Sliders2 } from "../Sliders/Sliders2";
export const NavbarHome = () => {
  return (
    <div className={` ${styles.NavbarHome_Div}`}>
      <Navbar bg="dark" variant="dark" className={` ${styles.NavbarHome}`}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={NKLogo}
              className={`d-inline-block align-top  ${styles.NavbarHome_logo}`}
            />{" "}
          </Navbar.Brand>

          <Nav
            className={`justify-content-end ${styles.mainHomeLinks}`}
            activeKey="/home"
          >
            <Nav.Item>
              <Nav.Link
                href="/home"
                className={` ${styles.NavbarHome_HomeLink}`}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/home"
                className={` ${styles.NavbarHome_HomeLink}`}
              >
                MemberShip
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/home"
                className={` ${styles.NavbarHome_HomeLink}`}
              >
                Arists
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/home"
                className={` ${styles.NavbarHome_HomeLink}`}
              >
                Sleeper Hits
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/home"
                className={` ${styles.NavbarHome_HomeLink}`}
              >
                Merchandise
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/home"
                className={` ${styles.NavbarHome_HomeLink}`}
              >
                Team
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      <div>
        <Sliders />
        <Sliders2 />
        <Footer />
        {/* <FreqQuestion /> */}
      </div>
    </div>
  );
};
