const { MongoClient } = require("mongodb");
const { resolve } = require("path");

const url = "mongodb://127.0.0.1:27017";

const mongo = new MongoClient(url);

const login = (data) => {
  return new Promise((resolve, reject) => {
    mongo.connect().then((client) => {
      client
        .db("NOPE")
        .collection("user")
        .findOne({username:data.username})
        .then((value) => {
          if (value) {
            if(value.password == data.password)resolve({status:200,data:"Successfully logged"})
            else resolve({status:405,data:"Password is incorrect"})
          }
          else resolve({ status: 405, data: "No user" });
        });
    });
  });
};

const register = (values) => {

    return new Promise((resolve,reject) => {
      
      mongo.connect().then((user) => {
       user.db('NOPE').collection("user").findOne(values).then((data)=> {
        if (data) resolve({ status: 200 , data: "Already a user"});
        else user.db("NOPE").collection("user").insertOne(values).then((data) => {
          resolve({ status: 200 , data: "Successfully registered"});
        })
       })
      })  
    })
}

module.exports = {login,register}
