let signs = ["rock", "paper", "scissors"];
let cpu = signs[Math.floor(Math.random() * 3)];
let user;

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