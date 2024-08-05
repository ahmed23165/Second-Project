import React from 'react'
import { TbChartScatter3D } from "react-icons/tb";
import { IoPieChartSharp } from "react-icons/io5";
import { FaArtstation } from "react-icons/fa6";
import { GiFurnace } from "react-icons/gi";
import '../Services2/Services2.css';
import { TbShoppingCartSearch } from "react-icons/tb";
import { SiSoundcharts } from "react-icons/si";
import { BsBarChartSteps } from "react-icons/bs";
import { PiHeartStraightBold } from "react-icons/pi";
const Services2 = () => {
  return (
    <div>
    <div  className='services20'>
    <div>
          <TbChartScatter3D  size={50} style={{color: 'green'}}/>
          <h5>Planning</h5>
          <p>A small river named Duden<br/>
          flows by their place and<br/>
          supplies it with the necessary<br/>
          regelialia.
          </p>    
    </div>

    <div>
    <IoPieChartSharp   size={50} style={{color: 'green'}}/>
          <h5>Interior Design</h5>
          <p>A small river named Duden<br/>
          flows by their place and<br/>
          supplies it with the necessary<br/>
          regelialia.
          </p>    
    </div>

    <div>
    <FaArtstation   size={50} style={{color: 'green'}}/>
          <h5>Exterior design</h5>
          <p>A small river named Duden<br/>
          flows by their place and<br/>
          supplies it with the necessary<br/>
          regelialia.
          </p>    
    </div>

    <div>
    <GiFurnace  size={50} style={{color: 'green'}}/>
          <h5>Decoration</h5>
          <p>A small river named Duden<br/>
          flows by their place and<br/>
          supplies it with the necessary<br/>
          regelialia.
          </p>    
    </div>
    </div>


    <div  className='services20'>
    <div>
    <SiSoundcharts  size={50} style={{color: 'green'}}/>
          <h5>Furniture</h5>
          <p>A small river named Duden<br/>
          flows by their place and<br/>
          supplies it with the necessary<br/>
          regelialia.
          </p>    
    </div>

    <div>
    <TbShoppingCartSearch     size={50} style={{color: 'green'}}/>
          <h5>Consultation</h5>
          <p>A small river named Duden<br/>
          flows by their place and<br/>
          supplies it with the necessary<br/>
          regelialia.
          </p>    
    </div>

    <div>
    <BsBarChartSteps   size={50} style={{color: 'green'}}/>
          <h5>Restoration</h5>
          <p>A small river named Duden<br/>
          flows by their place and<br/>
          supplies it with the necessary<br/>
          regelialia.
          </p>    
    </div>

    <div>
    <PiHeartStraightBold   size={50} style={{color: 'green'}}/>
          <h5>Building</h5>
          <p>A small river named Duden<br/>
          flows by their place and<br/>
          supplies it with the necessary<br/>
          regelialia.
          </p>    
    </div>
    </div>






    </div>
  )
}

export default Services2
