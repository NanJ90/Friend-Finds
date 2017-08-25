var friends = require("../data/friends");
var path = require("path");

var newArr = [];
var numScores = [];
var totalDifference;
var diffArr =[];
module.exports = function(app){

	app.get("/api/friends", function(req,res){		
		res.json(friends);		
	});

	app.post("/api/friends", function(req,res){
		// data changed to JSON format, eveything is string;
		// var numScores =$.map(arr,Number)
		newArr = req.body.scores;
		// var numScores = $.map(newArr,Number)
		for (var i =0; i< newArr.length; i++){
			numScores.push(+newArr[i]);
		}
		// console.log(newFriend);
		// friends.push(req.body)
		// console.log(friends[0].scores);
		
		var minDiff = Number.MAX_SAFE_INTEGER
		var index = 0;
		for (var i = 0; i < friends.length; i++){
			var friendsScore = friends[i].scores;
			var diff = 0;
			for (var j = 0; j < friendsScore.length; j++) {
				diff += Math.abs(friendsScore[j] - numScores[j]);
			}
			if (diff < minDiff) {
				index = i;
				minDiff = diff;
			}
		}
		res.send(friends[index]);
			// res.send(req.body);
		// console.log("app post got it",req.body);
		// res.json(new_friend);
	});

	// function replacingProperty(){

	//     for (var i in newObj){	
	//         newObj[i] = src[i];
	// 	}

}



