import React, { useState, useRef, useEffect } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { RiMovie2Fill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { firebaseService } from '../service/firebase';

const Header: React.FC = () => {

    const [activeSublist, setActiveSublist] = useState<boolean>(false);
    const sublistRef = useRef<HTMLUListElement>(null);
    const { setUserCredential } = useAuth();
    const navigate = useNavigate();

    // Listen for clicks outside the nav-sublist to close it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sublistRef.current && !sublistRef.current.contains(event.target as Node)) {
                setActiveSublist(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    //function to sign out user and redirect to login page
    const handleLogout = () => {
        const api = firebaseService();
        api.signOutUser();
        setUserCredential(null);
        navigate("/login")
    }

    return (
        <header className="header-container">
            <Link className="logo-container" to="/">
                <div className='app-title'>
                    <RiMovie2Fill />
                    <h1>Movie<span>app</span></h1>
                </div>
            </Link>
            <nav className="nav-container">
                <ul className="nav-list">
                    <li className="nav-item" onClick={e => {
                        e.preventDefault();
                        setActiveSublist(!activeSublist)
                    }}>Categories
                        {
                            activeSublist
                                ? <ul className="nav-sublist" ref={sublistRef}>
                                    <li className="nav-subitem"><Link to="/category/crime">Crime</Link></li>
                                    <li className="nav-subitem"><Link to="/category/drama">Drama</Link></li>
                                    <li className="nav-subitem"><Link to="/category/action">Action</Link></li>
                                    <li className="nav-subitem"><Link to="/category/biography">Biography</Link></li>
                                    <li className="nav-subitem"><Link to="/category/adventure">Adventure</Link></li>
                                    <li className="nav-subitem"><Link to="/category/comedy">Comedy</Link></li>
                                    <li className="nav-subitem"><Link to="/category/sci-fi">Sci-Fi</Link></li>
                                    <li className="nav-subitem"><Link to="/category/animation">Animation</Link></li>
                                    <li className="nav-subitem"><Link to="/category/war">War</Link></li>
                                    <li className="nav-subitem"><Link to="/category/romance">Romance</Link></li>
                                </ul>
                                : <></>
                        }

                    </li>
                    <button className="nav-item" onClick={handleLogout}><FaSignOutAlt></FaSignOutAlt></button>
                </ul>
            </nav>
        </header>
    )
}

export default Header             
