var mongoose = require('mongoose');

// Configuring new mongoose User model
var User = mongoose.model('User',{
  email :{
    type : String,
    required : true,
    minlength : 1,
    trim : true
  }
});
//Creating a new instance of User model
var newUser = new User({
  email : 'priyankait3069@gmail.com'
})
//Saving the instance
newUser.save().then((doc) =>{
  console.log('Saved user',doc)
},(e)=>{
  console.log('Unable to save',e);
})

module.exports = {User};
