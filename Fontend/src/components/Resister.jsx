import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';

function Resister(){
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[mobile,setMobile] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth){
            navigate("/");
        }
    })

    const saveData= async ()=>{
        console.log({name,email,mobile,password})
        let result = await fetch('http://localhost:5000/resister',{
            method:"post",
            body:JSON.stringify({name,email,mobile,password}),
            headers:{"Content-Type":"application/json"},
        });
        result = await result.json()
        console.log(result)
            localStorage.setItem("user",JSON.stringify(result));
            navigate('/')
        
    }
    return(
        <div className="resister">
            <h3>Login <b style={{color:"brown"}} >Here</b></h3><hr/>
        <form>
            <input type="text" className="form-control inputBox" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Your Name" />
            <input type="email" className="form-control inputBox" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Your Email" />
            <input type="mobile" className="form-control inputBox" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} placeholder="Enter Your Mobile" />
            <input type="password" className="form-control inputBox" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Your Password" />
            <input type='button' className="singbtn" onClick={saveData} value='Submit'></input>
        </form>
        </div>
    )
}
export default Resister;