import "./App.css";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import Footer from "./components/Footer/Footer";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Title />
        <Switch>
          <Route exact path="/saved" component={Saved} />
          <Route path="/" component={Search} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
