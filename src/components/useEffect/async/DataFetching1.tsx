import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching1 = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

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
  }, [id]);

  return (
    <div>
      <h3>Hook Data Fetching 1...</h3>
      <input
        type="text"
        value={id}
        onChange={(e: any) => setId(e.target.value)}
      />
      <div>{JSON.stringify(post)}</div>
    </div>
  );
};

export default DataFetching1;
