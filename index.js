function dwarfRollCall(dwarves) {
	var list = ""
  for (var i = 0; i < warves.lengthd; i++) {
  list += (i+1).toString()+ ". " + dwarves[i] + " ";
  }
   return list

}



function summonCaptainPlanet(planeteerCalls){
  var calls = []
  for (var i = 0; i < planeteerCalls.length; i++) {
    calls.push(planeteerCalls[i].toUpperCase() + "!");
  }
  return calls;
}

function longPlaneteerCalls(words) {
  var long = false;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) { 
      long = true;
  }
  }
  return long
}


function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"]
  for (var i = 0; i < foods.length; i++) {
    if (cheese.includes(foods[i])) {
  
        return foods[i];
        }
    }
  return "no cheese!"
  }

