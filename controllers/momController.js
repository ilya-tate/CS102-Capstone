const mongoose = require("mongoose");

const { NotFound } = require("http-errors");
const Mom = require("../models/Mom");

const createMom = async (req, res) => {
  const mom = await Mom.create(req.body);
  res.status(200).json({ mom });
};

const deleteMom = async (req, res) => {
  const { id } = req.params;
  const mom = await Mom.findByIdAndUpdate({ _id: id });
  if (!mom) {
    throw new NotFound(`No mom with id ${id}`);
  }
  res.status(200).json({ mom });
};

const getMom = async (req, res) => {
  const { id } = req.params;
  const mom = await Mom.findById({ _id: id });
  if (!mom) {
    throw new NotFound(`No mom with id ${id}`);
  }
  res.status(200).json({ mom });
};

const getAllMoms = async (req, res) => {
  const mom = await Mom.find({});
  res.status(200).json({ moms });
};

const updateMom = async (req, res) => {
  res.send("Mom");
};

module.exports = { createMom, deleteMom, getMom, getAllMoms, updateMom };
