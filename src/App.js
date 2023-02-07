import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
// import Table from "./Table";
// import "./App.css";

export default function App() {
  // data state to store the TV Maze API data. Its initial value is an empty array
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      setData(result.data);
      console.log(data);
    })();
  }, []);

  return (
    <div className="App">
      <h1>React table component guide </h1>
    </div>
  );
}
