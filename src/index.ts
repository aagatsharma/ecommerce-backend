import express, { Express, Request, Response } from "express";
import { PORT } from "./secrets";
import rootRouter from "./routes";
import { PrismaClient } from "@prisma/client";
import { errorMiddleware } from "./middlewares/error";

const app: Express = express();

app.use(express.json());

export const prismaClient = new PrismaClient({
  log: ["query"],
});

app.use(errorMiddleware);

app.use("/api", rootRouter);

app.listen(PORT, () => {
  console.log(`App working on port ${PORT}`);
});
