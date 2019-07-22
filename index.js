// add solution here
function theBeatlesPlay(arrayMusicians, arrayInstruments){
  var testArray = [];
  for (var i = 0; i < arrayMusicians.length; i++){
    testArray[i] = `${arrayMusicians[i]} plays ${arrayInstruments[i]}`
  }
 return testArray
}

function johnLennonFacts(array){
  var i =0;
  while (i < array.length){
    array[i] =`${array[i]}!!!`
    i++
  }
  return array;
}

function iLoveTheBeatles