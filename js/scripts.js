$(document).ready(function(){
  // for(i = 0; i < 4; i++) {
  //
  // }
  // console.log(ourTwoDArray);


// arrayA = ['a', 'b', 'c'];
// arrayB = [1, 2, 3];
// arrayC = [];
//
//
// arrayC.push(arrayA);
// arrayC.push(arrayB);
//
// console.log(arrayC);
// console.log(arrayC[0][0]);


var string = "";
var despacedString = "";
var despacedArray =[];
var workingArray = [];
garbageArray = [];
var cryptoSquareWidth;
var outputSentence = "";

function inputGetter(){
string = ($("#input-sentence").val())
}

function deSpacer() {

  despacedArray = Array.from(string.toLowerCase().replace(/[`~!@#$%^&*()_|+\-=÷¿?;:'",.<>\{\}\[\]\\\/ /\s]/gi, ''));
  console.log(despacedArray);

  }

  function inputSquareRootFinder() {
    cryptoSquareWidth = Math.ceil(Math.sqrt(string.length));
    console.log("This is the width of the square: " + cryptoSquareWidth);
  }

function workingArrayMaker() {
  console.log("Starting workingArrayMaker");
  //for (i = 0; i < (cryptoSquareWidth - 1); i++){
  while(despacedArray.length > 0) {
    var arrayHolder = despacedArray.splice(0, cryptoSquareWidth);
    console.log(despacedArray);
    workingArray.push(arrayHolder);
    console.log(arrayHolder);
    console.log(workingArray);

    // number of empty spaces = (fullsquare - despacedArray.length) - (workingarray[-1].length)
  }

}

  function workingArrayOutputter() {
    for (i = 0; i < cryptoSquareWidth; i++){
      // workingArray.length defines the height of the square
      outputSentence += " ";
      for( x = 0; x < workingArray.length; x++){
        console.log("The inner loop is working");
      result = workingArray[x][i];
      if(result === undefined) {
        // garbageArray.push(" ");
        break;
      } else {
        outputSentence += result;
      }

      console.log(outputSentence);
      }
    }
    console.log(outputSentence);
  }

function cryptoSquareMaker() {
    outputSentence = "";
    workingArray = [];
    cryptoSquareWidth = "";
    inputGetter();
    deSpacer();
    inputSquareRootFinder();
    workingArrayMaker();
    workingArrayOutputter();
}


  $(".crypto-form").submit(function(event){
    event.preventDefault();
    cryptoSquareMaker();

  });




});
