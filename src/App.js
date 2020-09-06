import React, { useState } from "react";
import "./App.css";
import Header from "./layout/Header";
import Login from "./components/Login";

export const UserContext = React.createContext();
function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  return (
    <div className="App">
      <UserContext.Provider value={{ userData, setUserData }}>
        <Header />
      </UserContext.Provider>
    </div>
  );
}

export default App;
