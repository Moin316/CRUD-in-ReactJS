import React, { useEffect } from 'react'
import { getPost } from './api/Postapi'
const App = () => {
  const getPostData = async () => {
    const response = await getPost();
    console.log(response.data);
  }
  useEffect(()=>{
    getPostData();
  },[])
  return (
    <div>
      <h1> hello </h1>
    </div>
  )
}

export default App
