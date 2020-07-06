import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { SessionContext } from "../App";

export default function Profile() {
  const userContext = useContext(SessionContext);
  const history = useHistory();
  const logOut = () => {
    fetch([`/logout`])
      .then((response) => response.json())
      .then((json) => {
        if (json.ok) {
          userContext.set_id(null);
          userContext.setUsername(null);
          history.push("/");
        }
      });
  };
  return (
    <div className="container text-center col-md-6 offset-md-3">
      <h2>PROFILE</h2>
      <hr className="my-4"></hr>
      <h3>Username: {userContext.username}</h3>
      <img
        src="profile.png"
        alt="Token greenMan in colorful clothes"
        className="img-fluid"
      />
      <hr className="my-4"></hr>
      <button
        type="button"
        onClick={() => logOut()}
        className="btn btn-2 btn-lg"
      >
        Log Out!
      </button>
    </div>
  );
}
