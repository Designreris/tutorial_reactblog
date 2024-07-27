import NavLinks from "./NavLinks"
import { useContext } from "react"
import DataContext from "../context/DataContext"

const Nav = () => {
  const { search, setSearch } = useContext(DataContext)
  return (
    <nav>
      {/* Post Search Form */}
      <form className="searchForm" onSubmit={(e) => e.preventDefault}>
        <label htmlFor="search">Search Posts</label>
        <input 
          id="search"
          type="text"
          placeholder="search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      {/* Navigation Links */}
      <ul>
        <NavLinks title='Home' link='/' />
        <NavLinks title='New Post' link='/posts' />
      </ul>
    </nav>
  )
}

export default Nav