import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching2 = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((d) => {
        setPost(d.data);
        console.log(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [idFromButton]);

  const fetchData = () => {
    setIdFromButton(id);
  };

  return (
    <div>
      <h3>Hook Data Fetching using useEffect Part 2</h3>
      <input
        type="text"
        value={id}
        onChange={(e: any) => setId(e.target.value)}
      />
      <button type="button" onClick={fetchData}>
        Fetch Data
      </button>
      <div>{JSON.stringify(post)}</div>
    </div>
  );
};

export default DataFetching2;
