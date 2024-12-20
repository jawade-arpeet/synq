import { Router } from "express";
import bcrypt from "bcrypt";

import user from "../models/user";

const registerRouter = Router();

registerRouter.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const existingUser = await user.findOne({ email });

  if (existingUser) {
    res.status(400).json({ message: "User already exists" });
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await user.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  res.status(201).json(newUser);
  return;
});

export default registerRouter;
