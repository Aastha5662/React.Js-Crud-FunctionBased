import React,{useState,useEffect} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';


function Show(){
    const[products,setProducts] = useState([]);
    const[image,setImage] = useState('./images/camera.jpg');
    useEffect(()=>{
        getProducts();
    },[])

    useEffect(()=>{
        images();
    },[])
    const getProducts=async()=>{
        let result =await fetch(`http://localhost:5000/products`);
        result = await result.json();
        setProducts(result);
    }
    const images=async()=>{
        let result =await fetch(`http://localhost:5000/upload`);
        result = await result.json();
        setImage(result);
    }
    console.log(image)
    

    //console.log(products)
    return(
        <div className="product-list">
        <h2>Product List</h2>
        <table className="table-bordered table ">
           <tr>
           <td>S.No</td>
            <td>Description</td>
            <td>Price</td>
            <td>Images</td>
           </tr>
        {
            products.map((item,index)=>
            <tr key={index}>
            <td>{index+1}</td>
            <td>{item.des}</td>
            <td>{item.price}</td>
            <td><img src={"http://localhost:5000/upload"+item.image} height="50" width="50"/></td>
            </tr>
            )

        }
        </table>
        </div>
    )
}

export default Show;