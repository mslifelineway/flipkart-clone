import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Layout from "./components/Layout";
import Switch from "react-bootstrap/esm/Switch";
import Home from "./container/Home";
import SignIn from "./container/Signin";
import SignUp from "./container/Signup";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
