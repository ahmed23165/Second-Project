import React from "react";
import pic14 from '../Asset/pic14.webp';
import '../ArchLab/ArchLab.css';
import { MDBInput, MDBCheckbox, MDBBtn,MDBTextArea } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';

const ArchLab = () => {
  return (
    <div className="arch7">
      <div  className="arch8">
      <h1>ArchLab</h1>
      <p>
        A small river named Duden flows by their place and <br/>supplies it with the
        necessary regelialia. It is a<br/> paradisematic country, in which roasted
        parts of<br/> sentences fly into your mouth.<br/>
         On her way she met a copy. The
        copy warned the Little<br/> Blind Text, that where it came from it would have
        been<br/> rewritten a thousand times and everything that was<br/> left from its
        origin would be the word "and" and the<br/> Little Blind Text should turn
        around and return to its<br/> own, safe country. But nothing the copy said
        could<br/> convince her and so it didn’t take long until a few<br/> insidious Copy
        Writers ambushed her, made her drunk<br/> with Longe and Parole and dragged
        her into their<br/> agency, where they abused her for their.
      </p>
      </div>
    
      <div>
        <img className="arch1" src={pic14}/>
      </div>
      <div className="contact313">
        <h4  style={{textAlign:'center'}}>Request a Quote</h4>
    <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
      

      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

      <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

      <MDBTextArea wrapperClass='mb-4' label='Message' />

      <Button variant="success">Send Message</Button>
    </form>
    </div>
    </div>
  );
};

export default ArchLab;
