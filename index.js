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

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

johnLennonFacts(facts);
console.log(facts)