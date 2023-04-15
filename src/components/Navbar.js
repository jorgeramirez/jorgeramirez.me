import React, { useContext } from "react"
import ThemeContext from "../utils/theme"
import { Navbar, Nav, Form, Container } from "react-bootstrap"
import { Link } from "gatsby"
import "./Fontawesome.js"

export default () => {
  const { toString } = useContext(ThemeContext)
  return (
    <Navbar variant={toString()} fixed="top" collapseOnSelect expand="md">
      <Container>
        <Navbar.Brand className="pl-5 ml-5" as={Link} to="/">
          127.0.0.1
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="pr-3 mr-4 nav-links">
            <Nav.Link className="ml-2" as={Link} to="/about" title="About">
              About
            </Nav.Link>
            <Nav.Link className="ml-2" as={Link} to="/publications" title="Publications">
              Publications
            </Nav.Link>
            <a className="ml-2 nav-link" href="https://blog.jramirez.me" title="Blog">
              Blog
            </a>
            <Nav.Link className="ml-2" as={Link} to="/projects" title="Projects">
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
