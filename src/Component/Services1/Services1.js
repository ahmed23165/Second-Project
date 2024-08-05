import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Team1/Team1.css'; 

import { Link } from 'react-router-dom';
function Services1() {
  return (
    
    <div className='Team1'>
    <Navbar collapseOnSelect expand="lg" className="bg">
      <Container>
        <Navbar.Brand href="#home"><span style={{fontWeight: 'bold', fontSize: '1.5rem'}}>ArcLab.</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            
          </Nav>
          <div className='Team2'>
          <Nav>
            <Nav.Link><Link to="/" style={{textDecoration: 'none',color: 'black'}}>Home</Link></Nav.Link>
            <Nav.Link eventKey={2}      >
            <Link to="/about" style={{textDecoration: 'none',color: 'black'}}>About</Link>
            </Nav.Link>
        
          <Nav.Link eventKey={2} >
          <Link to="/team" style={{textDecoration: 'none',color: 'black'}}>Team</Link>
          </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Link to="/services" style={{textDecoration: 'none',color: 'black'}}>Services</Link>
            </Nav.Link>

            <Nav.Link href="#deets">
            <Link to="/projects" style={{textDecoration: 'none',color: 'black'}}>Projects</Link>
            </Nav.Link>
            <Nav.Link >
            <Link to="/blogs" style={{textDecoration: 'none',color: 'black'}}>Blog</Link>
            </Nav.Link>
            <Nav.Link href="#deets">
            <Link to="/contact" style={{textDecoration: 'none',color: 'black'}}>Contact</Link>
            </Nav.Link>
          </Nav>
    </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   


   <div  className='Team88'>
    <p>HOME</p>
    
    <h1>Services</h1>
   </div>
    </div>



  );
}

export default Services1;
