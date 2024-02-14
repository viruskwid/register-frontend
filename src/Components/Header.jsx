import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container">
    <a class="navbar-brand text-white " href="#">EDUCATION</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">About us</a>
        </li>
        <li className='nav-item'>
        <Link to={'/allStudents'}><button className="btn btn-info me-3 ">All Students</button></Link>
        </li>
        <li class="nav-item"><button className='btn btn-black text-white'>Login</button>
</li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header