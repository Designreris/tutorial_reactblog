import { Link, useLocation } from "react-router-dom"

const NavLinks = ({ title, link }) => {

  const pathName = useLocation().pathname.toString()
  return (
    <>
      <Link to={link} className={`${link === pathName && "active"}`}>
        {title}
      </Link>
    </>
    )
}

export default NavLinks
