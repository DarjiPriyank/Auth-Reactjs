import React, { useEffect, useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Home() {
  const [userData, setUserData ] = useState([]);
  const history = useHistory();
    useEffect(() => {
    let token = localStorage.getItem("auth-token");
    console.log(token);
    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    }
    axios
      .get("/user/home", {
        headers: { Authorization: token },
      })
      .then((res) => {
        setUserData(res.data.user)
        console.log(res);
      })
      .catch((err) => {
        history.push("/Login");
        console.log(err.response);
      });
    }, []);
  return (
    <div>
      <h1>Welcome
      {
      userData.name
      }</h1>
    </div>
  );
}

export default Home;
