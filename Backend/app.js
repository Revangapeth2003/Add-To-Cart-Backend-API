import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from './Route/route.js'

import "./connectDataBase/db.js";
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

app.use("/", router);



app.listen(process.env.PORT || 3000, () => {
  console.log("Welcome to the server");
});
