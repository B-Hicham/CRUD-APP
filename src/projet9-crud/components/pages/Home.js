import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser = async () =>{
        const result = await axios.get("http://localhost:3001/users");
        setUsers(result.data)
    }
    const deleteUser = async id =>{
      await axios.delete(`http://localhost:3001/users/${id}`)
      loadUser();
    }
    return (
    <>
        <h1>Home Page</h1>
        <table class="table">
  <thead>
    <tr className='bg-dark text-white'>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user,index)=>(
        <tr>
            <th scope='row'>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <Link className='btn btn-primary' to={`/User/${user.id}`}><i class="fa-solid fa-eye"></i></Link>
                <Link className='btn btn-warning mx-3' to={`/user/edit/${user.id}`}><i class="fa-solid fa-pen-to-square"></i></Link>
                <Link className='btn btn-danger' onClick={()=>{deleteUser(user.id)}}><i class="fa-solid fa-trash"></i></Link>
            </td>
        </tr>
    ))}
  </tbody>
</table>
    </>
  )
}

export default Home