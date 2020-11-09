import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import SearchContainer from "./components/SearchContainer";

function App() {
  useEffect(() => {
    console.log("Make an API call");
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
        <SearchContainer /> 
    </div>
  );
}

export default App;
