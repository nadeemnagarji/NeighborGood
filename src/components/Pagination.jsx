/* eslint-disable react/prop-types */
export default function Pagination({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="md:w-[300px] p-4 m-auto flex justify-between mb-5">
      {pages.map((page, index) => {
        return (
          <button
            onClick={() => setCurrentPage(page)}
            className={
              page === currentPage
                ? `w-10 h-10 bg-gray-700 text-white rounded-full`
                : `w-10 h-10 bg-gray-300 rounded-full`
            }
            key={index}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
