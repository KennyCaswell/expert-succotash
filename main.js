var oyster = 0;

function oysterclick(1){
    oysters = oysters + number;
    document.getElementById("oysters").innerHTML = oysters;
};

var collectors = 0;

function buycollector(1){
    var collectorcost = Math.floor(10 * Math.pow(1.1,collectors));     //works out the cost of this collector
    if(oyster >= collectorcost){                                   //checks that the player can afford the collector
        collectors = collectors + 1;                                   //increases number of collectors
    	oysters = oysters - collectorcost;                          //removes the oysters spent
        document.getElementById('collectors').innerHTML = collectors;  //updates the number of collectors for the user
        document.getElementById('oysters').innerHTML = oysters;  //updates the number of oysters for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,oysters));       //works out the cost of the next collector
    document.getElementById('collectorcost').innerHTML = nextCost;  //updates the collector cost for the user
};

window.setInterval(function(){
	
	oysterclick(collectors);
	
}, 1000)

