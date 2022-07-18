const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mern:<1234>@mern.uibabsp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



module.exports = {
    
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("employees");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
  getDb: function () {
    return _db;
  },
};


