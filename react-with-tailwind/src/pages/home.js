import React, { useState } from "react";
import axios from "axios";
import Item from "../components/item";

export function Home() {
  const [quotes, setQuotes] = useState([]);
  const [tag, setTag] = useState("love");

  function handleSubmit(e) {
    e.preventDefault();
    getQuote();
  }

  function getQuote() {
    axios
      .get(`https://quotable.io/quotes?tags=${tag}`)
      .then((res) => setQuotes(res.data.results))
      .catch((err) => console.log(err.message));
  }

  return (
    <>
      <div className="flex flex-col w-full h-screen">
        <form
          onSubmit={handleSubmit}
          className="w-3/4 md:w-1/2 lg:w-1/3 xl:w-2/4 bg-white py-6 px-6 xl:h-24 mt-36 rounded-lg mx-auto"
        >
          <input
            type="text"
            name="tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="bg-[#eeeef0] w-full p-3 pl-8 rounded-full focus:outline-none focus:shadow-outline"
            placeholder="Search..."
          />
          <button
          type="submit"
          className=" bg-gray-800 text-white px-4 py-2 border-2 border-gray-800 hover:bg-transparent hover:text-gray-800 "
        >
          Search
        </button>
        </form>
        <div className="w-3/4 md:w-1/2 lg:w-1/3 xl:w-2/4 bg-white py-6 px-6 xl:h-relative mt-6 rounded-lg mx-auto">
          {quotes.length !== 0 && (
            <div className="mt-5 w-[800px] mx-auto ">
              {quotes.map((quote, i) => {
                return <Item quote={quote} key={i} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
