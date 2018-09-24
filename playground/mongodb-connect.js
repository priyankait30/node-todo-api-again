//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,db)=>{
  if(err){
    return console.log('Unable to connect tomondodb server');
  }
  console.log('connected to mongodb server');
  // db.collection('Todos').insertOne({
  //   text :'Something to do',
  //   completed :false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('Users').insertOne({
    name :'Priyanka',
    age :29,
    location :'Toronto'
  },(err,result)=>{
    if(err)
    {
      return console.log('Unable to insert user',err)
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });
  db.close();
});
