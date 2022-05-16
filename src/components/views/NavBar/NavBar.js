import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" className={`justify-content-between ${styles.navBar}`}>
        <Navbar.Brand href="/" className={styles.navLink}>Waiter.app</Navbar.Brand>
        <Nav>
          <Nav.Link as={NavLink} to="/" className={styles.navLink}>Home</Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
};

export default NavBar;