/* Plays one round of game */   
function playGame(buttonId){
     let point=judge(buttonId)
     showStatus(point)
 }
 
     function showStatus(inputpoint){
      /* calculates points for computer and player */
      let cpoint;
      let ppoint;
      if(inputpoint===1){
           cpoint=0
           ppoint=1
      }
      else if(inputpoint===2){
           cpoint=0
           ppoint=0
      }
      else{
           cpoint=1
           ppoint=0
      }
      /*shows points on score board*/
      let currentComputerScore=document.getElementById("computerScore").innerText
    let numberCurrentComputerScore= parseInt(currentComputerScore)
      let newComputerScore= numberCurrentComputerScore+cpoint;
      document.getElementById("computerScore").innerText=newComputerScore;
 
      let currentPlayerScore=document.getElementById("playerScore").innerText
    let numbercurrentPlayerScore= parseInt(currentPlayerScore)
      let newplayerScore=numbercurrentPlayerScore+ppoint;
      document.getElementById("playerScore").innerText=newplayerScore;
      if(newplayerScore>=5){
           document.getElementById('winner').innerText='You won'
           reset();
      }
      else if(newComputerScore>=5){
           document.getElementById('winner').innerText='computer won'
           reset();
      }else{
           document.getElementById('winner').innerText=''
      }
     }
     function reset(){
      document.getElementById("playerScore").innerText='0';
      document.getElementById("computerScore").innerText='0';
     }
     function judge(optionname){
      /* Determines who won */
      let Score=0;
      let cpoint=0;
      let ppoint=0
  let computerSelection= computerPlay()
      if(optionname===computerSelection){
           document.getElementById("playStatus").innerText="It's a draw do it again";
          Score=2;
      }
     else if(optionname==="rock"){
          if(computerSelection==='paper'){
           document.getElementById("playStatus").innerText=`You Lose!${computerSelection} beats ${optionname}`;
           Score=0;
          }
         else{(document.getElementById("playStatus").innerText=`You won! ${optionname} beats ${computerSelection}`)
         Score=1;} 
      }
 
      else if(optionname==="scissor"){
          if(computerSelection==='rock'){
           document.getElementById("playStatus").innerText=`You Lose!${computerSelection} beats ${optionname}`;
           Score=0;
          }
         else{(document.getElementById("playStatus").innerText=`You won! ${optionname} beats ${computerSelection}`)
       Score=1;} 
      }
 
      else if(optionname==="paper"){
          if(computerSelection==='scissor'){
           document.getElementById("playStatus").innerText=`You Lose!${computerSelection} beats ${optionname}`;
            Score=0;
          }
         else{(document.getElementById("playStatus").innerText=`You won! ${optionname} beats ${computerSelection}`)
   Score=1;} 
      }else{
           document.getElementById("playStatus").innerText=`${optionname} is not Valid ! try again`;
          Score=0}
 return Score;
     }
 function computerPlay(){
      /* Genarates random choice */
           let things = ['rock', 'paper', 'scissor'];
           let thing = things[Math.floor(Math.random()*(3-0+1))+0];
           if(thing===undefined){
                thing=things[0]
           }
           return (thing);
 }