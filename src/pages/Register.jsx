import { createUserWithEmailAndPassword } from "firebase/auth"
import { NavLink } from "react-router-dom"
import { auth } from "../firebase/Firebase_init"

 

function Register() {


const handleRegister =(event)=>{

    event.preventDefault()
  const   email = event.target.email.value 
    const password = event.target.password.value 
    // console.log(email,password);
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
         const user = result.user
         console.log(user);
         
        
    })
    .catch(error=>{
console.log(error,'error');

    } )
    
}




    return (
        <div className="flex flex-col overflow-x-hidden gap-5">
            <h2 className="text-center"> Create  <span className="text-3xl font-bold  ">Register </span> Page Fore Practice</h2>
       
             <form onSubmit={handleRegister} className="w-300  flex flex-col  gap-5">
             <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
  <input type="email" name="email" placeholder="email " required/>
</label> 
 

<label className="input validator">
<svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
<input type="password" name="password" placeholder="password" required/>
</label>

<button className="btn  w-20  btn-outline  btn-neutral mt-4">Login</button>
 
             </form>
 
            <NavLink to='/'><button className="btn md:mt-30 md:ml-150 btn-primary  btn-outline">Go To Home Page</button></NavLink>

        </div>
    )
}

export default Register
