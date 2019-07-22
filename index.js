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
    i++
  }
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

johnLennonFacts(facts);