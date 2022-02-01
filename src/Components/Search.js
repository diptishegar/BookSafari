import { useTransition, animated } from "react-spring";
import axios from "axios";
import React, { useState } from "react";
import { X } from "react-bootstrap-icons";
import ProductCard from "./ProductCard";
import BackImage from "../Images/BackgroundImageS.jpeg";

/* 
 axios.get(url)
        .then(data=>{
            setResult(data.data.items);
            console.log(data.data.items);
        })
        .catch(()=>{
            content = <h1>Not Found</h1>;
        })*/

function Search() {
  let content = null;
  let keyjust = 0;
  let content1 = null;
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [cros, setCross] = useState(false);
  const [apikey, setApiKey] = useState(
    "AIzaSyCX-qfJpm_QQZLTJWDWOYD_dTyVMVmO0Ao"
  );
  const url = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apikey}&maxResults=5`;

  const crossTransition = useTransition(cros, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
  });

  var styleSearchBar = {
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundImage: `url(${BackImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
    axios.get(url).then((data) => {
      setResult(data.data.items);
      console.log(data.data.items);
    });
    if (keyjust) {
      setApiKey("jsjfdjsfijsdi8dfshdsfhhudshfuds");
    }
    setCross(true);
    if (event.target.value === "") {
      setCross(false);
      setResult([]);
      setBook("");
      content1 = <h1 className="text-white text-2xl">Related to ur search</h1>;
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get(url)
      .then((data) => {
        setResult(data.data.items);
        console.log(data.data.items);
      })
      .catch((err) => {
        content = <h2>Match not found</h2>;
      });
  }

  try {
    content = result.map((book, key) => (
      <div key={book.id}>
        <ProductCard Book={book} />
      </div>
    ));

    return (
      <div className="divOfSearchBar">
        <form
          style={styleSearchBar}
          onSubmit={handleSubmit}
          class="flex items-center justify-center w-full"
        >
          <div class="flex px-0 bg-white border border-white w-11/12 rounded sm:w-2/4 md:w-2/4 py-0 focus:border-text-500 justify-center duckingsearchB">
            <input
              onChange={handleChange}
              type="text"
              id="inputBook"
              class="pl-4 rounded focus:border-text-500 outline-none w-11/12 sm:w-11/12 md:w-11/12 border border-white"
              placeholder={`Search Books/Author's name`}
            />
            {crossTransition(
              (styles, item) =>
                item && (
                  <animated.div
                    style={styles}
                    className="bg-white"
                    onClick={() => {
                      document.getElementById("inputBook").value = "";
                      setCross(false);
                      setResult([]);
                      setBook("");
                    }}
                  >
                    <X
                      fill="gray"
                      className="flex text-3xl pt-2 items-center px-0"
                    />
                  </animated.div>
                )
            )}
            <button
              type="submit"
              class="flex border border-white outline-none text-gray-500 items-center justify-center pr-2 py-2"
            >
              <svg class="w-6 h-6 outline-none" fill="gray">
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div>
        </form>
        {content1}
        <div className="duckingDivs">
        {content}
        </div>
      </div>
    );
  } catch (error) {
    content = (
      <h2 className="text-black text-lg text-center mt-4 font-sans">
        Match not found, try using different words!
      </h2>
    );
    return (
      <div>
        <form
          onSubmit={handleSubmit}
          class="flex items-center justify-center w-full mt-6"
        >
          <div class="flex border border-white rounded bg-white sm:w-full md:w-2/4 py-0">
            <input
              onChange={handleChange}
              type="text"
              class="px-4 sm:w-4/5 md:w-11/12 border focus:border-red border-white"
              placeholder="Search for Books/Author's name"
            />
            <button
              type="submit"
              class="flex items-center justify-center px-4 py-2"
            >
              <svg class="w-6 h-6 text-white" fill="currentColor">
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div>
        </form>
        {content}
      </div>
    );
  }
}

export default Search;
