import express from "express";
import { Board } from "./@core/types/types";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res, next) => {
  res.send("ok");
});

app.get("/api/article", (req, res, next) => {
  const boards: Board[] = [
    { id: 141, content: "첫번째 게시글입니다." },
    { id: 145, content: "두번째 게시글입니다." },
  ];

  res.send(boards);
});

app.listen(3030, () => {
  console.log("listening");
});
