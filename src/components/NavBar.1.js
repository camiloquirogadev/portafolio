export const NavBar = () => {
    return (
        <NavBar expand="lg">
            <Container>
                <NavBar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </NavBar.Brand>
                <NavBar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                    <Navbar.Toggle />
                    <NavBar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#Skills">Skills</Nav.Link>
                            <Nav.Link href="#Projets">#Projets</Nav.Link>
                        </Nav>
                    </NavBar.Collapse>
                </></Container>
        </NavBar>
    );
};
