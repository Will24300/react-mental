import React from "react";

function useFetch(url) {
    const [data, setData] = useS
  async function getData() {
    const res = await fetch(url);
    if (!res.ok) {
      throw {
        message: "Failed to fetch",
      };
    }
    const data = await res.json();
    return data;
  }
  getData();
}

export default useFetch;
