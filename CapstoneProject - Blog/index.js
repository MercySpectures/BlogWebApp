import express from "express";
import bodyParser from "body-parser";
import { title } from "process";

const app = express();
const port = 3000;

app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)  => {
    res.render("index.ejs");
});

app.get("/home", (req, res)  => {
    res.render("home.ejs");
});

app.post("/subscribe", (req, res) => {
    const subscriber = req.body["email"];
    console.log(subscriber);
    res.render("home.ejs");
});

app.get("/blog", (req, res) => {
    res.render("blog.ejs");
});

app.post("/createBlog", (req, res) => {
    const BlogInfo = {
        Title : req.body?.title,
        Author : req.body?.author,
        Desc : req.body?.blogDescription,
        Blog : req.body?.blogContent,
    }
    res.render("blog.ejs", {BlogInfo});
    console.log(BlogInfo);
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.listen(port, () => {
    console.log("Listening");
});