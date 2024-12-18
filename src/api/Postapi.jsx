import React from 'react'
import axios from 'axios'
export const api=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})
export const getPost=()=>{
    return api.get('/posts')
}
export const deletePost=(id)=>{
    return api.delete(`/posts/${id}`);
}
const Postapi = () => {
  return(
    <div>
      <h1>Posts</h1>
      {/* Implement your post list here */}
    </div>
  )
  
}

export default Postapi
