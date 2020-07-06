import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SessionContext } from "../App";

export default function Home() {
  const userContext = useContext(SessionContext);
  return (
    <div className="container">
      <div className="row h-100 m-1">
        <div className="col-md-6 my-auto">
          <header className="App-header">
            <h1>YOUR NEXT EVENT</h1>
            <h3>Manage your events from one place</h3>
            <p>
              With "Your Next Event" you can create events, modify them,
              generate invitations and share them. Everything from the same
              place.
            </p>
          </header>
          <div className="row">
            <div className="col-6">
              <Link className="btn btn-1 btn-block btn-lg" to="/events">
                Find events
              </Link>
            </div>
            <div className="col-6">
              {userContext.username ? (
                <Link className="btn btn-2 btn-block btn-lg" to="/create">
                  Create event
                </Link>
              ) : (
                <Link className="btn btn-2 btn-block btn-lg" to="/login">
                  Create event
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-6 my-auto">
          <img
            className="img-fluid"
            src="brand-1.png"
            alt="Girl with computer talking on the phone"
          />
        </div>
      </div>
      <div className="row h-100 m-1">
        <div className="col-md-6 my-auto">
          <img
            className="img-fluid"
            src="brand-2.png"
            alt="Girl screaming with a megaphone"
          />
        </div>
        <div className="col-md-6 my-auto">
          <header className="App-header">
            <h2>FIND AND EXPLORE</h2>
            <h3>Discover something to do</h3>
            <p>
              Find events according to your interests. From local meetings to
              meet new people, to concerts and meetings on a particular topic.
            </p>
          </header>
        </div>
      </div>
      <div className="row h-100 m-1">
        <div className="col-md-6 my-auto">
          <header className="App-header">
            <h2>EASY AND PRACTICAL</h2>
            <h3>Sell and buy tickets</h3>
            <p>Get tickets to events that interest you or distribute yours. </p>
          </header>
        </div>
        <div className="col-md-6 my-auto">
          <img
            className="img-fluid"
            src="brand-3.png"
            alt="Man selling tickets"
          />
        </div>
      </div>
    </div>
  );
}
