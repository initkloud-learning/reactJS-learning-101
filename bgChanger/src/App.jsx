import { useState } from "react";

function App() {
  const [color, setColor] = useState("cyan");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="w-full flex flex-wrap justify-center fixed top-12">
          <h2 className="text-5xl font-bold text-white ">bgColor Changer</h2>
        </div>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 bg-white shadow-lg rounded-lg px-2 py-2">
            <button
              type="button"
              onClick={() => setColor("red")}
              className="rounded-md bg-red-600 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 px-10 py-2"
            >
              Red
            </button>
            <button
              type="button"
              onClick={() => setColor("green")}
              className="rounded-md bg-green-600 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 px-10 py-2"
            >
              Red
            </button>
            <button
              type="button"
              onClick={() => setColor("yellow")}
              className="rounded-md bg-yellow-600 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 px-10 py-2"
            >
              Red
            </button>
            <button
              type="button"
              onClick={() => setColor("pink")}
              className="rounded-md bg-pink-600 text-sm font-semibold text-white shadow-sm hover:bg-pink-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500 px-10 py-2"
            >
              Red
            </button>
            <button
              type="button"
              onClick={() => setColor("blue")}
              className="rounded-md bg-blue-600 text-sm font-semibold text-white shadow-sm hover:bg-blue-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 px-10 py-2"
            >
              Red
            </button>
            <button
              type="button"
              onClick={() => setColor("gray")}
              className="rounded-md bg-gray-800 text-sm font-semibold text-white shadow-sm hover:bg-gray-700/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700 px-10 py-2"
            >
              Red
            </button>
            <button
              type="button"
              onClick={() => setColor("teal")}
              className="rounded-md bg-teal-600 text-sm font-semibold text-white shadow-sm hover:bg-teal-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 px-10 py-2"
            >
              Red
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
