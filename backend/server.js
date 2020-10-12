import express from "express";

const app = express();

app.get("/check", (req, res)=> {
    res.send("uhaha")
})

app.listen(3000, () => {
    console.log("Server started at 3000 port")
})