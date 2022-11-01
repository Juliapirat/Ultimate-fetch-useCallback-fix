import React, { useState } from "react";
import "./tailwind.output.css";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleMoreClick() {
    setTotal(total + 1);
  }

  function handleLessClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <div className="overflow-hidden mb-8 rounded-lg shadow transition hover:shadow-lg">
      <img src={info.image} alt={info.name} />
      <div className="bg-white p-4 sm:p-6">
        <div>
          <h2 className="mt-0.5 text-lg text-gray-900">{info.name}</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
            {info.desc}
          </p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <button
            className="group mt-4 mr-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            disabled={total === 0}
            onClick={handleLessClick}
          >
            –
          </button>
          <h3 className="group mt-4 mr-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
            {total ? total : ""}
          </h3>
          <button
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            onClick={handleMoreClick}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
