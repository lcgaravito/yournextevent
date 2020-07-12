import React, { useState, useEffect, useRef } from "react";
import { format } from "timeago.js";
import "./Events.css";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [img, setImg] = useState("");

  const counter = useRef(0);

  useEffect(() => {
    fetch([`/api/events`])
      .then((response) => response.json())
      .then((json) => {
        if (json) {
          setEvents(json);
        }
      });
  }, []);

  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= events.length) {
      setLoading(false);
    }
  };

  const seeDetails = (event, index) => {
    setTitle(event.title);
    setDescription(event.description);
    setUser(event.user.username);
    setPrice(event.price);
    setDate(event.date);
    setLocation(event.location);
    setImg(`https://picsum.photos/800/500?random=${index}`);
  };

  return (
    <div className="text-center">
      <h2>EVENTS AVAILABLE TO YOU</h2>
      <div
        style={{ display: loading ? "inline-block" : "none" }}
        className="spinner-border text-secondary"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div
        style={{
          transition: "opacity 1s ease-out",
          opacity: loading ? "0" : "1",
          height: loading ? "0" : "auto",
        }}
      >
        <div className="row">
          {events.map((event, index) => (
            <div
              className="col-lg-4 col-md-6 col-xs-12 p-2 align-self-center"
              key={index}
            >
              <div
                className="card bg-dark text-white"
                data-toggle="modal"
                data-target="#staticBackdrop"
                onClick={() => seeDetails(event, index)}
              >
                <img
                  className="card-img"
                  src={`https://picsum.photos/800/500?random=${index}`}
                  alt="Random"
                  onLoad={imageLoaded}
                />
                <div className="card-img-overlay img-card">
                  <div className="row h-100">
                    <div className="col-12 my-auto">
                      <h5 className="card-title">{event.title}</h5>
                      <p className="card-text">
                        {event.location}
                        <br />
                        {format(event.date)}
                      </p>
                      {/*<!-- Button trigger modal -->*/}
                      <button
                        type="button"
                        className="btn btn-2"
                        data-toggle="modal"
                        data-target="#staticBackdrop"
                        onClick={() => seeDetails(event, index)}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*<!-- Modal -->*/}
      <div
        className="modal fade"
        id="staticBackdrop"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div
              className="modal-body bg-dark"
              style={{
                backgroundImage: `url(${img})`,
                height: "100%",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="img-modal">
                <div className="row h-100 p-4">
                  <div className="col-md-7 my-auto">
                    <h2>{title}</h2>
                    <br />
                    <p>{description}</p>
                    <p>Date: {format(date)}</p>
                    <p>Location: {location}</p>
                    <p>Organizer: {user}</p>
                  </div>
                  <div className="col-md-5 modal-right align-self-end">
                    <h3>${price}</h3>
                    <button
                      type="button"
                      className="btn btn-primary btn-block m-1"
                    >
                      Buy
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-block m-1"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
