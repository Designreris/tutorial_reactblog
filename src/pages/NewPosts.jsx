import { useContext } from "react"
import DataContext from "../context/DataContext"

const NewPosts = () => {
  const { handleSubmit, postTitle, setPostTitle, postBody, setPostBody } = useContext(DataContext)
  return (
    <main>
      <form className="newPostForm" onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}>
        <h2>New Post</h2>
        <label htmlFor="postTitle">Post title:</label>
        <input 
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)} 
        />
        <label htmlFor="postBody">Post message:</label>
        <textarea
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default NewPosts
