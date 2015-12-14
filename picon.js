// Write your package code here!
Template.picon.rendered = function(){
	// flush all pixels ?
	Meteor.call("clear_pixel",function(){
		Session.set("picolor",'0 0 0');
	});
};

Template.picon.helpers ={
	getCurrentColor : function(){
		var curColors = Session.get('picolor').split(' ');
		var theCell = document.getElementById( "currentColor" );
		var newColor = 'rgb('+curColors.join(',')+')';
	}
};
Template.picon.events = {
	'click .picon td' : function(evt,tmpl){
		var cells = evt.currentTarget.id.split(' ');
		var curColors = Session.get('picolor').split(' ');
		var theCell = document.getElementById( evt.currentTarget.id );
		var newColor = 'rgb('+curColors.join(',')+')';
		theCell.style.backgroundColor = newColor;
		Meteor.call("set_pixel",cells[1],cells[0],curColors[0],curColors[1],curColors[2]);
	},
	'change .piC' : function(evt,tmpl){
		// find the rgb fields
		var r = tmpl.find("#r").value;
		var g = tmpl.find("#g").value;
		var b = tmpl.find("#b").value;
		// combine and set to session
		// update 'current color div'
		Session.set("picolor", r + ' ' + g + ' ' + b);
		var theCell = document.getElementById( 'currentColor' );
		var newColor = 'rgb('+r + ',' + g + ',' + b +')';
		theCell.style.backgroundColor = newColor;
	},
	'click .clearPixels' : function(evt,tmpl){
		// add option for 'set to new color'
		console.log('clear pix');
		Meteor.call("clear_pixel",function(){
			for(var i=0;i<8;i++){
				for(var z=0;z<8;z++){
					console.log( i + ' ' + z);
					var theCell = document.getElementById(i + ' ' + z);
					theCell.style.backgroundColor = "black";
				}
			}
		}
		);
	}
};