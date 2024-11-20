import { Link, NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <NavLink to="/users">Users</NavLink>
                <Link to="/posts">Posts</Link>
                
            </nav>
        </div>
    );
};

export default Header;