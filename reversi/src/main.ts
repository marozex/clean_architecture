import express from "express";
import morgan from "morgan";

const PORT = 3311;

const app = express();

app.use(morgan("dev"));

app.get("/api/hello", async (req, res) => {
  res.json({
    message: "hello express",
  });
});

app.get("/api/error", async (req, res) => {
  throw new Error("error occurred");
});

app.listen(PORT, () => {
  console.log(`reversi app started: http://localhost:${PORT}`);
});
