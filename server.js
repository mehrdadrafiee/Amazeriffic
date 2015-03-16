var express = require("express"),
	http = require("http"),
	app = express(),
	toDos = {
		// set up todo list here by copying
		// the content from todos.OLD.json
	};

app.use(express.static(__dirname + "/client"));
//tell Express to parse incoming JSON objects
app.use(express.urlencoded());

http.createServer(app).listen(3000);

// This route takes the place of our
// todos.json file in our example from
// Chapter 5
app.post("/todos", function (req, res) {
	//the object is now stored in req.body
	var newToDo = req.body;

	console.log(newToDo);

	toDos.push(newToDo);
	
	// send back a simple object
	res.json({"message": "You posted to the server"});
});

console.log("Server running on port 3000");