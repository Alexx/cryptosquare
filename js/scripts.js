var string = "";
var despacedString = "";
var despacedArray =[];
var workingArray = [];
var cryptoSquareWidth;
var outputSentence = "";

function inputGetter(){
  string = ($("#input-sentence").val())
}

function deSpacer() {
  despacedArray = Array.from(string.toLowerCase().replace(/[`~!@#$%^&*()_|+\-=÷¿?;:'",.<>\{\}\[\]\\\/ /\s]/gi, ''));
}

function inputSquareRootFinder() {
  cryptoSquareWidth = Math.ceil(Math.sqrt(string.length));
}

function workingArrayMaker() {
  while(despacedArray.length > 0) {
    var arrayHolder = despacedArray.splice(0, cryptoSquareWidth);
    workingArray.push(arrayHolder);
  }

}

function workingArrayOutputter() {
  for (i = 0; i < cryptoSquareWidth; i++){
    outputSentence += " ";
    // workingArray.length defines the height of the square
    for( x = 0; x < workingArray.length; x++){
      result = workingArray[x][i];
      if(result === undefined) {
        // garbageArray.push(" ");
        break;
      } else {
        outputSentence += result;
      }
    }
  }
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

$(document).ready(function(){

  $(".crypto-form").submit(function(event){
    event.preventDefault();
    cryptoSquareMaker();
    $(".output").text(outputSentence);
  });
});
