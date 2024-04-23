// import { Model, DataTypes } from "sequelize";
// import sequelize from "../database/config.js";

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

class Note extends Model {}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dateTime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Note",
  }
);

// if database is not there
Note.sync();

module.exports = Note;
