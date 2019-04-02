const startGame = function() {
  $('.tile').html('')
};

const player1 = 'O';
const player2 = 'X';

let turn = player1;

let player1TileArray = [];
let player2TileArray = [];
let playerOneScore = 0;
let playerTwoScore = 0;

const winCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const resetBoard = function() {
  $('.tile').html('').on('click');
  player1TileArray.length = 0;
  player2TileArray.length = 0;
  turn = player1;
};

$(document).ready(function() {

  let turnChange = function() {
    if (turn == player1) {
      $('.playerturn').html("It's Player 2's turn");
      turn = player2;
    } else {
      $('.playerturn').html("It's Player 1's turn");
      turn = player1;
    }
  };

  let img1 = "svgs/noun_Tongue Out_51673.png";
  let img2 = "svgs/noun_drooling_2114754.png";

  const checkCombos = function() {
    for (var i = 0; i < winCombos.length; i++) {
      if (
        player1TileArray.includes(winCombos[i][0]) &&            player1TileArray.includes(winCombos[i][1]) && player1TileArray.includes(winCombos[i][2]) ) {

        alert(`Player 1 is the winner`);
        playerOneScore++;
        $('.player1score').html(playerOneScore);

        break;
      } else if (
        player2TileArray.includes(winCombos[i][0]) && player2TileArray.includes(winCombos[i][1]) && player2TileArray.includes(winCombos[i][2]) ) {

        alert(`Player 2 is the winner`);
        playerTwoScore++;
        $('.player2score').html(playerTwoScore);

        break;
      }
    }
  };

  $('.tile').on('click', function(event) {

    let clickedTile = Number(event.target.id);
    $(this).html(turn);
    $(event.target.id).off('click');

    if (turn == player1) {
      player1TileArray.push(clickedTile);
      player1TileArray.sort();
    } else {
      player2TileArray.push(clickedTile);
      player2TileArray.sort();
    }
    console.log(player1TileArray);
    console.log(player2TileArray);

    if (player1TileArray.length >= 3) {
      checkCombos();
    } else if (player2TileArray.length >= 3) {
      checkCombos();
    }

    turnChange();
  });

  $('.reset').on('click', resetBoard);

  // if there is a match trigger animation? reset prompt? link to youtube?

  // winner = true {reset game button appears}

  // let winner = ;
  // winMessage.html(`${winner} is the winner`);
});


//fade in animation for winner winner message?
// game over function
