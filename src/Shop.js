import React, { useState, useEffect } from "react";
import Item from "./Item.js";
import "./index.css";
import useFetch from "./useFetch.js";

const url = "https://covid-shop-mcs.herokuapp.com";

export default function Shop() {
  const [items, setItems] = useState([]);
  const { get, post, loader } = useFetch();

  useEffect(() => {
    get(url)
      .then((data) => setItems(data))
      .catch((error) => console.error(error));
  }, [get]);

  useEffect(() => {
    items.forEach((i) => post(url, i));
  }, [items, post]);

  return (
    <div className="flex  flex-col items-center justify-center mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
      {loader ? (
        "Загружаем..."
      ) : (
        <ul>
          {items.map((item) => (
            <Item key={item.id} info={item} loader={loader} />
          ))}
        </ul>
      )}
    </div>
  );
}
