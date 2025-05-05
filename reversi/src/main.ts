import express from "express";
import morgan from "morgan";

const PORT = 3311;

const app = express();

app.use(morgan("dev"));

// extensions指定することでURL末尾の拡張子を省略
app.use(express.static("static", { extensions: ["html"] }));

app.get("/api/hello", async (req, res) => {
  res.json({
    message: "hello express",
  });
});

app.get("/api/error", async (req, res) => {
  throw new Error("error occurred");
});

// app.use()はミドルウェアであり、app.listen()より前に書く
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: {
      message: err.message,
    },
  });
});

app.use((req, res, next) => {
  res.status(404).json({
    error: {
      message: "not found",
    },
  });
});

app.listen(PORT, () => {
  console.log(`reversi app started: http://localhost:${PORT}`);
});
