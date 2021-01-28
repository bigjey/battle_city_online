import express from "express";
import path from "path";
import fs from "fs";
import bodyParser from "body-parser";
import cors from "cors";
import { v4 as uuid } from "uuid";

const rootPath = process.cwd();
const levelsPath = path.join(rootPath, "data", "levels");

if (!fs.existsSync(levelsPath)) {
  fs.mkdirSync(levelsPath, { recursive: true });
}

function getLevelNames() {
  return fs
    .readdirSync(levelsPath, "utf8")
    .map((levelName) => levelName.replace(/.json$/, ""));
}

function getLevel(id) {
  const fileName = `${id}.json`;
  const filePath = path.resolve(levelsPath, fileName);

  return fs.readFileSync(filePath, "utf8");
}

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.resolve(rootPath, "dist")));

app.get("/api/levels", (req, res) => {
  res.json(getLevelNames());
});

app.get("/api/levels/:id", (req, res) => {
  res.json(JSON.parse(getLevel(req.params.id)));
});

app.post("/api/levels/:id", (req, res) => {
  const id = req.params.id;

  const fileName = `${id}.json`;
  const filePath = path.resolve(levelsPath, fileName);

  const levelData = JSON.parse(getLevel(id));

  levelData.data = req.body;

  fs.writeFileSync(filePath, JSON.stringify(levelData), "utf8");

  res.status(200).end();
});

app.post("/api/levels", (req, res) => {
  const id = uuid();
  const data = {
    name: `${id}`,
    order: -1,
    data: [],
  };
  const fileName = `${id}.json`;
  const filePath = path.resolve(levelsPath, fileName);

  fs.writeFileSync(filePath, JSON.stringify(data), "utf8");

  res.json({ id, levels: getLevelNames() });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
