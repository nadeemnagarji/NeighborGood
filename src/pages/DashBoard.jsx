import NewsCards from "../components/NewsCards";
import { useEffect, useState } from "react";

import { fetchArticle } from "../store/NewsSlice";
import { useDispatch, useSelector } from "react-redux";

import BallTriangle from "react-loading-icons/dist/esm/components/ball-triangle";
import SearchInput from "../components/SearchInput";
import Pagination from "../components/Pagination";

export default function DashBoard() {
  //fetching data from the api
  const dispatch = useDispatch();
  const news = useSelector((state) => state.MultipleArticles.allArticles);
  const loading = useSelector((state) => state.MultipleArticles.status);
  const error = useSelector((state) => state.MultipleArticles.error);

  //pagination code
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentArticles = news.slice(firstPostIndex, lastPostIndex);

  // the search input code
  const [input, SetInput] = useState();
  const handleChange = (value) => {
    SetInput(value);
  };

  useEffect(() => {
    dispatch(fetchArticle());
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden sm:mt-8 pt-4 mt-16">
        <div className="container px-5 md:py-14 py-24 mx-auto">
          <SearchInput onChange={handleChange} />
          <div className="flex flex-wrap -m-12 ">
            {news && news.length > 0 && !input
              ? currentArticles
                  .filter((item) => item.urlToImage)
                  .map((item, index) => {
                    return <NewsCards key={index} {...item} />;
                  })
              : currentArticles
                  .filter((item) => item.title.includes(input))
                  .filter((item) => item.urlToImage)
                  .map((item, index) => {
                    return <NewsCards key={index} {...item} />;
                  })}
            {(loading === "idle" || loading === "loading") && (
              <div className="w-full min-h-screen  flex justify-center items-center">
                <BallTriangle
                  stroke="#242424"
                  strokeOpacity={0.525}
                  speed={0.75}
                />
              </div>
            )}
            {error && (
              <div className="w-full min-h-screen  flex flex-col justify-center items-center">
                <h1 className=" text-2xl font-bold">{error}</h1>
                <p className=" text-xl font-medium">Please try again later</p>
              </div>
            )}
          </div>
        </div>
        <Pagination
          totalPosts={news.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </section>
    </div>
  );
}

/*


<section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                CATEGORY
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                Roof party normcore before they sold out, cornhole vape
              </h2>
              <p className="leading-relaxed mb-8">
                Live-edge letterpress cliche, salvia fanny pack humblebrag
                narwhal portland. VHS man braid palo santo hoodie brunch trust
                fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid
                fixie chambray 90's, slow-carb etsy tumeric. Cray pug you
                probably haven't heard of them hexagon kickstarter craft beer
                pork chic.
              </p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
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
                </a>
                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
              <a className="inline-flex items-center">
                <img
                  alt="blog"
                  src="https://dummyimage.com/104x104"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Holden Caulfield
                  </span>
                  <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                    UI DEVELOPER
                  </span>
                </span>
              </a>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                CATEGORY
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                Pinterest DIY dreamcatcher gentrify single-origin coffee
              </h2>
              <p className="leading-relaxed mb-8">
                Live-edge letterpress cliche, salvia fanny pack humblebrag
                narwhal portland. VHS man braid palo santo hoodie brunch trust
                fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid
                fixie chambray 90's, slow-carb etsy tumeric.
              </p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
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
                </a>
                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
              <a className="inline-flex items-center">
                <img
                  alt="blog"
                  src="https://dummyimage.com/103x103"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Alper Kamu
                  </span>
                  <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                    DESIGNER
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
*/
