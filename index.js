import express from "express";
import env from "dotenv";
import cors from "cors";
import dbConnect from "./config/db.js";
import userRoute from "./routes/userRoutes.js";

const app = express();
const dotenv = env.config();
dbConnect();
const PORT = process.env.PORT || 4000;
app.use(express.json());

app.use(cors());

// app.use("/", (req, res)=>{
//     res.send("Hello I'm Server");
// });

app.use("/api/v1/user", userRoute);

app.listen(PORT, ()=>{
    console.log(`Server is Running on PORT : ${PORT}`);
})