Template.picon.created = function(){
	Session.set("currentGrid",false);
};
Template.picon.rendered = function(){
	// flush all pixels ?
	Meteor.call("clear_pixel",function(){
		Session.set("picolor",'0 0 0');
	});
};

Template.picon.helpers({
	getCurrentColor : function(){
		var curColors = Session.get('picolor').split(' ');
		var theCell = document.getElementById( "currentColor" );
		var newColor = 'rgb('+curColors.join(',')+')';
	},
	hasSelectedGrid : function(){
		return Session.get("currentGrid");
	}
});

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
	'click .saveGrid' : function(evt,tmpl){
		var row = [];
		// support titles !
		for(var x=0;x<8;x++){
                	for(var y=0;y<8;y++){
				var theCell = document.getElementById(x + ' ' + y);
				if(theCell.style.backgroundColor == ''){
					row.push([0,0,0]);
				}else{
					// parse and split ....
					// remove all non al
					var c = theCell.style.backgroundColor.split(',');
					var r = [];
					console.log(c);
					c.filter(function(o,i){
						if(i == 0){
							var newStr = o.split('rgb(');
							r.push(parseInt(o.replace('rgb(','')));
						}else if(i == 2){
						// remove comma
							r.push(parseInt(o.replace(')','')));
						}else{
							r.push(parseInt(o));
						}
					});
					row.push(r);
				}

			}
		}	
		Session.set("currentGrid",Sensehat.insert({grid: row}));
	},
	'click .updateGrid' : function(){
		// replace whole value
		row = [];
		for(var x=0;x<8;x++){
            for(var y=0;y<8;y++){
				var theCell = document.getElementById(x + ' ' + y);
				if(theCell.style.backgroundColor == ''){
					row.push([0,0,0]);
				}else{
					// parse and split ....
					// remove all non al
					var c = theCell.style.backgroundColor.split(',');
					var r = [];
					console.log(c);
					c.filter(function(o,i){
						if(i == 0){
							var newStr = o.split('rgb(');
							r.push(parseInt(o.replace('rgb(','')));
						}else if(i == 2){
						// remove comma
							r.push(parseInt(o.replace(')','')));
						}else{
							r.push(parseInt(o));
						}
					});
					row.push(r);
				}

			}
		}
		Sensehat.update(Session.get("currentGrid"),{"$set" : {'grid': row}});
	},
	'click .clearPixels' : function(evt,tmpl){
		// add option for 'set to new color'
		Meteor.call("clear_pixel",function(){
			for(var i=0;i<8;i++){
				for(var z=0;z<8;z++){
					var theCell = document.getElementById(i + ' ' + z);
					theCell.style.backgroundColor = "rgb(0,0,0)";
				}
			}
			}	
		);
	}
};

Template.savedGrids.created = function(){
	this.subscribe("sensehat");
};

Template.savedGrids.helpers({
	getGrids : function(){
		return Sensehat.find();
	},
	isSelectedGrid : function(){
		return Session.equals("currentGrid",this._id);
	}
});

Template.savedGrids.events({
	'click .deleteGrid' : function(){
		Sensehat.remove({_id : this._id},function(){
			Meteor.call("clear_pixel",function(){
				Session.set("currentGrid",false);
			});
		});
	},
	'click .record' : function(){
		var counter = 0;
		console.log(this);
		Meteor.call("load_grid",this._id);
		for(var i=0;i<8;i++){
			for(var z=0;z<8;z++){
				var theCell = document.getElementById(i + ' ' + z);
				if(this.grid[counter] != '' && this.grid[counter].length == 3){
					theCell.style.backgroundColor = 'rgb(' + this.grid[counter].join(',') + ')';
				}else{
					theCell.style.backgroundColor = 'rgb(0,0,0)';
				}
				counter++;
			}
		}
		Session.set("currentGrid",this._id);
	}
});

// takes a Sensehat.grid property and groups it according to 8x8 (instead of
// 64 items) makes using {#each} a lot little easier
Template.gridPreview.helpers({
	previewRows : function(){
		var r = [];
		var row = 0;
		function chunk(arr, start, amount){
    			var result = [], 
        		i, 
        		start = start || 0, 
        		amount = amount || 500, 
        		len = arr.length;
    			do {
        			result.push(arr.slice(start, start+amount));
        			start += amount;

    			} while (start< len);

    			return result;
		};
		return chunk(this.grid,0,8);
	}
});

