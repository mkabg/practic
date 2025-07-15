import {
    getAllRiddles,
    getRiddleById,
    addRiddle,
    updateRiddle,
    deleteRiddle
} from '../DAL/riddleDAL.js';

export const getRiddles = async (req, res) => {
    try {
        const riddles = await getAllRiddles();
        res.json(riddles);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err });
    }
};

export const getRiddle = async (req, res) => {
    try {
        const riddle = await getRiddleById(req.parms.id);
        if (!riddle) return res.status(404).json({ error: "Riddle not found"});
    } catch (err) {
        console.log(err);
        res.status(500).json({ err });
    }
};

export const updateRiddle = async (req, res) => {
    try {
        const riddle = await getRiddleById(req.parms.id);
        if (!riddle) return res.status(404).json({ error: "Riddle not found"});
        res.json(riddle);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err });
    }
};