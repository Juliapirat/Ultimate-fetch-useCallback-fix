import React, { useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop";
import "./index.css";

function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-r from-white via-white to-gray-100 ml-100">
          <div className="flex  flex-col items-center justify-center">
            <div className="mt-10 mb-10">
              <Shop />
              <div className="flex  flex-col items-center justify-center">
                <button
                  className=" bg-blue-500 hover:bg-blue-700 shadow-md mt-5 ml-3 p-4 w-40 mt-2 text-sm leading-relaxed text-white line-clamp-3 rounded"
                  onClick={() => setLogin(false)}
                >
                  Выйти
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-r from-white via-gray-100 to-gray-100">
          <div className="flex  flex-col items-center justify-center">
            <div className="mt-6 mb-0 bg-white space-y-4 rounded-lg p-8 shadow-2xl">
              <h2 className="mt-0.5 text-lg text-gray-900">
                Нужно залогиниться!
              </h2>
              <button
                className=" bg-blue-500 hover:bg-blue-700 shadow-md mt-5 ml-3 p-4 w-40 mt-2 text-sm leading-relaxed text-white line-clamp-3 rounded"
                onClick={() => setLogin(true)}
              >
                Войти
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

render(<App />, document.querySelector("#root"));
