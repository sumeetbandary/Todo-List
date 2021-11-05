const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

main().catch((err) => console.log(err));

//connecting to mongodb with the url which is hosted locally
async function main() {
	// Making a connection to MongoDB with mongooose and creating peopleDB document database in mongodb
	await mongoose.connect("mongodb://localhost:27017/todolistDB", {
		useNewUrlParser: true,
	});
}
//Creating the item schema using mongoose
const itemsSchema = new Schema({
	name: String,
});
const Item = mongoose.model("Item", itemsSchema);
// GET method root route
app.get("/", function (req, res) {
	Item.find({}, function (err, foundItems) {
		res.render("list", { listTitle: "Today", newListItems: foundItems }); // Pass the data to the list.ejs
	});
});

// POST method root route
app.post("/", function (req, res) {
	const item = req.body.newItem; // collects the item from the form and stores the text in the item variable
	if (req.body.list === "Work") {
		workItems.push(item);
		res.redirect("/work"); // redirect to work route
	}
	//Adding the entered item to database
	else {
		const newitem = new Item({
			name: item
		});
		newitem.save();
		res.redirect("/");
	}
});

// GET method work route
app.get("/work", function (req, res) {
	res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.listen(port, function () {
	console.log("Server started");
});
