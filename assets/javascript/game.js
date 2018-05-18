

var happyWords = [
  "amused", 
  "beaming", 
  "delighted", 
  "joyful",
 "contented", 
 "glad", 
 "happy", 
 "cheerful",
"merry",
 "jolly",
 "ecstatic"
];

var wordChosen= "";
var letterInWord = [];
var numBlanks = 0;
var achievedBlanks = [];
var attemptsFailed = [];
var attemptsWon= 0;
var attemptsLost = 1;
var numAttempts= 15;



function startGame(){

  attemptsFailed = [];
  console.log("failed attempts in startGame", attemptsFailed);
  numAttempts = 10;
  achievedBlanks = [];
  
  
  wordChosen= happyWords[Math.floor(Math.random() * happyWords.length)];
  lettersInWord = wordChosen.split("");
  numBlanks = lettersInWord.length;
  console.log(wordChosen);
  console.log(numBlanks)
  
  for(var i = 0; i < numBlanks; i++){
      achievedBlanks.push("_");
  }
  console.log(achievedBlanks);
  document.getElementById('word-blank').innerHTML = achievedBlanks.join(" ");
  document.getElementById('attempts-left').innerHTML = numAttempts;
  
  
  
  }
  
  
  function checkLetters(letter){
      
      var letterInWord = false;
  
      for(var i = 0; i < numBlanks; i++){
          if(wordChosen[i] === letter){
              letterInWord = true;
  
          }
      }
  
      if(letterInWord){
          for(i = 0; i < numBlanks; i++){
              if(wordChosen[i] === letter){
              achievedBlanks[i] = letter;
  
          }
  
          }
      }else{
          numAttempts --;
          attemptsFailed.push(letter)
      }
  
      
  
  
  }
  
  
  function roundComplete(){
      
  
      document.getElementById('word-blank').innerHTML = achievedBlanks.join(" ");
      document.getElementById('attempts-left').innerHTML = numAttempts;
      document.getElementById('attempts-failed').innerHTML = attemptsFailed.join(" ");
  
  
      
      console.log(lettersInWord);
      console.log(achievedBlanks);
      if(lettersInWord.join(" ") === achievedBlanks.join(" ")){
          attemptsWon++;
          alert("Your Happy af!!");
          document.getElementById('attempts-won').innerHTML = attemptsWon;
          startGame();
      }else if(numAttempts === 0){
          document.getElementById('attempts-lost').innerHTML  = attemptsLost ++;
          document.getElementById('attempts-failed').innerHTML = "";
          alert("You have run out of attempts to show how happy you are");        
          startGame();
      }
  
  
  
  
  }
  startGame();
  document.onkeyup = function(event){
      
      var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
      console.log("letter typed", letterGuessed)
      checkLetters(letterGuessed)
      roundComplete();
  
  
  }










