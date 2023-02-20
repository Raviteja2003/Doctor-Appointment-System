import React ,{useEffect} from 'react'
import axios from 'axios'
const HomePage = () => {
  //login user data
  const getUserData = async() =>{
    const res = await axios.post("/api/v1/user/getUserData",{},{
      headers:{
        Authorization : "Bearer "+localStorage.getItem("token"),
      },
    })
  }
  useEffect(()=>{
    getUserData()
  },[])
  return (
    <div>
        <h1>HomePage</h1>
    </div>
  )
}

export default HomePage