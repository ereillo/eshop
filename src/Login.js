import React,  {useState} from 'react'
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";
// import { auth } from "./firebase"

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState ("")

  return (
    <div className = "login">
        <Link to = "/" style = {{textDecoration: "none"}}>
            <div className="login_logo">
                <StorefrontIcon className = "login_logoImage" fontSize = "large" />
                <h2 className = "login_logoTitle">eveSHOP</h2>
            </div>
        </Link>

        <div className="login_container">
            <h1>Sign-in</h1>

            <form>
                <h5>Email</h5>
                <input type="text" value = {email} onChange = {e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" value = {password} onChange = {e => setPassword(e.target.value)}/>

                <button type = "submit" className = "login_signInButton"><strong>Sign In</strong></button>
            </form>

            <p>
            By signing in, you agree to consider Eve Reillo as a candidate for current or future job positions.
            </p>

            <button className = "login_registerButton">
                <strong>Create your eveShop account</strong>
                </button>
        </div>
    </div>
  )
}

export default Login