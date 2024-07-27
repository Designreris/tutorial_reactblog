import { Link } from "react-router-dom"
import { useContext } from "react"
import DataContext from "../context/DataContext"

const Post = ({ postData }) => {
  const { setSearch } = useContext(DataContext)

  return (
    <article className="post">
      <Link 
        to={`/posts/${postData.id}`}
        onClick={() => setSearch("")}
      >
        {postData.title}
        <p>{postData.date}</p>
        <p>
          {(postData.body).length <= 40 ? postData.body : `${(postData.body).slice(0, 40)}...`}
        </p>
      </Link>
    </article>
  )
}

export default Post
