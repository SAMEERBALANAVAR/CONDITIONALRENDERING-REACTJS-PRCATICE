import react from "react";
import Login from "./Login";
import input from "./Input";

var UserIsRegistered = true;

function App() {
  return (
    // ternaryoperator
    // <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>

    <div className="container">
      <Login isRegistered={UserIsRegistered} />
    </div>
  );
}

export default App;
