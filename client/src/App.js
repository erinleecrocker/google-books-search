import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import BookDisplay from "./components/BookDisplay/BookDisplay";

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
        <Navbar />
        <Title />
        <BookDisplay /> 
    </div>
  );
}

export default App;
