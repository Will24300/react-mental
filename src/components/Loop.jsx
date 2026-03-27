import { useState, useEffect } from "react";

function Loop() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((json) => setData(json.posts));
  }, []);

  return <div>Count : {data.length}</div>;
}

export default Loop;
