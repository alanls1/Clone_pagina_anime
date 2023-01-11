import { Routes, Route } from "react-router-dom";
import App from "../App";
import { UserLogin } from "../component/UserLogin";
import { UserRegister } from "../component/UserRegister";

export function RouteWay(){
    return(
        <Routes>
            <Route path="/" element={ <App/> } />
            <Route path="/login" element={ <UserLogin/> } />
            <Route path="/register" element={ <UserRegister/> } />
        </Routes>
    )
}