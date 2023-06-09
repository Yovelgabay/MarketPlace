import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false},
  savedItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "Items" }],
  createdItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "Items" }],

});

export const UserModel = mongoose.model("users", UserSchema);