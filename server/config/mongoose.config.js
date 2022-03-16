const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/neigh", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
    })
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

//     mongoose.connect('mongodb://localhost/neigh',function(){
//     /* Drop the DB */
//     mongoose.connection.db.dropDatabase();
//     console.log("Database has been dropped");
// });