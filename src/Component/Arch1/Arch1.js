import React from 'react'
import '../Arch1/Arch1.css';
import Scroll from '../Scroll/Scroll';
import Scroll1 from '../Scroll1/Scroll1';
import CountUp from 'react-countup';
import Scroll2 from '../Scroll2/Scroll2';
import Scroll3 from '../Scroll3/Scroll3';
const Arch1 = () => {
   
  return (
<div>
<div className='arch120'>
    <div > 
    
    <Scroll targetCount={1000} duration={7000} />
    </div>
    <div className='arch40'>

    </div>
    <div>
    <Scroll1 targetCount={2500} duration={7000} />
    
    </div>
    <div className='arch40'>

</div>
    <div>
    <Scroll2 targetCount={500} duration={7000} />
    </div>
    <div className='arch40'>

</div>
    <div>
    <Scroll3 targetCount={67} duration={7000} />
    </div>

       

    </div>
    <div  style={{textAlign:'center', marginTop:'8rem'}}>
        <p style={{color:'green'}}>Projects</p>
        <h1>Our Unique Latest Projects</h1>
    </div>
</div>
  )
}

export default Arch1
