//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,db)=>{
 //deleteMany
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
//   console.log(result);
// },(err)=>{
//   console.log('Unable to delete');
// })
//  deleteOne
//  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
//    console.log(result);
//  },(err)=>{
//    console.log('Unable to delete');
//  })

 //findOneAndDelete
 // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
 //   console.log(result);
 // },(err)=>{
 //   console.log('Unable to delete');
 // })
 //  if(err){
 //    return console.log('Unable to connect tomondodb server');
 //  }
 //  console.log('connected to mongodb server');



  // //Delete from User table
  // db.collection('Users').deleteMany({name:'Priyanka'}).then((result)=>{
  //   console.log(result);
  // },(err) =>{
  //   console.log('Unable to delete');
  // })

  //delete using id
  db.collection('Users').findOneAndDelete({
    _id : new ObjectID('5ba8c55b775b6be469f76152')}).then((result)=>{
      console.log(JSON.stringify(result,undefined,2));
    })
  db.close();
});
