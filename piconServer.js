Meteor.startup(function(){

	Meteor.call('piconInit');

});

Meteor.publish("sensehat",function(){
return Sensehat.find({});
});
Meteor.methods({
	'piconInit' : function(){
		// run on startup ...
		RunCli.run('chmod -R 755 assets/app/');
		Meteor.call('clear_pixel');
	},
       'set_pixel' : function(x,y,r,g,b){
	        RunCli.run('./assets/app/set_pixel.py ' + x + ' ' + y + ' '+ r + ' ' + g + ' ' + b); 
	},
	'clear_pixel' : function(r,g,b){
		if(typeof r != "undefined" && typeof g != "undefined" && typeof b != "undefined"){
			RunCli.run('./assets/app/clear_pixel.py ' + r + ' ' + b + ' ' + g);
		}else{
			RunCli.run('./assets/app/clear_pixel.py');
		}
	},
	'load_grid' : function(gridId){
		if(typeof gridId != "undefined"){
			if(Sensehat.findOne(gridId)){
				RunCli.run('./assets/app/loadGrid.py ' + gridId);
				return true;
			}
		}
		return false;
	}
});
