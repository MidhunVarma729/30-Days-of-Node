const mongo = require('mongodb');

var new_db = "mongodb://localhost:3000/demo_db";

//File Name is  : demo-db.js
//establishing the connection
mongo.connect(new_db ,(error , db) => {
	if (error){
		throw error;
	}
	console.log("Database demo_db created successfully");
	//To close the connection
	db.close();
});
	