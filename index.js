// Code your solution in this file
function findMatching(drivers, name){
   return drivers.filter(function(driver) {return driver.toLowerCase() === name.toLowerCase()});
}

function fuzzyMatch(drivers, startsWithLetters){   
   return drivers.filter(function(driver) {
       return driver.slice(0,startsWithLetters.length) === startsWithLetters});
}

function matchName(drivers, name){
   return drivers.filter(function(driver) {return driver.name.toLowerCase() === name.toLowerCase()});
}