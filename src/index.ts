import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import { AppRoutes } from "./routes";

createConnection()
  .then(async (connection) => {
    const app = express();

    app.use(express.json());

    // register all application routes
    AppRoutes.forEach((route) => {
      app[route.method](
        route.path,
        (request, response, next) => {
          route
            .action(request, response)
            .then(() => next)
            .catch((err) => next(err));
        }
      );
    });

    app.listen(3000);
    console.log("Server running on http://localhost:3000");
  })
  .catch((error) => console.log(error));
