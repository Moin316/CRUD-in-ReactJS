import React, { useEffect, useState } from 'react'
import { getPost,deletePost } from '../api/Postapi'
import '../App.css'
const Posts = () => {
    const [data,setData]=useState([]);
  const getPostData = async () => {
    const response = await getPost();
    setData(response.data);
  }
  useEffect(()=>{
    getPostData();
  },[])
  
  const handledeletePost=async(id)=>{
    try {
        const res=await deletePost(id);
        if(res.status ===200){
            const newUpdatedPost = data.filter((curPost)=>{
                return id!==curPost.id;
            })
            setData(newUpdatedPost);
        }
    } catch (error) {
        console.error(error);
    }
    
  }
  return (
    <section className="section-post ">
      <ul className="h-screen w-full flex flex-wrap  gap-4 ">
        {data.map((post) => (
          <li
            key={post.id}
            className="w-[30%] mb-9 bg-black ml-3 py-3 px-7 shadow-lg shadow-indigo-500/50"
          >
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
            <button>Edit</button>
            <button className="px-5 py-3.5 bg-red-300 text-white hover:bg-red-500" onClick={() => handledeletePost(post.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Posts
