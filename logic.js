let signs = ["rock", "paper", "scissors"];
let cpu = signs[Math.floor(Math.random() * 3)];
let user;

const game = (user, cpu) => {
  switch (true){
    case (user == "rock" && cpu == "scissors"):
      //YouWin!
      break
    case (user == "paper" && cpu == "scissors"):
      //YouWin!
      break
    case (user == "scissors" && cpu == "paper"):
      //YouWin!
      break
    case (user == cpu):
      //Tie
      break
    default:
      //cpuWin
  }
}