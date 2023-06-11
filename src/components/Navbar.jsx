import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify  } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import Dropdown from "./Dropdown"
import { useState, useRef, useEffect } from "react"
import { subMenus } from "./subMenus"

function Navbar(){
    const [dropdownVisible, setDropdownVisible] = useState(false)
    const [dropdownPosition, setDropdownPosition] = useState({})
    const [dropdownLinks, setDropdownLinks] = useState([])
    const navbarRef = useRef(null)

    function handleClick(e, links){
        setDropdownVisible(true)
        setDropdownPosition({
            top: e.target.offsetTop + e.target.offsetHeight,
            left: e.target.offsetLeft
        })
        setDropdownLinks(links)
    }

    function handleDropdownClose(){
        setDropdownVisible(false)
    }

    function handleClickOutsideDropdown(e){
        if(
            navbarRef.current &&
            !navbarRef.current.contains(e.target) &&
            e.target.className !== 'mobile-menu'
        ) {
            setDropdownVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("click", handleClickOutsideDropdown)

        return () => {
            window.removeEventListener("click", handleClickOutsideDropdown)
        }
    }, [])

    console.log("dropdownLinks:", dropdownLinks);

    return(
        <nav ref={navbarRef}>
            <Link to="/" className="logo">
                <h3>ELC Quibdó</h3>
            </Link>
            <ul>
                <li>
                    <Link className="nav-links" onClick={(e) => handleClick(e, subMenus["Quienes Somos"])}>
                        Quienes Somos
                    </Link>
                </li>
                <li>
                    <Link className="nav-links" onClick={(e) => handleClick(e, subMenus["Cursos De Inglés"])}>
                        Cursos De Inglés
                    </Link>
                </li>
                <li>
                    <Link className="nav-links" onClick={(e) => handleClick(e, subMenus["Nuestros Servicios"])}>
                        Nuestros Servicios
                    </Link>
                </li>
                <li>
                    <Link className="nav-links" onClick={(e) => handleClick(e, subMenus["Eventos / Programas"])}>
                        Eventos / Programas
                    </Link >
                </li>
                <li>
                    <Link className="nav-links">
                        Blog
                    </Link>
                </li>
            </ul>
            {dropdownVisible && (
                <Dropdown onClose={handleDropdownClose} position={dropdownPosition} links={dropdownLinks}/>
            )}
            <div className="mobile-menu">
                <FontAwesomeIcon icon={faAlignJustify}/>
            </div>
        </nav>
    )
}

export default Navbar;