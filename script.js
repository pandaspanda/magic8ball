$(document).ready(function(){
var question;
var magic8Ball = {};
magic8Ball.answersList = ['It is certain. ', ' It is decidedly so. ', ' Without a doubt. ', ' Yes – definitely. ', ' You may rely on it. ', ' As I see it, yes. ', ' Most likely. ', ' Outlook good. ', ' Yes. ', ' Signs point to yes. ',  ' Reply hazy, try again ', ' Ask again later. ', ' Better not tell you now. ', ' Cannot predict now. ',  ' Concentrate and ask again. ', " Don't count on it. ", ' My reply is no. ', ' My sources say no. ', ' Outlook not so good. ', ' Very doubtful. '];


	magic8Ball.getAnswer=function(question)
{			$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	var randomNumber = Math.random();
	var randomNumberArray = randomNumber * this.answersList.length;
	var randomIndex = Math.floor(randomNumberArray);
	var yourAnswer= this.answersList[randomIndex];
	$("#answer").text(yourAnswer);
	$("#answer").fadeIn(4000);
} ;
	$("#answer").hide();
var questionButton = function (question) {
 
$("#8ball").effect( "shake" );
	$("#answer").hide();
$("#8ball").attr("src", "	https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
setTimeout(
	function () {
	question = prompt("ASK A YES/NO QUESTION!");
	magic8Ball.getAnswer(question);
	}, 500);
};

$("#questionButton").click(questionButton);


});