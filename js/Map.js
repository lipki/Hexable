
var Map = function(hexagrid, name) {
    
    this.hexagrid = hexagrid;
    mi = this;
    this.shoot = 0;
    
    //load
    $.getJSON('map/'+name+'.json', function(data) {
    	mi.loaded(data);
    });
	
};

Map.prototype.loaded = function(data) {
    
    //init
    this.data = data;
	
	//size
	if( !this.hexagrid.reset( this ) )
		; // todo message d'echec;
    
};

Map.prototype.display = function() {
    
    var hexa = this.data.map[this.shoot++];
	this.hexagrid.on(hexa, this.data.color[hexa.id]);
    return hexa;
    
};
