const currentScore1    = document.getElementById("currentScore1");
const currentScore2    = document.getElementById("currentScore2");
const totalScore1      = document.getElementById("totalScore1");
const totalScore2      = document.getElementById("totalScore2");
const winner           = document.getElementById("winner");
const resetButton      = document.getElementById("btn-reset");



let p1TotalScore = 0;
let p2TotalScore = 0;

let roundCounter = 0;

function rollDices(){

  let p1CurrentScore = "";
  let p2CurrentScore = "";

    let rand1 = Math.floor(Math.random()*6)+1;
    let randImage1Path = "styles/images/dice_" + rand1 + ".png";
    
    let rand2 = Math.floor(Math.random()*6)+1;
    let randImage2Path = "styles/images/dice_" + rand2 + ".png";
    
    let rand3 = Math.floor(Math.random()*6)+1;
    let randImage3Path = "styles/images/dicecopy_" + rand3 + ".png";
    
    let rand4 = Math.floor(Math.random()*6)+1;
    let randImage4Path = "styles/images/dicecopy_" + rand4 + ".png";
    
    let dice1 = document.querySelectorAll("img")[0];
    dice1.setAttribute("src", randImage1Path);
    
    let dice2 = document.querySelectorAll("img")[1];
    dice2.setAttribute("src", randImage2Path);
    
    let dice3 = document.querySelectorAll("img")[2];
    dice3.setAttribute("src", randImage3Path);
    
    let dice4 = document.querySelectorAll("img")[3];
    dice4.setAttribute("src", randImage4Path);

    if(rand1 === 1){
        p1CurrentScore = 0;
    }else if(rand2 === 1){
        p1CurrentScore = 0;
    }else{
        p1CurrentScore = rand1 + rand2;
    }
    if(rand1 === rand2){
        p1CurrentScore = (rand1 + rand2) * 2;
    }
   
   
    if((rand1 + rand2) === 2) {
      p1CurrentScore = 0;
    }



    if(rand3 === 1){
        p2CurrentScore = 0;
        
    }else if(rand4 === 1){
        p2CurrentScore = 0;
    }else{
        p2CurrentScore = rand3 + rand4;
    }
    if(rand3 === rand4){
        p2CurrentScore = (rand3 + rand4) * 2;
    }

    if((rand3 + rand4) === 2) {
      p2CurrentScore = 0;
    }

    p1TotalScore = p1TotalScore + p1CurrentScore;
    p2TotalScore = p2TotalScore + p2CurrentScore;
  
    currentScore1.innerHTML = `Current Score: ${p1CurrentScore}`;
    currentScore2.innerHTML = `Current Score: ${p2CurrentScore}`;
    totalScore1.innerHTML = `Total Score: ${p1TotalScore}`;
    totalScore2.innerHTML = `Total Score: ${p2TotalScore}`;
    
    roundCounter++;
    
    if(roundCounter >= 3){
      document.getElementById("btn-roll").disabled = true;
      if(p1TotalScore > p2TotalScore){
        winner.innerHTML = `Game Over!`;
        winner.innerHTML += ` Human wins The Game!`;
      }else if(p2TotalScore > p1TotalScore){
        winner.innerHTML = `Game Over!`;
        winner.innerHTML += ` Computer Wins The Game!`; 
           }else{
            winner.innerHTML = `Game Over!`;
            winner.innerHTML += ` The Game Is Draw!`; 
      }
      
    }
}

document.querySelector("button").addEventListener("click", rollDices);

resetButton.addEventListener('click', function() {
  window.location.reload();
});


//pop up instructions

const instructionsBtn = document.getElementById('instructions-btn');
const instructionsContainer = document.getElementById('instructions-container');
const closeBtn = document.getElementById('close-btn');

instructionsBtn.addEventListener('click', function() {
  instructionsContainer.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
  instructionsContainer.style.opacity = '0';
  setTimeout(function() {
    instructionsContainer.style.display = 'none';
    instructionsContainer.style.opacity = '1';
  
  }, 500); 
});