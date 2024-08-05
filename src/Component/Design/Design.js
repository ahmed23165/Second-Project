import React from 'react'
import { MdOutlineDesignServices } from "react-icons/md";
import { MdSupervisorAccount } from "react-icons/md";
import { IoMdPlanet } from "react-icons/io";
import { FaBuildingUser } from "react-icons/fa6";
import '../Design/Design.css';
const Design = () => {
  return (
    <div  className='design'>
       <div  className='design1'>
       <MdOutlineDesignServices size={50}/><br/>
        <h4>Design Process</h4>
        <p>A small river named Duden<br/>
        flows by their place and supplies it with the necessary<br/>
        regelialia.</p>
        </div>      
        <div  className='design2'>
        <MdSupervisorAccount size={50}/><br/>
        <h4>Supervision</h4>
        <p>A small river named Duden<br/>
        flows by their place and supplies it with the necessary<br/>
        regelialia.</p>
        </div>
        <div className='design3'>
        <IoMdPlanet size={50}/><br/>
        <h4>Supervision</h4>
        <p>A small river named Duden<br/>
        flows by their place and supplies it with the necessary<br/>
        regelialia.</p>
        </div>
        <div className='design4'>
        <FaBuildingUser size={50}/><br/>
        <h4>Build a Home For You</h4>
        <p>A small river named Duden<br/>
        flows by their place and supplies it with the necessary<br/>
        regelialia.</p>
        </div>
    </div>
  )
}

export default Design
