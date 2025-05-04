import express from "express";
const PORT = 3311;

const app = express();

app.get("/api/hello", async (req, res) => {
  res.json({
    message: "hello express",
  });
});

app.listen(PORT, () => {
  console.log(`reversi app started: http://localhost:${PORT}`);
});
