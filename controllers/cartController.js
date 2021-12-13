const mongoose = require("mongoose");

const { notFound } = require("../middleware");
const { BadRequestError } = require("../errors");
const Cart = require("../models/Cart");

const createCart = async (req, res) => {
  const cart = await Cart.create(req.body);
  res.status(200).json({ cart });
};

const deleteCart = (req, res) => {
  const { id } = req.params;
  const cart = await Cart.findByIdAndUpdate({ _id: id });
  if (!cart) {
    throw new notFound(`No cart with is ${id}`);
  }
  res.status(200).json({ cart });
};

const getCart = (req, res) => {
  const { id } = req.params;

  const cart = await Cart.findOneById({ _id: id });

  if (!cart) {
    throw new notFound(`No cart with is ${id}`);
  }
  res.status(200).json({ cart });
};

const getAllCarts = async (req, res) => {
  const carts = await Carts.find({}).sort("id");
  res.status(200).json({ carts, count: carts.length });
};

const updateCart = (req, res) => {
  const { id, item } = req.body;
  if (!item) {
    throw new BadRequestError("Cart must not be empty");
  }
  const cart = await Cart.FindByIdAndUpdate(
    { id },
    { new: true, runValidators: true }
  );
  if (!job) {
    throw new notFound(`No cart with is ${id}`);
  }
  res.status(200).json(cart);
};

module.exports = { createCart, deleteCart, getCart, getAllCarts, updateCart };
