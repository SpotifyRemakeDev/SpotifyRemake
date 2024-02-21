import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Music from "./models/Music";

dotenv.config({ path: "../.env" });

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/musicData", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(" MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!");
    console.log(err);
  });

app.get("/music", async (req, res) => {
  const newMusic = await Music.find({});
  res.send(newMusic);
});

app.get("/music/:id", async (req, res) => {
  const { id } = req.params;
  const indexMusic = await Music.findById(id);
  res.send(indexMusic);
});

app.listen(3000, () => {
  console.log(`Listening on port ${3000}`);
});
