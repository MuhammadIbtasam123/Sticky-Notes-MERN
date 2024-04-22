const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.get("/notes", (req, res) => {
  const notes = [
    {
      id: 1,
      title: "Learning MERN, code with Ahsan.",
      description: "MERN is a full stack framework for web development.",
    },
    {
      id: 2,
      title: "Learning MERN, code with hitesh choudhary.",
      description: "MERN is a full stack framework for web development",
    },
    {
      id: 3,
      title: "Learning MERN, code with codevolution.",
      description: "MERN is a full stack framework for web development",
    },
    {
      id: 4,
      title: "Learning MERN, code with codevolution.",
      description: "MERN is a full stack framework for web development",
    },
    {
      id: 5,
      title: "Learning MERN, code with codevolution.",
      description: "MERN is a full stack framework for web development",
    },
    {
      id: 6,
      title: "Learning MERN, code with codevolution.",
      description: "MERN is a full stack framework for web development",
    },
    {
      id: 7,
      title: "Learning MERN, code with codevolution.",
      description: "MERN is a full stack framework for web development",
    },
    {
      id: 8,
      title: "Learning MERN, code with codevolution.",
      description: "MERN is a full stack framework for web development",
    },
    {
      id: 9,
      title: "Learning MERN, code with codevolution.",
      description: "MERN is a full stack framework for web development",
    },
    {
      id: 10,
      title: "Learning MERN, code with codevolution.",
      description: "MERN is a full stack framework for web development",
    },
  ];
  res.send({
    notes: notes,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
