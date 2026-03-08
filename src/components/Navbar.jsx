import {useState} from 'react';
import '../styles/Navbar.css'
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { HashLink } from 'react-router-hash-link';
import { Link} from 'react-router-dom';
function Navbar() {
    const[StatusTampil, SetStatusTampil] = useState ('');
    
    function TampilMenu() {
        if (StatusTampil== ''){
            SetStatusTampil('tampil');
        }else{
            SetStatusTampil('');
        }
    }
  return (
    <nav>
        <div className="wrapper">
            <div className="logo">
                <Link to="/">CODING PROJECT</Link>
            </div>
            <button onClick={TampilMenu}>
            {
                StatusTampil =='' ? (<FaBars />) : (<IoClose />)
            }   
            </button>
            <div className={`menu ${StatusTampil}`}onClick={(TampilMenu)}>
                <ul>
                    <li><HashLink to="/#portofolio">Portofolio</HashLink></li>
                    <li><HashLink to="/#about">About</HashLink></li>
                    <li><Link to="/Experience">Experience</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar