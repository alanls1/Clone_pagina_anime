import { Link, Outlet} from "react-router-dom";

import "./index.css"

export function UserLogin(){
    return (
        <div className="container--login">
            <form className="form--login">
                <div className="form--head">
                    <h2>Login to your account</h2>
                    <Link to="/">X</Link>
                </div>
                <div className="form--input">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" /> 
                    
                </div>
                <div className="form--label">
                    <label>
                        <input type="checkbox"/> Remember Me
                    </label>
                </div>
                <div className="form--button">
                    
                    <button style={{backgroundColor: "#E74C3C"}}>Log in</button>

                    <button style={{backgroundColor: "#1E1E1E" }}>
                        <Link to="/register" style={{color: "white"}}>
                            Register a new account
                        </Link> 
                    </button>

                    <a>Lost your password?</a>
                </div>
            
            </form>
            <Outlet/>
        </div>
    )
}