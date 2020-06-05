import express, { Express } from "express";
import cors from "cors";
import path from "path";
import routes from "./routes";
import { errors } from "celebrate";

class AppController {
  express: Express;

  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
    this.express.use(errors());
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
  }

  routes() {
    this.express.use(routes);
  }
}

export default new AppController().express;
