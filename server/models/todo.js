var mongoose = require('mongoose');
// Configure mongoose model
var ToDo = mongoose.model('ToDo',{
  text : {
      type: String,
      required : true,
      minlength :1,
      trim: true
  },
  completed :{
    type: Boolean,
    default : false
  },
  completedAt :{
    type: Number,
    default : null
  }
});
//Creating and instance
var newToDo = new ToDo({
  text : true

});



//Saving the instance
newToDo.save().then((doc)=>{
  console.log('Saved todo',doc);
},(e)=>{
  console.log('Unable to save todo',e);
})

module.exports = {ToDo};
