import { Routes, Route } from "react-router-dom";
import App from "../App";
import { LoginUser } from "../component/UserLogin";
import { RegisterUser } from "../component/UserRegister";
import { Pagination } from "../component/Pagination";

export function RouteWay(){
    return(
        <Routes>
            <Route path="/" element={ <App/> } />
            <Route path="/login" element={ <LoginUser/> } />
            <Route path="/register" element={ <RegisterUser/> } />
            <Route path="/pagination" element={ <Pagination/> } />
        </Routes>
    )
}