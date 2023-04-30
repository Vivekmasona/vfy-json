import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import path from "path";
const __dirname = path.resolve();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

const ssyoutube = async (url) => {
  const res = await axios.post("https://ssyoutube.com/api/convert", {
    url: url,
  });
  return res.data;
};

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/api", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/hack/youtube", async (req, res) => {
  const url = req.query.url;
  try {
  const data = await ssyoutube(url);
  res.json({
    "status": true,
    "result": data
})
  } catch{
    res.json({
      "status": false,
  })
  }
});
app.get("/hack/tiktok", async (req, res) => {
  const url = req.query.url;
  try {
    const data = await ssyoutube(url);
    res.json({
      "status": true,
      "result": data
  })
    } catch{
      res.json({
        "status": false,
    })
    }
});
app.get("/hack/twitter", async (req, res) => {
  const url = req.query.url;
  try {
    const data = await ssyoutube(url);
    res.json({
      "status": true,
      "result": data
  })
    } catch{
      res.json({
        "status": false,
    })
    }
});
app.get("/hack/facebook", async (req, res) => {
  const url = req.query.url;
  try {
    const data = await ssyoutube(url);
    res.json({
      "status": true,
      "result": data
  })
    } catch{
      res.json({
        "status": false,
    })
    }
});
app.get("/hack/instagram", async (req, res) => {
  const url = req.query.url;
  try {
    const data = await ssyoutube(url);
    res.json({
      "status": true,
      "result": data
  })
    } catch{
      res.json({
        "status": false,
    })
    }
});
app.get("/hack", async (req, res) => {
  const url = req.query.url;
  console.log(url);
  const info = await ytdl.getInfo(url);
  const title = info.videoDetails.title;
  const thumbnail = info.videoDetails.thumbnails[0].url;
  let formats = info.formats;

  const audioFormats = ytdl.filterFormats(info.formats, "audioonly");
  // const format = ytdl.chooseFormat(info.formats, { quality: "249" });
  formats = formats.filter((format) => format.hasAudio === true);

  res.send({ title, thumbnail, audioFormats, formats });
});
app.listen(port);
console.log(`Server running on port ${port}`);
