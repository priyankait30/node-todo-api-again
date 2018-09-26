//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,db)=>{
//findOneAndUpdate
db.collection('ToDos').findOneAndUpdate({
  _id : new ObjectID('5ba8c1d6775b6be469f760ca')
},{
  $set : {
    completed :true
   }
  },{
    returnOriginal :false
}).then((result)=>{
  console.log(result);
});

  db.close();
});
