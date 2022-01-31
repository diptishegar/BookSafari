import React from "react";
import { Link } from "react-router-dom";

//grid sm:grid-cols-6 md:grid-cols-6 justify-items-center

function ProductCard({ Book }){
   let averageRating1 =null
    if(Book.volumeInfo.averageRating)
    {
      averageRating1 = Book.volumeInfo.averageRating;
    }

    try {
        return(
            <div className="p-2 flex justify-center w-11/12 sm:w-11/12 md:w-11/12">
            <div style={{ margin:"0rem 0rem 0rem -.3rem" }} className="border shadow-2xl mb-2 p-3 w-10/12 sm:w-2/4 rounded md:w-3/4 overflow-hidden bg-gray-100">
            
            <div className="p-3 text-xm">
                <h3 className="font-mono text-2xl mb-3">
                 {Book.volumeInfo.title}
                </h3>
                <h4 className="font-mono">
                   Price
                {averageRating1}
                </h4>
                <h5><a href={Book.volumeInfo.previewLink}>Visit</a></h5>
                <Link to={`Book/${Book.id}`}>
                <h5 className="font-mono p-1 mb-2 overflow-hidden truncate
                ">
                 <img key={Book.id} src={Book.volumeInfo.imageLinks.thumbnail} alt={Book.volumeInfo.title} />
                </h5></Link>
            </div>
            </div>
            </div>
        )
    } catch (error) {
        return(
            <div>
                
            </div>
        )
    }
}

export default ProductCard;