import express from "express";
import env from "dotenv";
import cors from "cors";

const app = express();
const dotenv = env.config();
const PORT = 4000;

app.use(cors());

app.listen(PORT, ()=>{
    console.log(`Server is Running on PORT : ${PORT}`);
})