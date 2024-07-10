
const input =document.querySelector("input")
guess =  document.querySelector(".guess")
checkButton = document.querySelector(".button")
remainChances = document.querySelector(".chances");


input.focus();

let randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);
chance=10;

checkButton.addEventListener("click",()=>{
    chance--;
    
    let inputValue = input.value;

    if(inputValue ==  randomNum){
        [guess.textContent,checkButton.disabled] = ["congratulations", true];
        [checkButton.textContent,guess.style.color] = ["Replay","#333"];
    }
});