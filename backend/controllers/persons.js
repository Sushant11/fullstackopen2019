const personsRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const Person = require("../models/person");
const User = require("../models/user");

personsRouter.get("/", async (req, res) => {
  // Person.find({}).then(persons => {
  //   res.json(persons.map(person => person.toJSON()));
  // });
  const persons = await Person.find({}).populate("person", {
    username: 1,
    name: 1
  });

  res.json(persons.map(p => p.toJSON()));
});

personsRouter.get("/info", (req, res) => {
  let personLength = Person.length;
  const date = new Date();
  res.send(
    `<h4>PhoneBook has info for ${personLength} people</h4><br/>${date}`
  );
});

personsRouter.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(person => person.id === id);
  if (person) {
    Person.findById(request.params.id).then(note => {
      req.json(note.toJSON());
    });
  } else {
    res.status(404).end();
  }
});

const getTokenFrom = request => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

personsRouter.post("/", async (req, res, next) => {
  const body = req.body;

  const token = getTokenFrom(req)

  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: "token missing or invalid" });
  }

  const user = await User.findById(body.userId);

  if (!body.name) {
    return res.status(400).json({
      error: "content missing"
    });
  } else {
    const person = new Person({
      name: body.name,
      number: body.number,
      id: body.id,
      user: user._id
    });
    try {
      const savedPerson = await person.save();
      user.persons = user.persons.concat(savedPerson._id);
      await user.save();
      res.json(savedPerson.toJSON());
    } catch (exception) {
      next(exception);
    }
  }
  // person
  //   .save()
  //   .then(savedPerson => {
  //     res.json(savedPerson.toJSON());
  //   })
  //   .catch(error => next(error));
});

personsRouter.delete("/:id", (req, res, next) => {
  console.log(Person);
  Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end();
    })
    .catch(error => next(error));
});

module.exports = personsRouter;
