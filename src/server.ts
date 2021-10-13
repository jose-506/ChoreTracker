import express, { Request, Response } from "express";
import connectDB from "./config/db";
import path from "path";

const app = express();

// DB connection
connectDB();

app.use("/api/chores", require("./routes/chores"));

// static folder
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
//   );
// }

// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });

const PORT = 3333;
// const PORT =
//   process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;

app.listen(PORT, () => console.log(`-- Server Running on port: ${PORT}`));
