import React from 'react'
import '../Team2/Team2.css'
import team7 from '../Asset/team7.webp';
import team8 from '../Asset/team8.webp';
import team6 from '../Asset/team6.webp';
import team3 from '../Asset/team3.webp';
import team1 from '../Asset/team1.webp';
import team2 from '../Asset/team2.webp';
import team4 from '../Asset/team4.webp';
import team5 from '../Asset/team5.webp';
const Team2 = () => {
  return (
    <div>
    <div className='team23'>
      <div>
        <img  className='team22' src={team7}/>
        <p style={{color: 'green'}}>ARCHITECT</p>
      </div>
      <div>
      <img  className='team22' src={team8}/>
      <p style={{color: 'green'}}>ARCHITECT</p>
      </div>
      <div>
      <img  className='team22' src={team6}/>
      <p style={{color: 'green'}}>ARCHITECT</p>
      </div>
      <div>
      <img  className='team22' src={team3}/>
      <p style={{color: 'green'}}>ARCHITECT</p>
      </div>
    </div>




    <div className='team23'>
      <div>
        <img  className='team22' src={team2}/>
        <p style={{color: 'green'}}>ARCHITECT</p>
      </div>
      <div>
      <img  className='team22' src={team4}/>
      <p style={{color: 'green'}}>ARCHITECT</p>
      </div>
      <div>
      <img  className='team22' src={team1}/>
      <p style={{color: 'green'}}>ARCHITECT</p>
      </div>
      <div>
      <img  className='team22' src={team5}/>
      <p style={{color: 'green'}}>ARCHITECT</p>
      </div>
    </div>
    </div>
  )
}

export default Team2
