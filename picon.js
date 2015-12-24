
Template.picon.created = function(){
	var self = this;
	console.log("picon created");
	Deps.autorun(function(){
		self.subscribe("sensehat");
	});
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
	}
});

Template.savedGrids.helpers({
	savedGrids : function(){
		return Sensehat.find().fetch();
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
				console.log(theCell.style.backgroundColor);
				if(theCell.style.backgroundColor == ''){
					row.push([0,0,0]);
				}else{
					// parse and split ....
					// remove all non al
					var c = theCell.style.backgroundColor.split(',');
					console.log(c);
					var r = [];
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
		Sensehat.insert({grid: row});
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

Template.gridPreview.helpers({
	'previewRows' : function(){
		var r = [];
		var row = 0;

		function chunk(arr, start, amount){
    			var result = [], 
        		i, 
        		start = start || 0, 
        		amount = amount || 500, 
        		len = arr.length;

    			do {
        			//console.log('appending ', start, '-', start + amount, 'of ', len, '.');
        			result.push(arr.slice(start, start+amount));
        			start += amount;

    			} while (start< len);

    			return result;
		};

		return chunk(this.grid,0,8);
		this.grid.map(function(o,i){
			col = 0;
			return o.map(function(x){
				if(x == 0){
					o.rowStart = true;
				}
				var theCell = document.getElementById('p_' + i + ' ' + x);
				r.push(o.rgbColor = 'rgb(' + o.join(',') + ')');
				if(x % 7 === 0){
					o.rowEnd = true;
				}
				return o;
			});
			row++;
		});
	}
});
Template.savedGrids.events({

	'click .record' : function(){

		var counter = 0;
		Meteor.call("load_grid",this._id);
		for(var i=0;i<8;i++){
			for(var z=0;z<8;z++){
				console.log(i + ' ' + z);
				var theCell = document.getElementById(i + ' ' + z);
		
				console.log(this.grid[counter].join(',')); 
				theCell.style.backgroundColor = 'rgb(' + this.grid[counter].join(',') + ')';
				counter++;
			}

		}
		Session.set("currentGrid",this._id);
	}

});
