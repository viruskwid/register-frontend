import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { addStudentAPI } from '../Services/AllAPIs'

function Register() {
  const [registerData,SetRegisterData]=useState({
    firstName:"",lastName:"",address:"",email:"",gender:"",mobile:"",password:"",dateofBirth:"",course:""
})
const [selectedOption, setSelectedOption] = useState();
const handleOptionChange = (e) => {
setSelectedOption(e.target.value);
};
useEffect(()=>{
SetRegisterData({...registerData,gender:selectedOption})
},[selectedOption])
console.log(registerData);
const handleRegister=async()=>{
    const {firstName,lastName,address,email,gender,mobile,password,dateofBirth,course}=registerData
    if(!firstName||!lastName|| !address||!email||!gender||!mobile||!password||!dateofBirth||!course){
        alert("please fill the form Completely!!!")
    }else{
        try{
            const result =await addStudentAPI(registerData)
        if(result.status==200){
            console.log(result.data)
        }else{
            console.log(result.response.data)
        }
        }catch(err){
         console.log(err);
        }
    }
}
  return (
    <div  style={{ backgroundColor:'#50717b'}}>
    <Header/>
     <div  style={{ backgroundColor:'#50717b'}} className='container '>
     <div  style={{ backgroundColor:'#50717b'}}   className='d-flex align-items-center p-5'>
                    <div className="col-lg-5">
                        <img style={{ width: '500px', height: '500px' }} className='img-fluid rounded ' src="https://i.pinimg.com/736x/71/da/54/71da54ba1000c33f01d959993b25f86d.jpg" alt="no image" />
                       <div className='text-start'> <Link to={'/'} className='btn btn-dark'>Back</Link></div>
                    </div>
                    <div className="col-lg-9 align-items-center ms-5">
                        <h1 className='ms-5 text-white'>Apply as a Student</h1>
                        <hr />
                        <div className='d-flex'>
                            <div className='ms-5 me-5'>
                            <div class="mb-3">
                           <label for="first" class="form-label text-white">First Name</label>
                            <input type="email" class="form-control"  placeholder="Enter your first name" onChange={e=>SetRegisterData({...registerData,firstName:e.target.value})} />
                          </div>
                          <div class="mb-3">
                           <label for="last" class="form-label text-white">Last name</label>
                            <input type="email" class="form-control"  placeholder="Enter your Email" onChange={e=>SetRegisterData({...registerData,lastName:e.target.value})}/>
                          </div>
                          <div class="mb-3">
                          <label for="exampleFormControlTextarea1" class="form-label text-white">Address</label>
                          <textarea class="form-control"  rows="2" onChange={e=>SetRegisterData({...registerData,address:e.target.value})} ></textarea>
                          </div>
                          <div class="mb-3">
                           <label for="exampleFormControlInput1" class="form-label text-white">Email address</label>
                            <input type="email" class="form-control" placeholder="name@example.com" onChange={e=>SetRegisterData({...registerData,email:e.target.value})}/>
                          </div>
                          <div class="mb-3">
                           <label for="exampleFormControlInput1" class="form-label text-white">Gender</label>
                           <select class="form-select" aria-label="Default select example" onChange={handleOptionChange}>
                           <option selected>Select</option>
                           <option value="1">Male</option>
                           <option value="2">Female</option>
                           <option value="3">Other</option>
                            </select>
                          </div>

                            </div>
                            <div className="ms-5">
                            <div className='ms-5 me-5'>
                            <div class="mb-3">
                           <label for="first" class="form-label text-white">Mobile</label>
                            <input type="email" class="form-control"  placeholder="Enter your mobile"  onChange={e=>SetRegisterData({...registerData,mobile:e.target.value})}/>
                          </div>
                          <div class="mb-3">
                           <label for="last" class="form-label text-white">Password</label>
                            <input type="password" class="form-control"  placeholder="Enter password" onChange={e=>SetRegisterData({...registerData,password:e.target.value})} />
                          </div>
                          <div class="mb-3">
                           <label for="last" class="form-label text-white">DOB</label>
                            <input type="date" class="form-control"  placeholder="Enter your password"  onChange={e=>SetRegisterData({...registerData,dateofBirth:e.target.value})}/>
                          </div>
                          <div class="mb-3">
                           <label for="exampleFormControlInput1 " class="form-label text-white">Select course</label>
                           <select class="form-select" aria-label="Default select example" onChange={e=>SetRegisterData({...registerData,course:e.target.value})} >
                           <option selected>Select</option>
                           <option value="1">BCA</option>
                           <option value="2">BSC</option>
                           <option value="3">MCA</option>
                            </select>
                          </div>
                          <div className='mt-5 ms-5'><Link onClick={handleRegister} style={{backgroundColor:'#8ecccc'}} className='btn shadow '>Register<i class="fa-solid fa-arrow-right ms-3"></i></Link></div>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
     </div>
    </div>
  )
}

export default Register

