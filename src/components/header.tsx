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
                                    <Link to="/category/crime"> <li className="nav-subitem">Crime</li></Link>
                                    <Link to="/category/drama"> <li className="nav-subitem">Drama</li></Link>
                                    <Link to="/category/action"><li className="nav-subitem"> Action </li></Link>
                                    <Link to="/category/biography"><li className="nav-subitem">Biography </li></Link>
                                    <Link to="/category/adventure"><li className="nav-subitem">Adventure </li></Link>
                                    <Link to="/category/comedy"><li className="nav-subitem">Comedy </li></Link>
                                    <Link to="/category/sci-fi"><li className="nav-subitem">Sci-Fi </li></Link>
                                    <Link to="/category/animation"> <li className="nav-subitem">Animation </li></Link>
                                    <Link to="/category/war"><li className="nav-subitem">War </li></Link>
                                    <Link to="/category/romance"><li className="nav-subitem">Romance </li></Link>
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
