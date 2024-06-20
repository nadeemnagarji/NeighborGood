// eslint-disable-next-line react/prop-types
export default function SearchInput({ onChange }) {
  return (
    <div className="flex gap-4 w-full sm:mb-16  mb-10">
      <input
        type="text"
        id="full-name"
        name="full-name"
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />

      <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Search
      </button>
    </div>
  );
}
