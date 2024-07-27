
import React from 'react'
import { useContext } from 'react'
import DataContext from '../context/DataContext'

const Edit = () => {
  const { editTitle, setEditTitle, editBody, setEditBody, handleUpdate } = useContext(DataContext)
  return (
    <main>
      <form className="newPostForm">
        <h2>Edit Post</h2>
        <label htmlFor="postTitle">Post title:</label>
        <input 
          id="postTitle"
          type="text"
          required
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)} 
        />
        <label htmlFor="postBody">Post message:</label>
        <textarea
          id="postBody"
          required
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}
        />
        <button 
          className={"editBtn"}
          onClick={(e) => handleUpdate(e)}
        >
          Edit Post
        </button>
      </form>
    </main>
  )
}

export default Edit
