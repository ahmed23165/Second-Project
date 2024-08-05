import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Navbars/Navbars.css'; 
import Button from 'react-bootstrap/Button';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { Link } from 'react-router-dom';
function CollapsibleExample() {
  return (
    
    <div className='navbar1'>
    <Navbar collapseOnSelect expand="lg" className="bg">
      <Container>
        <Navbar.Brand href="#home"><span style={{fontWeight: 'bold', fontSize: '1.5rem'}}>ArcLab.</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            
          </Nav>
          <div className='navbar2'>
          <Nav>
            <Nav.Link><Link to="/" style={{textDecoration: 'none',color: 'black'}}>Home</Link></Nav.Link>
            <Nav.Link eventKey={2}      >
            <Link to="/about" style={{textDecoration: 'none',color: 'black'}}>About</Link>
            </Nav.Link>
        
          <Nav.Link>
          <Link to="/team" style={{textDecoration: 'none',color: 'black'}}>Team</Link>
          </Nav.Link>
            <Nav.Link >
            <Link to="/services" style={{textDecoration: 'none',color: 'black'}}>Services</Link>
               </Nav.Link>

            <Nav.Link >
            <Link to="/projects" style={{textDecoration: 'none',color: 'black'}}>Projects</Link>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
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
    <div className='navbar7'>
    <div>
   <h1 className='navbar8'>Modern<br/>Innovative<br/>Architecture</h1>     <p>From as low as $20 A small river named Duden flows by their place and<br/>
      supplies it with the necessary regelialia.
      </p>
      <div className='navbar5'>
        <div>
      <Button variant="success" size="lg">
          Explore Projects
        </Button>
        </div>
<div className='navbar6'>        
      <Button variant="success"><MdOutlineSlowMotionVideo size={30}/></Button><span style={{paddingLeft: '1rem'}}>Watch our video</span>
     </div>
      </div>
    </div>
    </div>
    </div>



  );
}

export default CollapsibleExample;