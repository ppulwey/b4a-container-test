import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World aa!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
