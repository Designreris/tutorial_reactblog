import { Link } from "react-router-dom"


const PageNotFound = () => {
  return (
    <main className="missing">
      <h2>Page not found...</h2>
      <Link to="/">Go Home</Link>      
    </main>
  )
}

export default PageNotFound
