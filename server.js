import express from "express";
import mongoose from "mongoose";
import Cards from "./models/dbCards.js";

//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb://localhost:27017/dating-app'

//Middleware
//DB Config

const connect = async () =>{
	try{
		
		await mongoose.connect(connection_url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
		
		
	}
	catch(err){
		console.log(err);
	}
};
 
mongoose.connection.on("disconnected", ()=> {
	console.log("mongo is disconnected!")
})

mongoose.connection.on("connected", ()=> {
	console.log("mongo is connected!")
})
//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello DatingApp front end"));

app.post("/dating/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/dating/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});


//Listener
app.listen(port, () => {
    connect();
    console.log(`Listening on localhost: ${port}`);
});
