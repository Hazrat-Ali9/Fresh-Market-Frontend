// components/Loading.js
const Loading = () => {
  return (
    <div className="container pt-10">
      <button
        type="button"
        className="bg-[#55a630] cursor-not-allowed opacity-75 px-4 py-2 rounded-md flex items-center justify-center"
      >
        <svg
          className="animate-spin h-5 w-5 mr-3 text-white"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" />
        </svg>
        Loading...
      </button>
    </div>
  );
};

export default Loading;
