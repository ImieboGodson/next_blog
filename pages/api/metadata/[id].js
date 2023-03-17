import { join } from "path";
import fs from "fs";

function buildPath() {
  return join(process.cwd(), "data", "metadata.json");
}

function extractData(filePath) {
  const dataFile = fs.readFileSync(filePath);
  const data = JSON.parse(dataFile);
  return data;
}

function randomNumber() {
  return Math.floor(Math.random() * 1000);
}
const number = randomNumber();
console.log("Number:", number);

const filePath = buildPath();
const metadata = extractData(filePath);

export default function handler(req, res) {
  const { method, query, body } = req;

  console.log(req.body);
  if (!metadata) {
    res.status(500).json("Data could not be retrieved");
  }

  const id = query.id;

  if (method === "POST") {
    //Likes Route
    if (body.action === "likes") {
      const newMetadata = metadata.map((dt) => {
        if (dt.id === id) {
          res.status(200).json({
            message: "Post Successfully Liked",
          });
          return {
            ...dt,
            likes: (dt.likes += 1),
          };
        }
        return dt;
      });
      fs.writeFileSync(filePath, JSON.stringify(newMetadata));
      res.status(400).json("invalid request, resource not found");
    }

    //Comment Route
    if (body.action === "comment") {
      const { author, profile_image, comment_body, date } = body;
      let defaultAuthor = `Anonymous-${randomNumber()}`;
      let defaultImage = `https://robohash.org/${randomNumber()}`;
      if (!comment_body) {
        return res
          .status(400)
          .json("Invalid request, You can't pass empty comment");
      }
      const newComment = {
        author: author || defaultAuthor,
        profile_image: profile_image || defaultImage,
        comment_body,
        date,
      };
      const newMetadata = metadata.map((dt) => {
        if (dt.id === id) {
          dt.comment;
          res.status(200).json({
            message: "Post Comment Successful",
          });
          return {
            ...dt,
            comment_body: [...comment_body, newComment],
          };
        }
        return dt;
      });
      fs.writeFileSync(filePath, JSON.stringify(newMetadata));
      res.status(400).json("invalid request, resource not found");
    }
  }

  if (method === "GET") {
    if (id) {
      const postData = metadata.find((data) => data.id === id);
      if (postData) {
        return res.status(200).json(postData);
      } else {
        return res.status(400).json("invalid request, resource not found");
      }
    }
  }
}
