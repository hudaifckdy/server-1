const {MongoClient} = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const mongo = new MongoClient(url);
mongo.connect().then(shell)


function shell(drive){
    drive.db("SH_Creations").collection("user").insertOne({userName:"hudaif",password:"12345678"}).then(()=>mongo.close())

}




