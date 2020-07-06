import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";

export default function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch([`/api/events`])
      .then((response) => response.json())
      .then((json) => {
        if (json) {
          setEvents(json);
        }
      });
  }, []);
  return (
    <div className="text-center">
      <h2>EVENTS AVAILABLE TO YOU</h2>
      <div className="row">
        {events.map((event, index) => (
          <div
            className="col-lg-4 col-md-6 col-xs-12 p-2 align-self-center"
            key={index}
          >
            <div className="card bg-dark text-white">
              <img
                className="card-img"
                src={`https://picsum.photos/400/200?random=${index}`}
                alt="Random"
              />
              <div className="card-img-overlay">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">{format(event.date)}</p>
                <Link className="btn btn-1" to={`/events/${event._id}`}>
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
