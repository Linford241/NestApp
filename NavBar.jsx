import logo from "../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";



function Navbar () {
    
    const linkClass = ({ isActive }) =>
        isActive
          ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
          : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";
          
    return (
        <nav className="bg-indigo-700 border-b border-indigo-500">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-cenetr jsutify-center md:items-stretch md:jsutify-start">
                        <NavLink
                          className="flex flex-shrink-0
                          items-center mr-4"
                          to="/index"
                        >
                            <img className="h-12 w-auto" src={logo}
                            alt="Nest"
                            />
                            <span className="hidden md:block text-white
                            text-2xl font-bold ml-2">
                                Nest
                            </span>
                        </NavLink>
                          
                    
                    <div className="md:ml-auto">
                        <div className="flex space-x-2">
                            <NavLink
                              to="/"
                              className={ linkClass }
                            >
                                Home
                            </NavLink>
                            <NavLink
                              to="/nests"
                              className={ linkClass }
                            >
                                Find a nest
                            </NavLink>
                            <NavLink
                              to="/addnests"
                              className={ linkClass }
                            >
                                Add a nest
                            </NavLink>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;