import Post from "./Post"

const Feed = ({ postData }) => {
  return (
    <>
      {
        postData.map( post => (
        <Post key={post.id} postData={post} />
        )) 
      }
    </>
  )
}

export default Feed
