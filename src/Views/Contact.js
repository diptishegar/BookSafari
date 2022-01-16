import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

function Contact(){ 
    let content = null
    const { id } = useParams()
    console.log(id);
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    })
    const url = `https://61d92e08ce86530017e3ca29.mockapi.io/api/v1/product/${id}`
    useEffect(() => {
        setProduct({
            loading: true,
            data:null, error:false
        }
        )
        axios.get(url)
    .then(response => (
        setProduct({
            loading: false,
            data: response.data,
            error:false
        }
        )
    ))
    .catch(()=>{
        setProduct({
            loading: false,
            data: null,
            error:true
        }
        )
    })
    }, [url])

    if(product.error){
        content = <h1 className="pt-4 ml-3 color-black font-mono">Product Not Found</h1>
    }

    if(product.loading){
        content = <Loader />
    }
    if(product.data){
        content = <div className="border bg-gray-100 p-0 grid grid-cols-8 gaps-0 mr-3 ml-3">
            <div className="col-start-2 col-end-8 w-full">
         {product.data.name}<br />
         <span>$
         {product.data.price} {product.data.description}
         </span><br /> 
         <img src={product.data.avatar} alt="Avatar"></img>
        
        </div>
        </div>
    }
    return(
        <div>
            {content}
        </div>
    )
}

export default Contact;