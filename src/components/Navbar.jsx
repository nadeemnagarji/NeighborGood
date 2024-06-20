import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchArticlesByCategory } from "../store/NewsSlice";
import { useState } from "react";
import "../../src/App.css";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleCategory = (category) => {
    setSelectedCategory(category);

    dispatch(fetchArticlesByCategory(category));
  };

  return (
    <header className="text-gray-400 bg-gray-900 body-font fixed w-full">
      <div className="  container mx-auto flex flex-wrap py-5 px-1  flex-col md:flex-row items-center justify-between">
        <div
          onClick={() => navigate("/")}
          className=" flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer"
        >
          <h2 className="text-xl ">Neighbor Good</h2>
        </div>
        <nav className="md:ml-4 md:py-1 md:pl-4 sm:flex sm:flex-wrap items-center text-base md:justify-center max-md:justify-between max-md:w-full grid grid-cols-3 grid-rows-2 gap-4  ">
          <button
            onClick={() => handleCategory("business")}
            className={`mr-5 hover:text-white ${
              selectedCategory === "business" ? "text-white" : ""
            }`}
          >
            Business
          </button>
          <button
            onClick={() => handleCategory("entertainment")}
            className={`mr-5 hover:text-white ${
              selectedCategory === "entertainment" ? "text-white" : ""
            }`}
          >
            Entertainment
          </button>
          <button
            onClick={() => handleCategory("science")}
            className={`mr-5 hover:text-white ${
              selectedCategory === "science" ? "text-white" : ""
            }`}
          >
            Science
          </button>
          <button
            onClick={() => handleCategory("sports")}
            className={`mr-5 hover:text-white ${
              selectedCategory === "sports" ? "text-white" : ""
            }`}
          >
            Sports
          </button>
          <button
            onClick={() => handleCategory("health")}
            className={`mr-5 hover:text-white ${
              selectedCategory === "health" ? "text-white" : ""
            }`}
          >
            Health
          </button>
          <button
            onClick={() => handleCategory("technology")}
            className={`mr-5 hover:text-white ${
              selectedCategory === "technology" ? "text-white" : ""
            }`}
          >
            Technology
          </button>
        </nav>
      </div>
    </header>
  );
}
