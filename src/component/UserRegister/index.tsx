import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

import "./index.css"
import Logo from "../../img/logo.png";

interface eventTarget{
    target: {
        name: string,
        value: string
    }
}

export function RegisterUser(){
    const [ userRegister, setUserRegister ] = useState({
        username: "",
        email: "",
        password: "",
        name: "",
        lastName: ""
    })

    const handleChangeInput = (event: eventTarget) => {
        const { name, value } = event.target

        setUserRegister((prev) => {
            const data = { ...prev, [name]: value }
            return data
        })
    }

    return (
        <div className="container--register">
            <div className="form--logo">
               <Link to="/"><img src={Logo}/></Link> 
            </div>
            <form className="form--register">
                <h2>Sign up, it's free..</h2>
                <div className="form--fildInput">
                    <label htmlFor="username">
                        Username
                    </label>
                    <input 
                    type="text" 
                    placeholder="JohnDoe" 
                    name="username"
                    value={userRegister.username}
                    onChange={e => handleChangeInput(e)}
                    />
                </div>
                <div className="form--fildInput">
                    <label htmlFor="email">
                        E-mail address
                    </label>
                    <input 
                    type="email" 
                    placeholder="johndoe@email.com" 
                    name="email"
                    value={userRegister.email}
                    onChange={e => handleChangeInput(e)}
                    />
                </div>
                <div className="form--fildInput">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input 
                    type="password" 
                    name="password"
                    value={userRegister.password}
                    onChange={e => handleChangeInput(e)}
                    />
                </div>
                <div className="form--nameLastName">
                    <div>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input 
                        type="text" 
                        placeholder="Jonh"
                        name="name"
                        value={userRegister.name}
                        onChange={e => handleChangeInput(e)}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">
                            Last name
                        </label>
                        <input 
                        type="text"  
                        placeholder="Doe"
                        name="lastName"
                        value={userRegister.lastName}
                        onChange={e => handleChangeInput(e)}
                        />
                    </div>
                </div>
                <div className="form--fildButton">
                    <button>Sign up</button>
                    <p>Do you already have an account?<Link to="/login">Login here</Link> </p>
                </div>
            </form>
            
            <span>Animes Online © 2023</span>
            <Outlet/>
        </div>
    )
}