import { sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth"
import { NavLink } from "react-router-dom"
import { auth } from "../firebase/Firebase_init"
import { useRef, useState } from "react"


function Login() {

    const [ errorMessage, seterrorMessage ] = useState('')
    const [ success, setSuccess ] = useState(false)
const emailRef = useRef()
    const handleLogin = (event) => {
        event.preventDefault()
        // access all input value
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password);

        // reset staus
        setSuccess(false)
        seterrorMessage('')

        // signInWithEmailAndPassword has taken from dtatabase (seconed)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);

if ( !result.user.emailVerified) {
    seterrorMessage('please verify your email address')
}else{

    setSuccess(true)
}



                // sent email verification


 
            })
            .catch(error => {
                console.log(error, 'error');
                seterrorMessage(error.message)
                setSuccess( false)
            }
            )

    }


const resetPassword =()=>{
    const email = emailRef.current.value
    if ( !email) {
        console.log('please provide a valid email address');
        
    }
    sendPasswordResetEmail(auth,email)
    .then(()=>{
         alert ('password reset email sent, please check your email')
        
    })
}

    return (
        <div>
            <h2 className="text-center"> Create <span className="text-3xl font-bold  ">Login </span> Page Fore Practice</h2>

            <div className="hero bg-base-200 my-10 min-h-[300px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Email</label>
                                    <input type="email" ref={emailRef} name="email" className="input" placeholder="Email" />
                                    <label className="fieldset-label">Password</label>
                                    <input type="password" name="password" className="input" placeholder="Password" />
                                    <div> <a onClick={resetPassword} className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-outline btn-neutral mt-4">Login</button>
                                </fieldset>
                            </form>

                            {
                                errorMessage && <p className="text-red-500">{errorMessage}</p>
                            }

                            {
                                success && <p className="text-green-600"> User Login Successfull</p>
                            }

                            <p>New to this Website Please <NavLink to='/signup'><span className="font-bold"> Sign Up</span></NavLink> </p>
                        </div>
                    </div>
                </div>
            </div>


            <NavLink to='/'><button className="btn btn-primary btn-outline">Home Page</button></NavLink>

        </div>
    )
}


export default Login
