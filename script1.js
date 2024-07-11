
const input =document.querySelector('input'),
guess =  document.querySelector('.guess'),
checkButton = document.querySelector('button'),
remainChances = document.querySelector('.chances');
input.focus();
let randomNum = Math.floor(Math.random()*100);
 chance=10;
checkButton.addEventListener("click",()=>{
    chance--;
    let inputValue=input.value;
   
    if(inputValue==randomNum){
        [guess.textContent,input.disabled]=["congratulations", true];
        [checkButton.textContent,guess.style.color]=["Replay","#070707"];
    }
   else if(inputValue > randomNum && inputValue < 100){
        [guess.textContent,remainChances.textContent]=["Your guess is high",chance];
        guess.style.color="#333";
    }
    else if(inputValue < randomNum && inputValue >0){
        [guess.textContent,remainChances.textContent]=["your guess is low",chance];
        guess.style.color="#333";
    } 
    else{
        [guess.textContent,remainChances.textContent]=["your number is invalid",chance];
        guess.style.color="#de0611";
    }
    if(chance==0){
        [checkButton.textContent,input.disabled,inputValue]=["Replay" , true,""];
        [guess.textContent,guess.style.color]=["you lost the game", "#de0611"];
    }
    if(chance<0){
        window.location.reload();
    }

});

