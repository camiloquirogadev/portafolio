import { useState,  useEffect } from "react";
import { Navbar, Container} from "react-bootstrap";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect (() => {
        const onScroll = () => {
            if (window.scrolly > 50){
                seScrolled(true);
            } else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <NavBar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <NavBar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </NavBar.Brand>
                <NavBar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                    </NavBar.Toggle>
                    <NavBar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#Skills" className={activeLink === 'skill' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#Projets" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>#Projets</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="#"><img src={} alt="" /></a>
                                <a href="#"><img src={} alt="" /></a>
                                <a href="#"><img src={} alt="" /></a>
                            </div>
                            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                             </span>
                    </NavBar.Collapse>
                    </Container>
        </NavBar>
    );
};
