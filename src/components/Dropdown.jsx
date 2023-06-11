import { Link } from "react-router-dom";
import "./Dropdown.css"

function Dropdown({ position, links }){
    return(
        <div className="dropdown" style={{ top: position.top, left: position.left, marginTop: '30px' }}>
            <ul className="dropList">
                {links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.url}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Dropdown;