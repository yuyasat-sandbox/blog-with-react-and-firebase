import React, { useEffect, useState } from 'react'
import "./Home.css";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase.js"

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"))
      setPostList(data.docs.map((doc => ({ ...doc.data(), id: doc.id }))));
    };
    getPosts()
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/"
  }
  return (
    <div className='homePage'>
      {postList.map((post => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">
              {post.postsText}
            </div>
            <div className="nameAndDeleteButton">
              <h3>{post.auther.username}</h3>
              {post.auther.uid === auth.currentUser.uid || true && (
                <button onClick={() => handleDelete(post.id)}>削除</button>
              )}
            </div>
          </div>
        )
      }))}
    </div>
  )
}

export default Home