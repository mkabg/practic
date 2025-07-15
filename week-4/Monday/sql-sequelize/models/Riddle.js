import { DataType } from "sequelize";
import Sequelize from "../db.js";
import sequelize from "../db.js";

const Riddle = sequelize.define("Riddle", {
    title: {
        type: DataType.STRING,
        allowNull: false,
    },
    question: {
        type: DataType.TEXT,
    },
    correctAnswer: {
        type: DataType.STRING,
    },

}, {
    tableName: "riddles",
    timestamps: "false",
});

export default Riddle;
