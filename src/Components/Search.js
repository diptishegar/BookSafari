
import axios from "axios";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
let content = null
/* 
 axios.get(url)
        .then(data=>{
            setResult(data.data.items);
            console.log(data.data.items);
        })
        .catch(()=>{
            content = <h1>Not Found</h1>;
        })*/

function Search(){
    let keyjust = 0;
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [apikey, setApiKey] = useState("AIzaSyCX-qfJpm_QQZLTJWDWOYD_dTyVMVmO0Ao");
    const url = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apikey}&maxResults=5`;

    function handleChange(event){
        const book = event.target.value;
        setBook(book);
        axios.get(url)
        .then(data=>{
            setResult(data.data.items);
            console.log(data.data.items);
        })
        .catch(err=>{
            setResult([]);
            setBook("");
        })
if(keyjust){
    setApiKey("jsjfdjsfijsdi8dfshdsfhhudshfuds");
}
    }
    function handleSubmit(event) {
        event.preventDefault();
        axios.get(url)
        .then(data=>{
            setResult(data.data.items);
            console.log(data.data.items);
        })
        .catch(err=>{
            setResult([]);
            setBook("");
        })
    }

   try {
    content =  result.map((book,key)=>(
        <div key={book.id}>
            <ProductCard Book={book}/>
        </div>
    ))
    
    return(
        <div>
          
             <form onSubmit={handleSubmit} class="flex items-center justify-center w-full mt-6">
                <div class="flex border border-white rounded sm:w-3/4 md:w-2/4 py-0">
                    <input onChange={handleChange} type="text" class="px-4 sm:w-4/5 md:w-11/12 border border-white" placeholder="Search for Books/Author's name" />
                        <button type="submit" class="flex items-center justify-center px-4 py-2">
                            <svg class="w-6 h-6 text-white" fill="currentColor">
                                <path
                                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                            </svg>
                        </button>
                </div>
            </form>
            {content}
        </div>
    )
   } catch (error) {
    content =  <h2>Match not found, try using different words!</h2>
    return( 
      <div>
         <form onSubmit={handleSubmit} class="flex items-center justify-center w-full mt-6">
            <div class="flex border border-white rounded sm:w-3/4 md:w-2/4 py-0">
                <input onChange={handleChange} type="text" class="px-4 sm:w-4/5 md:w-11/12 border border-white" placeholder="Search for Books/Author's name" />
                    <button type="submit" class="flex items-center justify-center px-4 py-2">
                        <svg class="w-6 h-6 text-white" fill="currentColor">
                            <path
                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                        </svg>
                    </button>
            </div>
        </form>
        {content}
    </div>)
   }
    
}

export default Search;