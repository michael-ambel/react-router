import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return ( 
        <div>
            <header className="sticky z-50 top-0 shadow">
                <nav className="flex justify-between bg-gray-100 border-gray-200 px-8 py-2 lg-px-6 items-center mx-auto max-w-screen-xl">
                    <Link to='/' ><h2>Logo</h2></Link>
                    <ul className="flex">
                        <li>
                            <NavLink 
                            to="/" 
                            className={({isActive}) => 
                               `px-4 hover:text-orange-700
                                ${isActive? "active text-orange-700" : "text-gray-700"}`
                            }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to="/about" 
                            className={({isActive}) =>  
                                `px-4 hover:text-orange-700
                                 ${isActive? "active text-orange-700" : "text-gray-700"}`
                            }>About</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
     );
}
 
export default Header;