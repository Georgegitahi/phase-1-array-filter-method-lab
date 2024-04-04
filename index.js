// Code your solution here
function findMatching(drivers,Bobby){
    return drivers.filter(
        (possibleMatch)=>possibleMatch.toLowerCase() === Bobby.toLowerCase()
    );
}

function fuzzyMatch(drivers,driversLength){
     return drivers.filter(
        (possibleMatch)=>
        possibleMatch.toLowerCase().indexOf(driversLength.toLowerCase()) === 0
     );
}


function matchName(drivers,hometown){
    return drivers.filter((record)=>record.name=== hometown)
}