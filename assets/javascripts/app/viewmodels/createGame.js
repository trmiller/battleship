define(function (require){
	var app = require('durandal/app');

	return{
		displayName: 'Create Game',
		instructions: 'Here is where you can create a game that someone else can join.  Press the Create Game button to get your game Id.  Send it to a friend so they can join in and start playing with you',
		showMessage: function(){
			app.showMessage('Lets make a game');
		}
	}
});