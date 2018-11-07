var cookies = 0;

function oysterClick(1){
    oysters = oysters + 1;
    document.getElementById("oysters").innerHTML = oysters;
};

var collectors = 0;

function buyCollector(){
    var collectorCost = Math.floor(10 * Math.pow(1.1,collectors));     //works out the cost of this collector
    if(oyster >= collectorCost){                                   //checks that the player can afford the collector
        collectors = collectors + 1;                                   //increases number of collectors
    	oysters = oysters - collectorcost;                          //removes the oysters spent
        document.getElementById('collectors').innerHTML = collectors;  //updates the number of collectors for the user
        document.getElementById('oysters').innerHTML = oysters;  //updates the number of oysters for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,oysters));       //works out the cost of the next collector
    document.getElementById('collectorCost').innerHTML = nextCost;  //updates the collector cost for the user
};

window.setInterval(function(){
	
	oysterClick(collectors);
	
}, 1000)

