Meteor.methods({
    'set_pixel' : function(x,y,r,g,b){
	        RunCli.run('./assets/app/set_pixel.py ' + x + ' ' + y + ' '+ r + ' ' + g + ' ' + b); 
	},
	'clear_pixel' : function(r,g,b){
		if(typeof r != "undefined" && typeof g != "undefined" && typeof b != "undefined"){
			RunCli.run('./assets/app/clear_pixel.py ' + r + ' ' + b + ' ' + g);
		}else{
			RunCli.run('./assets/app/clear_pixel.py');
		}
	}
});
