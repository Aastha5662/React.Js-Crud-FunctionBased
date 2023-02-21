import React from "react";
import { Link,useNavigate } from "react-router-dom";
import '../App.css'

function Nav(){
    const navigate = useNavigate();
    const auth = localStorage.getItem("user");
    const logout=()=>{
        localStorage.clear();
        navigate('/resister')
    }
    return(
        <>
        <ul className="nav-bar" >
        <li><Link style={{ color: 'white',textDecorationLine:"none"}} to="/" >Home</Link></li>
        <li><Link style={{ color: 'white',textDecorationLine:"none"}} to="/add" >Add Product</Link></li>
        <li><Link style={{ color: 'white',textDecorationLine:"none"}} to="/show" >Show Product</Link></li>
        {/* <li>{auth ? <Link style={{ color: 'white',textDecorationLine:"none"}} onClick={logout} to="/resister" >Logout</Link>:
        <Link style={{ color: 'white',textDecorationLine:"none"}} to="/resister" >Resister</Link>}</li>
        <li><Link style={{ color: 'white',textDecorationLine:"none"}} to="/login" >Login</Link></li> */}
        {
            auth ? <li><Link style={{ color: 'white',textDecorationLine:"none"}} onClick={logout} to="/resister" >Logout</Link></li>
        :<>
       <li><Link style={{ color: 'white',textDecorationLine:"none"}} to="/resister" >Resister</Link></li>
        <li><Link style={{ color: 'white',textDecorationLine:"none"}} to="/login" >Login</Link></li>
        </>
        }
        </ul>
        </>
    )
}
export default Nav;