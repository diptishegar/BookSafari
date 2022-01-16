import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }){
    return(
        <div className="p-2 grid sm:grid-cols-6 md:grid-cols-6 justify-items-center gap-3">
        <div style={{ margin:"0rem 0rem 0rem -.3rem" }} className="border shadow-2xl mb-2 p-3 rounded sm:col-start-2 sm:col-end-6 md:col-start-2 md:col-end-6 md:w-3/4 overflow-hidden bg-gray-100">
        <Link to={`/product/${product.id}`}>
        <div style={{
            'backgroundImage': `url('${product.images[1].imageUrl}')`,
        }} className="rounded bg-cover w-full h-64 bg-blue">
        </div>
        </Link>
        <div className="p-3 text-xm">
            <h3 className="font-mono text-2xl mb-3">
            <Link to={`/product/${product.id}`}>
                {product.name}
                </Link>
            </h3>
            <h4 className="font-mono">
                $
                {product.price}
            </h4>
            <h5 className="font-mono p-1 mb-2 overflow-hidden truncate
            ">
                {product.description}
                {product.description}{product.description}
               </h5>
            <Link to={`/product/${product.id}`} className="
            bg-purple-500 rounded text-white py-2 px-10 ml-1 mt-6
            ">
                View
            </Link>
        </div>
        </div>
        </div>
    )
}

export default ProductCard;