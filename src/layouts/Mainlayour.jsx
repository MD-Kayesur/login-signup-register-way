import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

 

function Mainlayour() {
    return (
        <div className="">
            <Navbar></Navbar>
           <div className="py-20 w-10/12 mx-auto ">
           <Outlet></Outlet>
           </div>
        </div>
    )
}

export default Mainlayour
