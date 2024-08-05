import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn,MDBTextArea } from 'mdb-react-ui-kit';
import '../Contact2/Contact2.css';
import Button from 'react-bootstrap/Button';
export default function Contact2() {
  return (
    <div  className='contact33'>
    <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
      

      <MDBInput label='Name' v-model='name' wrapperClass='mb-4' />

      <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' />

      <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' />

      <MDBTextArea wrapperClass='mb-4' label='Message' />

      <Button variant="success">Send Message</Button>
    </form>
 </div>
  );
}