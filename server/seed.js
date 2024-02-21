import mongoose from "mongoose";
import Music from "./models/Music";

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

const seedMusic = [
  {
    name: "Tupac",
    price: 15.25,
    category: "rap",
  },
  {
    name: "Kelly Clarkson",
    price: 12.0,
    category: "pop",
  },
  {
    name: "Shakira",
    price: 13.15,
    category: "pop",
  },
  {
    name: "Green Day",
    price: 19.1,
    category: "rock",
  },
];

Music.insertMany(seedMusic)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });

// const m = new Music({
//   name: "Tupac",
//   price: 15.25,
//   category: "rap",
// });

// m.save()
//   .then((m) => {
//     console.log(p);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
