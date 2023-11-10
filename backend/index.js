import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./model/bookModel.js";
import bookRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

//Middleware for parsing body
app.use(express.json());
app.use(cors());

app.get("/", (requset, response) => {
  console.log(requset);
  return response.status(200).send("welcome to MERN!");
});

app.use("/books", bookRoute);

// const corsOptions = {
//   origin: "http://localhost:5173", // Replace with your client's origin
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true, // If you're using cookies or sessions
//   optionsSuccessStatus: 204, // Some legacy browsers (IE) choke on 204
// };

// app.use(cors(corsOptions));
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected with mongo");
    app.listen(PORT, () => {
      console.log(`The server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
