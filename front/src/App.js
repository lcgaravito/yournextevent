import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// Components
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Login from "./components/Login";
import Create from "./components/Create";
import Profile from "./components/Profile";
import Events from "./components/Events";

// Context
export const SessionContext = React.createContext();

function App() {
  const [_id, set_id] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch([`/getUser`])
      .then((response) => response.json())
      .then((json) => {
        if (json) {
          set_id(json._id);
          setUsername(json.username);
        }
      });
  }, []);

  return (
    <Router>
      <SessionContext.Provider value={{ _id, username, set_id, setUsername }}>
        <Navigation />
        <div className="container p-4">
          <Route path="/" exact component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/create" component={Create} />
          {username ? (
            <>
              <Route path="/profile" component={Profile} />
              <Route path="/login" component={Profile} />
            </>
          ) : (
            <>
              <Route path="/login" component={Login} />
              <Route path="/profile" component={Login} />
            </>
          )}
        </div>
      </SessionContext.Provider>
    </Router>
  );
}

export default App;
