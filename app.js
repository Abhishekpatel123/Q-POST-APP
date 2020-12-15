const express = require('express');
const app = express();
require("./db/connection");
const Questionmodel = require('./models/schema');

const port = 8000 || process.env.PORT;
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.send("index");
});

app.get("/a",async (req,res)=>{
    const data = await Questionmodel.find();
    const data1 = JSON.stringify(data);
       console.log(typeof(data) + "data");     
       res.send(data1);  
});

app.post("/ans", async (req, res) => {

    try {
        const questionRegister = new Questionmodel({
            QuestionType: req.body.questiontype,
            Question: req.body.putquestion,

        });
        const registerd = await questionRegister.save();
        res.status(201).send("Your question is successfully submited");
       //  retrive data from database
    //    const data = await Questionmodel.findOne();
    //    console.log(data + "data");       


    } catch (error) {
        res.status(400).send(error);
    }
});


app.listen(port, () => { console.log("listening " +  port) });