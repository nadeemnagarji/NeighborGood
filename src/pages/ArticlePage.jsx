import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ArticlePage() {
  const params = useParams();
  const state = useSelector((state) => state.SingleArticle.article);
  console.log(state);

  console.log(params.articleId);
  return (
    <section className="text-gray-600 body-font  sm:mt-8 min-h-svh">
      <div className="min-h-full container mx-auto flex px-5 sm:py-24  py-44 items-center justify-center flex-col">
        <img
          className="lg:w-4/5 md:w-4/5 w-5/6 mb-10 object-cover object-center rounded shadow-lg"
          alt="hero"
          src={state.urlToImage}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {state.title}
          </h1>
          <p className="mb-8 leading-relaxed">{state.content}</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              {state.author.split(",")[0] || state.source.name}
            </button>
            <button
              onClick={() => window.open(state.url, "_blank")}
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Source
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
