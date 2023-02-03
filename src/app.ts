import express from "express";

const app = express();

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
