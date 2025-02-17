import { NavLink,  } from "react-router-dom"
 

 

function Home() {
    return (
        <div className="flex gap-5">
       <NavLink to='/login'><button className="btn btn-primary btn-outline">Login</button></NavLink>
       <NavLink to='/register'> <button className="btn btn-primary btn-outline">Register</button></NavLink>
       <NavLink to='/signup'><button className="btn btn-primary btn-outline">Signup</button></NavLink>
           


        </div>
    )
}

export default Home
