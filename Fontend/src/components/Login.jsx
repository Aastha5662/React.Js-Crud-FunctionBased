import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';

const Login = ()=>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState(""); 
    const navigate = useNavigate()
    
const loginData = async () => {
    console.log(email,password);
    let result = await fetch("http://localhost:5000/login",{
        method:"post",
        body:JSON.stringify({email,password}),
        headers:{
            "Content-Type":"application/json"
        }
    });
    result = await result.json();
    console.log(result)
    if(result.name){
        localStorage.setItem("user",JSON.stringify(result));
        navigate("/");
    }else{
        alert("Please Enter correct details...")
    }
}
    return(
        <div className="resister">
            <h3>Login <b style={{color:"brown"}}>Here</b> </h3><hr/>
        <input className="form-control inputBox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
        <input className="form-control inputBox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
        <button className="add1" onClick={loginData}>Login</button>
        </div>
    )
}
export default Login;