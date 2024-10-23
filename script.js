var input = document.getElementById("input")
var random_number = Math.floor(Math.random()*10+1)
var checkbtn = document.getElementById("check")
var result = document.getElementById("result")
var score = document.getElementById("score")
var total_score = 5;
var play_again= document.querySelectorAll("playagain")
 
var guessnum = document.getElementById("guessnum")
console.log(random_number)


function check(){
  var input_value = input.value;
  
    if(input_value){
     if(input_value<=10){
      if(random_number==input_value){
        result.textContent = "You Win"
        win()
        
    }
    else{
       result.textContent ="Wrong"
       total_score = total_score-1
       score.textContent=total_score
       input.value="";
       if(total_score==0){
          result.textContent= "Game Over! You Lose!"
          document.querySelector('#playagain').style.display = 'inline-block';
          checkbtn.style.display = 'none';
          input.style.display ='none'
          document.getElementById("guesstxt").style.display='block';
          guessnum.textContent=random_number
          loose()
      } 
    }
   }
     
   else{
      alert("Enter the Number From 1 To 10 ")
   }
  }
  else{
    alert("Enter Number A To Continue")
   }
  
}
function reloadPage() {
    location.reload(); 
} 

document.getElementById('input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    check()
  }
});

function win(){
  alert("You win Your Score Is: " +total_score)
}

function loose(){
  alert("Game Over Better Luck Next Time")
}

