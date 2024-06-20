import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addArticle } from "../store/ArticleSlice";

/* eslint-disable react/prop-types */

export default function NewsCards({
  author,
  content,
  urlToImage,
  title,
  source,
  url,
  publishedAt,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleArticle = () => {
    console.log("hi");
    dispatch(
      addArticle({
        author,
        content,
        urlToImage,
        title,
        source,
        url,
        publishedAt,
      })
    );
    navigate(`/article/${source.name}`);
  };
  return (
    <div
      className="p-8 md:w-1/2 flex flex-col items-start hover:bg-gray-300 cursor-pointer rounded-md"
      onClick={handleArticle}
    >
      <img className="w-full rounded-lg" src={urlToImage} />
      <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
        {title}
      </h2>
      <div className="flex items-center justify-between flex-wrap pb-2 mb-4 border-b-2 border-gray-100 mt-auto w-full">
        <button
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 inline-flex items-center cursor-pointer"
        >
          Read Full Article
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </button>
        <a className="inline-flex items-center">
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-600">
              {author}
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}
