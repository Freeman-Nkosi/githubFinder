import React from 'react'
import {Link} from 'react-router-dom'

export const navbar = ({logo,title}) => {
    return (
        <nav className="navbar bg-primary">
         <h1><i className={logo} ></i>
            
             {title}
             </h1>
             <ul>
                 <li>
<Link to='/'>Home</Link>
                 </li>
                 <li>
                <Link to='/about'>About</Link>    
                </li>
             </ul>
        </nav>
    )
}

navbar.defaultProps={
    logo:"fab fa-github",
    title:"Github Finder"
}
export default navbar;

