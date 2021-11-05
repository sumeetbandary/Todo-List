exports.getDate = function() {
	const today = new Date(); //stores todays date
	const options = { weekday: "long", day: "numeric", month: "long" }; // Format for the date
	const day = today.toLocaleDateString("en-US", options); //stores the date in the specified format
	return day;
}
exports.getDay = function() {
	const today = new Date(); //stores todays date
	const options = { weekday: "long" }; // Format for the date
	const day = today.toLocaleDateString("en-US", options); //stores the date in the specified format
	return day;
}
