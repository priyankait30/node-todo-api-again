//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//var obj = new ObjectID();
//console.log(obj);
MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,db)=>{
  if(err){
    return console.log('Unable to connect tomondodb server');
  }
  console.log('connected to mongodb server');
  // db.collection('Todos').find({
  //   _id : new ObjectID('5ba8ba519eac7e3bc85a7b72')
  // }).toArray().then((docs)=>{
  //   console.log('todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('unable to fetch',err)
  // })

  // db.collection('Todos').find({
  //   //_id : new ObjectID('5ba8ba519eac7e3bc85a7b72')
  // }).count().then((count)=>{
  //   console.log(`todos count:${count}`);
  //   //console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('unable to fetch',err)
  // })

db.collection('Users').find({name : 'Priyanka'}).toArray().then((docs) =>{
  console.log('users');
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log('Unable to fetch',err);
})

  db.close();
});
