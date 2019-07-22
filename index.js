// add solution here
function theBeatsPlay(arrayMusicians, arrayInstruments){
  var testArray = [];
  for (var i = 0; i < arrayMusicians.length; i++){
    testArray[i] = `${arrayMusicians[i]} plays ${arrayInstruments}`
  }
 return testArray
}

function johnLennonFacts(array){
  var i =0;
  while (i < array.length){
    console.log(array[i]);
  }
}

johnLennonFacts([1,2,3])