import { NavLink } from "react-router-dom"

  

function Navbar() {
    return (
        <div className="navbar px-30 fixed z-50 bg-blue-100  backdrop-blur-300 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0} class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 gap-4 mt-3 w-52 p-2 shadow">
        
        <NavLink to='/'>Home</NavLink> 
        <NavLink to='/login'> Login </NavLink>
        <NavLink to='/signup'> Signup </NavLink>
        <NavLink to='/register'>  Register </NavLink>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"> Practice</a>
  </div>
  <div  className="navbar-center  hidden lg:flex">
    <ul  className="menu menu-horizontal gap-8 px-1">
        
 
  <NavLink  to='/'>Home</NavLink>
         
  <NavLink to='/login'> Login </NavLink>
  <NavLink to='/signup'> Signup </NavLink>
  <NavLink to='/register'>  Register </NavLink>
  
     
    </ul>
  </div> 
</div>
    )
}

export default Navbar
