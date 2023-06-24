import { Link } from "react-router-dom";
import "./Dropdown.css"

function Dropdown({ position, links, onSubMenuLinkClick  }){
    function handleSubMenuLinkClick() {
        onSubMenuLinkClick(); // Invoke the onSubMenuLinkClick function passed from the Navbar component
    }
    return(
        <div className="dropdown" style={{ top: position.top, left: position.left, marginTop: '30px' }}>
            <ul className="dropList">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.url} onClick={handleSubMenuLinkClick}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Dropdown;