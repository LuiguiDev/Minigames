let signs = ["rock", "paper", "scissors"];
let cpu = signs[Math.floor(Math.random() * 3)];
let user;

let emoji = document.querySelector('.emoji')

const selected = () => {
  emoji.classList.add('selected')
}
emoji.addEventListener('click', selected)

const moves = () => {  
  let rockOption = document.getElementById('rock');
  let paperOption = document.getElementById('paper');
  let scissorsOption = document.getElementById('scissors');  

  rockOption.addEventListener('click',);
  paperOption.addEventListener('click',);
  scissorsOption.addEventListener('click',);
}

const game = (user, cpu) => {
  switch (true){
    case 1(user == "rock" && cpu == "scissors"):
      
      //YouWin!
      break
    case 2(user == "paper" && cpu == "scissors"):
      //YouWin!
      break
    case 3(user == "scissors" && cpu == "paper"):
      //YouWin!
      break
    case 4(user == cpu):
      //Tie
      break
    default:
      //cpuWin
  }
}