const express = require("express");
const cors = require("cors");
const sequelize = require("./db/db");
const Note = require("./model/Notes.model");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/notes", async (req, res) => {
  try {
    // get the notes from database
    const notes = await Note.findAll();
    const allNotes = notes.map((note) => note.dataValues);
    res.status(200).send({ notes: allNotes });
  } catch (error) {
    console.error("Unable to get notes", error);
    res.status(500).send({ error: "Unable to get notes" });
  }
});

app.post("/createNote", async (req, res) => {
  try {
    const { title, description, dateTime } = req.body;
    // create a note
    const note = await Note.create({ title, description, dateTime });
    // get all notes from database
    const notes = await Note.findAll();
    const allNotes = notes.map((note) => note.dataValues);
    res.status(200).send({ notes: allNotes });
  } catch (error) {
    console.error("Unable to create note", error);
    res.status(500).send({ error: "Unable to create note" });
  }
});

app.patch("/updateNote/:id", async (req, res) => {
  try {
    console.log(req.body);
    const { id } = req.params;
    const { title, description, dateTime } = req.body;
    // update a note
    const noteUpdate = await Note.update(
      { title, description, dateTime },
      { where: { id } }
    );
    console.log(noteUpdate);
    // get all notes from database
    const notes = await Note.findAll();
    const allNotes = notes.map((note) => note.dataValues);
    res.status(200).send({ notes: allNotes });
  } catch (error) {
    console.error("Unable to update note", error);
    res.status(500).send({ error: "Unable to update note" });
  }
});

app.post("/deleteNote/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // delete a note
    const noteDelete = await Note.destroy({ where: { id } });
    console.log(noteDelete);
    // get all notes from database
    const notes = await Note.findAll();
    const allNotes = notes.map((note) => note.dataValues);
    res.status(200).send({ notes: allNotes });
  } catch (error) {
    console.error("Unable to delete note", error);
    res.status(500).send({ error: "Unable to delete note" });
  }
});
app.listen(port, () => {
  // verify the connection to the database
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
      // Add random data to the database
      // const notes = [
      //   {
      //     id: 1,
      //     title: "Learning MERN, code with Ahsan.",
      //     description: "MERN is a full stack framework for web development.",
      //   },
      //   {
      //     id: 2,
      //     title: "Learning MERN, code with hitesh choudhary.",
      //     description: "MERN is a full stack framework for web development",
      //   },
      //   {
      //     id: 3,
      //     title: "Learning MERN, code with codevolution.",
      //     description: "MERN is a full stack framework for web development",
      //   },
      //   {
      //     id: 4,
      //     title: "Learning MERN, code with codevolution.",
      //     description: "MERN is a full stack framework for web development",
      //   },
      //   {
      //     id: 5,
      //     title: "Learning MERN, code with codevolution.",
      //     description: "MERN is a full stack framework for web development",
      //   },
      //   {
      //     id: 6,
      //     title: "Learning MERN, code with codevolution.",
      //     description: "MERN is a full stack framework for web development",
      //   },
      // ];
      // notes.forEach((note) => {
      //   Note.create(note)
      //     .then((note) => {
      //       console.log("Note has been created", note);
      //     })
      //     .catch((error) => {
      //       console.error("Unable to create note", error);
      //     });
      // });
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
    });
  console.log(`Server is running on port http://localhost:${port}`);
});
