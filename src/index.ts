import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import pub from './publisher';
var app = express();


app.use(cors({
    exposedHeaders: ['Content-Length', 'Content-Type'],
}));


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.post("/pub", function (req, res) {
    pub('track', req.body.latLong)
    res.status(200).send('Ok')
})


app.listen(3000);
