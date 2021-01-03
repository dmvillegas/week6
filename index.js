
const battleship = () => {	
let player1 = {
  name: prompt("player 1 what is your name?"),
  score:[],
  shipcount: 4,
  addedShips: 0,
  gameboard: [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
]};


let player2 = {
  name: prompt("player 2 what is your name?"),
  score:[],
  shipcount: 4,
  addedShips2: 0,
  gameboard: [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
]};

for (let i = 0; player1.addedShips != 4; i++) {
  var x = Math.floor((Math.random() * 3) + 0);
  var y = Math.floor((Math.random() * 3) + 0);
  if (player1.gameboard[x][y] != 1) {
    player1.gameboard[x][y] = 1
    player1.addedShips = player1.addedShips + 1
  }
};


for (let i = 0; player2.addedShips2 != 4; i++) {
  var x2 = Math.floor((Math.random() * 3) + 0);
  var y2 = Math.floor((Math.random() * 3) + 0);
  if (player2.gameboard[x2][y2] != 1) {
    player2.gameboard[x2][y2] = 1
    player2.addedShips2 = player2.addedShips2 + 1
  }
};


for (let i=0; i<4; i++) {
 player1.guessX = prompt(`${player1.name} choose an "x" coordinate to strike`)
  player1.guessY = prompt(`${player1.name} choose a "y" coordinate to strike`)
  player1.shipcount -= 1

  if(parseInt(player1.guessX) === x2 && parseInt(player1.guessY) === y2 ) {
    player1.score.push(1)
    player1.score.join('')
    alert("HIT")
  } else {
  alert("missed")
     player1.score.join('')
  }};

  for (let i=0; i<4; i++) {
   player2.guessX = prompt(`${player2.name} choose an "x" coordinate to strike`)
   player2.guessY = prompt(`${player2.name} choose a "y" coordinate to strike`)
  player2.shipcount -= 1

 if(parseInt(player2.guessX) === x && parseInt(player1.guessY) === y ){
    player2.score.push(1)
    player2.score.join('')
    alert("HIT")
  } else {
    alert("missed")
    player2.score.join('')
 }};

 if(player1.score > player2.score){
  return (`${player1.name} Won`)
 } else if (player1.score < player2.score) {
  return(`${player2.name} Won`)
 } else{
  return ("You both have lost. Play again if you dare (:")
 }

}

const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult