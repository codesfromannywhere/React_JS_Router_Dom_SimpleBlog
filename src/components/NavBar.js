import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <h2>MY LIFE</h2>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </nav>
    );
}

export default NavBar;