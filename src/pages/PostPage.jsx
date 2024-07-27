import { Link, useParams } from "react-router-dom"
import { useContext } from "react"
import DataContext from "../context/DataContext"

const PostPage = () => {
  const { postData, handleDelete, handleEdit } = useContext(DataContext)
  const { id } = useParams()
  let post = postData.filter( post => post ) // <-- removes empty array elements
  post = post.find( post => (post.id).toString() === id ) // <-- then finds post to show
    
  return (
    <main>
      <article className="post">
        {post && 
          <>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.body}</p>
            <button 
              className="editBtn"
              onClick={() => handleEdit(id)}
            >
              Edit
            </button>
            <button onClick={() => handleDelete(post)}>
              Delete
            </button>
          </>
        }
        {!post &&
          <>
            <h3 style={{textAlign: "center"}}>
              <Link to={"/"}>
                No post was found
              </Link>
            </h3>
          </>
        }
      </article>
    </main>
  )
}

export default PostPage
