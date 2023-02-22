import "./navbar.scss"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>
            <Link to="/" class="nav-link">
                Home
            </Link>
            <Link to="/show-books" class="nav-link">
                Show Books
            </Link>
            <Link to="/add-books" class="nav-link">
                Add Book
            </Link>
        </nav>
    </div>
  )
}

export default Navbar