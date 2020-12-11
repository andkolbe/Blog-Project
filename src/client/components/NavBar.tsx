import * as React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC<NavBarProps> = () => {
    return (
        <nav className="nav justify-content-center p-3 mb-2 shadow bg-warning">
            <NavLink exact className="mx-5 font-weight-light" activeClassName="text-primary font-weight-bold" to="/">Home</NavLink>
            <NavLink className="mx-5 font-weight-light" activeClassName="text-primary font-weight-bold" to="/new">New Post</NavLink>
        </nav>
    );
}

interface NavBarProps {}

export default NavBar;