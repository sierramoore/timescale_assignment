import './Navigation.scss';
import React from "react";
import {
    Link,
    useLocation
  } from "react-router-dom";

export function Navigation() {
    const location = useLocation();
    const isActive = (pathname) => location.pathname === pathname ? 'nav__link--active' : '';
    
    return (
        <div className="nav-container">
            <div className="nav">
                <div className="nav__header">
                    <p className="nav__header__primary">Travelize</p>
                    <p className="nav__header__secondary">My traveling experiences</p>
                </div>
                <Link className={`nav__link ${isActive('/')}`} to="/">Home</Link>
                <Link className={`nav__link ${isActive('/blog')}`} to="/blog">Blog</Link>
                <Link className={`nav__link ${isActive('/about')}`} to="/about">About</Link>
            </div>
        </div>
    );
}
