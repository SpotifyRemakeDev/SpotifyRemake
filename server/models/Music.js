import mongoose from "mongoose";

const musicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    lowercase: true,
    enum: ["rock", "pop", "rap"],
  },
});

const Music = mongoose.model("Music", musicSchema);

export default Music;
