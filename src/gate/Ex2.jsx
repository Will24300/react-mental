import React, { useState, useEffect } from "react";
import useFetch from "../useFetch";

function Ex2() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const fetchData = async () => {
    //   setLoading(true);
    //   try {
    //     const response = await fetch(
    //       "https://dummy.restapiexample.com/api/v1/employees",
    //     );
    //     const result = await response.json();
    //     setData(result.data);
    //     setLoading(false);
    //   } catch (error) {
    //     setError(error);
    //     setLoading(false);
    //   }
    // };

    // fetchData();
    async function getData() {
      setLoading(true);
      try {
        const d = await useFetch();
        setData(d);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    getData();
  }, []);

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error.....{error.message}</p>;
  return (
    <div className="App">
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data && data.map((ele) => <p>{ele.employee_name}</p>)}
    </div>
  );
}

export default Ex2;
