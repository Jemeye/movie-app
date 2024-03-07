import React, { useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { RiMovie2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {

    const [activeSublist, setActiveSublist] = useState<boolean>(false);

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
                                ? <ul className="nav-sublist">
                                    <li className="nav-subitem"><Link to="/comedy">Crime</Link></li>
                                    <li className="nav-subitem"><Link to="/action">Drama</Link></li>
                                    <li className="nav-subitem"><Link to="/drama">Action</Link></li>
                                    <li className="nav-subitem"><Link to="/drama">Biography</Link></li>
                                    <li className="nav-subitem"><Link to="/drama">Adventure</Link></li>
                                    <li className="nav-subitem"><Link to="/drama">Comedy</Link></li>
                                    <li className="nav-subitem"><Link to="/drama">Sci-Fi</Link></li>
                                    <li className="nav-subitem"><Link to="/drama">Animation</Link></li>
                                    <li className="nav-subitem"><Link to="/drama">War</Link></li>
                                    <li className="nav-subitem"><Link to="/drama">Romance</Link></li>
                                </ul>
                                : <></>
                        }

                    </li>
                    <li className="nav-item"><FaSignOutAlt></FaSignOutAlt></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header             