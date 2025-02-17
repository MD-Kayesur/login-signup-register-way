import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import { NavLink } from "react-router-dom"
import { auth } from "../firebase/Firebase_init"
import { useState } from "react"



function Signup() {

    const [ errorMassage, setErrorMassage ] = useState('')
    const [ success, setSuccess ] = useState(false)




    const handleSignup = (event) => {
        event.preventDefault()

        setErrorMassage('')
        setSuccess(false)

        const email = event.target.email.value
        const password = event.target.password.value
        const terms = event.target.terms.checked
        console.log(email, password, terms);
        if (!terms) {
            setErrorMassage('please accept Our Terms And Condition')
            return
        }
        createUserWithEmailAndPassword(auth, email, password, terms)
            .then(result => {
                console.log(result.user);
                setSuccess(true)
// sent email verification
sendEmailVerification(auth.currentUser)
.then(()=>{
    console.log('email varification');
    
})
            })
            .catch(error => {
                console.log(error, 'error');
                setErrorMassage(error.message)
                setSuccess(false)
            })

    }


    return (
        <div>
            <h2 className="text-center"> Create <span className="text-3xl font-bold  ">Signup </span>Page Fore Practice</h2>
            <div className="hero bg-base-200 my-10 min-h-[400]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up Now</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body"> 
                        <form onSubmit={handleSignup} className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="   fieldset-label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>

                                <fieldset className="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-64">

                                    <label className="fieldset-label flex gap-3">
                                        <input type="checkbox" name="terms" className="checkbox" />
                                        <p className="text-black"> Accept Our Terms And Condition</p>
                                    </label>
                                </fieldset>


                                <button className="btn btn-outline btn-neutral  ">Sign Up Now</button>
                        </form>
                            </div>
                        {
                            errorMassage && <p className="text-red-400  ml-5"> {errorMassage}</p>
                        }

                        {
                            success && <p className="text-green-400 ml-5">sing up is success</p>
                        }
                        <p className="m-4">Already have an account? Please <NavLink to='/login'><span className="font-bold">Log In</span> </NavLink></p>
                    </div>
                </div>
            </div>
            <NavLink to='/'><button className="btn btn-primary btn-outline">Home Page</button></NavLink>
        </div>
    )
}

export default Signup
