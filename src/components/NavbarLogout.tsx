import Link from 'next/link'
import { Container, Nav, Navbar } from 'react-bootstrap';

// Container adds extra padding
// When you are LoggedIn

export function NavbarLogout() {
    return (
        <>
        <Navbar bg="dark" variant="dark" collapseOnSelect fixed='top' style={{ position: "fixed" }}>
            <Container>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Link href="/" passHref>
                            <Nav.Link>Buug</Nav.Link>
                        </Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Link href="/" passHref>
                            <Nav.Link eventKey="1">Home</Nav.Link>
                        </Link>
                        <Link href="/Dashboard" passHref>
                            <Nav.Link eventKey="2">Dashboard</Nav.Link>
                        </Link>
                        <Link href="/api/auth/logout" passHref>
                            <Nav.Link eventKey="3">Logout</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}