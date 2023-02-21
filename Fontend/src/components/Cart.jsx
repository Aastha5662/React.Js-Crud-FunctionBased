import React,{useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Add(){
    
    const[des,setDes] = useState("");
    const[price,setPrice] = useState("");
    const[error,setError] = useState(false);
    const[image,setImage] = useState('');
    //console.log(image,12)

    const addData =async()=>{
        if(!des || !price){
            setError(true)
            return false;
        }
        console.log({des,price,image})
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.log(userId._id)
        const formData = new FormData();
        //formData.append('file',file)
        let result =await fetch('http://localhost:5000/add-product',{
            method:"post",
            body:JSON.stringify({des,price,userId,image}),
            headers:{"Content-Type":"application/json"}
        })
        result = await result.json()
        console.log(result);
        toast("register successful")
        setDes("")
        setPrice("")
        setImage("")
    }
    return(
        <div className="resister">
        <h3>Add <b style={{color:"brown"}} >Product</b></h3><hr/>
    <form>
        <input type="file" onChange={(e)=>{setImage(e.target.files)}} className="form-control inputBox" />
        <textarea type="text" className="form-control inputBox" value={des} onChange={(e)=>{setDes(e.target.value)}} placeholder="Enter Product Description" ></textarea>
       {error && !des && <span className="Error" >Enter Full Details</span>}
        <input type="number" className="form-control inputBox" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder="Enter Your Price" />
        {error && !price && <span className="Error" >Enter Full Details</span>}
        <input type='button' className="singbtn" onClick={addData} value='Submit'></input>
    </form>
    <ToastContainer position="top-center"/>
    </div>
    )
}

export default Add;