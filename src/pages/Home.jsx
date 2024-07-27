import Feed from "../components/Feed"
import { useContext } from "react"
import DataContext from "../context/DataContext"

const Home = () => {
  const { postData, searchResults } = useContext(DataContext)
  return (
    <main className="Home">
      {postData.length > 0 ? <Feed postData={searchResults} /> : "No posts to show..."}
    </main>
  )
}

export default Home

