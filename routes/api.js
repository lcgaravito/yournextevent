var express = require("express");
var router = express.Router();
var mu = require("../db/MongoUtils");

/* GET - API of the App. */
router.get("/", (req, res) => {
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ error: "You need to be authenticated" });
  }
});

router.put("/update", (req, res) => {
  mu.updateUser(req.user._id, req.body).then(
    res.json({ error: "Update succesfully" })
  );
});

router.get("/events", (req, res) => {
  mu.getEvents().then((events) => res.json(events));
});

router.get("/events/:id", (req, res) => {
  mu.getEventByID(req.params.id).then((event) => res.json(event));
});

router.post("/events", (req, res) => {
  if (!req.user) {
    res.json({ error: "You need to be authenticated" });
  } else {
    const event = {
      title: req.body.title,
      description: req.body.description,
      user: {
        _id: req.user._id,
        username: req.user.username,
      },
      tickets: req.body.tickets,
      price: req.body.price,
      date: req.body.date,
      location: req.body.location,
    };
    mu.createEvent(event).then(res.json({ message: "Event Saved" }));
  }
});

module.exports = router;
