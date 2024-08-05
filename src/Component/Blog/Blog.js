import React from 'react'
import '../Blog/Blog.css';
import pic8 from '../Asset/pic8.webp'
import pic4 from '../Asset/pic4.webp'
import pic12 from '../Asset/pic12.webp'
import pic11 from '../Asset/pic11.webp'
const Blog = () => {
  return (
    <div>
    <div className='blog1'>
      <p style={{color:'green'}}>BLOG</p>
      <h1>Recent Blog</h1>
    </div>
    <div className='blog6'>
    <div>
       <img className='blog2' src={pic8}/>
       <p>JUNE 01,2020 ADMIN 3</p>
       <h5>Make Peace With Your<br/>Broken Pieces</h5> 
    </div>
    <div>
       <img className='blog3' src={pic4}/>
       <p>JUNE 01,2020 ADMIN 3</p>
       <h5>Make Peace With Your<br/>Broken Pieces</h5> 
    </div>
    <div>
       <img className='blog4' src={pic12}/>
       <p>JUNE 01,2020 ADMIN 3</p>
       <h5>Make Peace With Your<br/>Broken Pieces</h5> 
    </div>
    <div>
       <img className='blog5' src={pic11}/>
       <p>JUNE 01,2020 ADMIN 3</p>
       <h5>Make Peace With Your<br/>Broken Pieces</h5> 
    </div>
    </div>
</div>
  )
}

export default Blog
