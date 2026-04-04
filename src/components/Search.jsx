import { useState, useEffect } from "react";

function Search({ query }) {
  const [results, setResults] = useState([]);

  const options = { query };

  useEffect(() => {
    fetch("https://dummyjson.com/posts", {
      method: "POST",
      body: JSON.stringify(options),
    })
      .then((res) => res.json())
      .then(setResults);
  }, [query]);

  return <div>{results.length}</div>;
}

export default Search;
