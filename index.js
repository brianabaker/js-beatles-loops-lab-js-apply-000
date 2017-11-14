var musicians = [];
var instruments = [];

function theBeatlesPlay(musicians, instruments){
  var newArr = [];
  for(var i = 0; i < musicians.length; i++){
    newArr.push(`${musicians[i]} plays ${instruments[i]}`);
}
    return newArr;
}

function johnLennonFacts(facts){
  var loud = [];
  var i = 0;
  while (i < facts.length){
    facts.push(facts[i] + "!!!");
    i++ ;
  }
  return loud;
}
