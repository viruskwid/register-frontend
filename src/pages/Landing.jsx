import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
    <Header/>
    <div>
<div style={{height:'100vh', width:'100%', backgroundColor:'#50717b'}} className='d-flex align-items-center '>

    <div className='ms-5'>
        <div>
            <h4 className='text-white'>EDUCATION</h4>
            <h6 className='text-white'>Dedicated educators collaborate, innovate, inspire, <br/>and empower students to reach their full potential through teamwork, support, and passion.</h6>
        </div>
         <div className='d-flex justify-content-end  '> <Link to={'/register'} style={{backgroundColor:'#8ecccc'}} className='btn shadow '>Register<i class="fa-solid fa-arrow-right ms-3"></i></Link></div>
    </div>
</div>
    </div>
    </>
  )
}

export default Landing