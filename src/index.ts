import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("API is working");
});

const PORT = 8000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`App working on port ${PORT}`);
});
