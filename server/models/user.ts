import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  links: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "link",
  },
});

const user = mongoose.model("user", userModel);

export default user;
