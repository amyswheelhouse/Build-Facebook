var database = [
	{
		username: "amyswheelhouse",
		password: "Peppa01."
	},
	{
		username: "UnusualRetail",
		password: "Zoe01."
	},
	{
		username: "DogDude",
		password: "Jada01"
	}
];

var newsFeed = [
	{
		username: "amyswheelhouse",
		timeline: "So excited to start my freelance business!"
	},
	{
		username: "UnusualRetail",
		timeline: "Look at my vintage finds from today!"
	},
	{
		username: "DogDude",
		timeline: "Look at the dogs I groomed today!"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("Whats your password?");

function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === username && database[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if(isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password")
	}
}

signIn(userNamePrompt, passwordPrompt);
