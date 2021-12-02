let signs = ['rock', 'paper', 'scissors'];
let cpu = signs[Math.floor(Math.random() * 3)];
let user = false;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors')
const signs2 = [rock, paper, scissors]


//I think it isn't the best solution, but it works (11-62)
const rSelected = () => {
  switch (true){
    case (scissors.classList.contains('selected')):
      scissors.classList.remove('selected')
      rock.classList.add('selected')
      user = rock.id
      break
    case (paper.classList.contains('selected')):
      paper.classList.remove('selected')
      rock.classList.add('selected')
      user = rock.id
      break    
    default:
      rock.classList.add('selected')
      user = rock.id
  }
}
const pSelected = () => {
  switch (true){
    case (rock.classList.contains('selected')):
      rock.classList.remove('selected')
      paper.classList.add('selected')
      user = paper.id
      break
    case (scissors.classList.contains('selected')):
      scissors.classList.remove('selected')
      paper.classList.add('selected')
      user = paper.id
      break    
    default:
      paper.classList.add('selected')
      user = paper.id
  }
}
const sSelected = () => {
  switch (true){
    case (rock.classList.contains('selected')):
      rock.classList.remove('selected')
      scissors.classList.add('selected')
      user = scissors.id
      break
    case (paper.classList.contains('selected')):
      paper.classList.remove('selected')
      scissors.classList.add('selected')
      user = scissors.id
      break    
    default:
      scissors.classList.add('selected')
      user = scissors.id
  }
}

rock.addEventListener('click', rSelected);
paper.addEventListener('click', pSelected);
scissors.addEventListener('click', sSelected);

const cpuChose = () => {
  let advice = document.getElementById('advice')
  advice.classList.remove('hidden')
  let container = document.getElementById('cpu')
  container.setAttribute('src', 'images/' + cpu + '.png')
}

const winner = (winner) => {
  let writer = document.getElementById('result')
  if (winner == 'user') {
    writer.innerText = 'You win!'
  }else if (winner == 'cpu'){
    writer.innerText = 'You lost'
  }else {
    writer.innerText = 'It\'s a tie'
  }
}
const game = (user, cpu) => {  
  cpuChose()
  switch (true){
    case (user == "rock" && cpu == "scissors"):
      winner('user')
      //YouWin!
      break
    case (user == "paper" && cpu == "rock"):
      winner('user')
      //YouWin!
      break
    case (user == "scissors" && cpu == "paper"):
      winner('user')
      //YouWin!
      break
    case (user == cpu):
      winner('tie')
      //Tie
      break
    default:
      winner('cpu')
      //cpuWin
  }
}
const startGame = () => {  
  let start = document.getElementById('play')
  if (user == false){
    window.alert('Select an emoji')
  }else {
    game(user, cpu) 
  }  
}