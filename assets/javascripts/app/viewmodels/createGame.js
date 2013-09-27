define(function (require){
	var app = require('durandal/app');

	return{
		displayName: 'Create Game',
		showMessage: function(){
			app.showMessage('Lets make a game');
		}
	}
});