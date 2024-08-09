var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/faizan');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', function() {
//   // we're connected!
//   console.log("We are connected bro/sis..");
// });


const kittySchema = new mongoose.Schema({
    name: String
  });

  
  
  kittySchema.methods.speak = function speak() {
      const greeting = "My name is " + this.name
      console.log(greeting);
    };
    
    var Kitten = mongoose.model('Kitten', kittySchema);
    
    const faizikity = new Kitten({ name: 'faizikity' });
    console.log(faizikity.name);
    faizikity.speak();

    faizikity.save()
    .then(faizikity => {
        // faizikity.speak();
    })
    .catch(err => {
        console.error(err);
    });

    Kitten.find({ name: /^fluff/ })
  .then(faizikities => {
    // Process the results
    faizikities.forEach(faizikity => {
      console.log(faizikity);
      // You can call methods on each `faizikity` object here if needed
    });
  })
  .catch(err => {
    console.error(err);
  });
