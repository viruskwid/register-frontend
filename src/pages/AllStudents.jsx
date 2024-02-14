import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getAllStudentsAPI } from '../Services/AllAPIs';
import { Link } from 'react-router-dom';

function AllStudents() {
    const [allStudents,setAllStudents]=useState()
    const getAllStudents=async()=>{
      const result =await getAllStudentsAPI()
      setAllStudents(result.data)
    }
    useEffect(()=>{
        getAllStudents()
    },[])
    console.log(allStudents)
  return (
    <>
         <h1 className='text-center'>All Students List</h1>
        
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Gender</th>
                <th>Phone</th>
                <th>Password</th>
                <th>Date Of Birth</th>
                <th>Course</th>
              </tr>
            </thead>
           { allStudents?.map((student,index)=>(
            <tbody>
              <tr>
                <td>{index+1}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.address}</td>
                <td>{student.gender}</td>
                <td>{student.mobile}</td>
                <td>{student.password}</td>
                <td>{student.dateofBirth}</td>
                <td>{student.course}</td>
              </tr>
              </tbody>
             
        ))
         }
     </Table>
     <div className='text-start'> <Link to={'/'} className='btn btn-dark'>Back</Link></div>
    </>
  )
}

export default AllStudents