import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";
import { Book, BookModel } from "./database/models/book";

dotenv.config();

const dbConnectionString =
  process.env.NODE_ENV === "production"
    ? `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.9pnuu.mongodb.net/?retryWrites=true&w=majority`
    : "mongodb://localhost:27017/b4a-test";

const app: Express = express();
const port = process.env.PORT || 3333;

app.use(express.json());
let connectOptions: mongoose.ConnectOptions = {
  serverSelectionTimeoutMS: 5000,
};

if (process.env.NODE_ENV === "production") {
  connectOptions = {
    ...connectOptions,
    // sslValidate: false,
    // ssl: false,
    // authSource: "admin",
    // directConnection: false,
  };
}

mongoose
  .connect(dbConnectionString, connectOptions)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World aa!");
});

app.post(
  "/book",
  async (req: Request<{}, Book>, res: Response, next: NextFunction) => {
    const newBook = new BookModel(req.body);

    try {
      const result = await newBook.save();
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

app.get("/books", async (req: Request, res: Response, next: NextFunction) => {
  // Get all books from database async
  try {
    const result = await BookModel.find({});
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(
    `Server is running on port ${port} in environment ${process.env.NODE_ENV}`
  );
});
