const player1 = '<img src="svgs/noun_Tongue Out_51673.svg" class="tongue">';
const player2 = '<img src="svgs/noun_drooling_2114754.svg" class="drool">';

let turn = player1;

let player1TileArray = [];
let player2TileArray = [];
let playerOneScore = 0;
let playerTwoScore = 0;

let board = [ null, null, null, null, null, null, null, null, null ]

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
  board = [ null, null, null, null, null, null, null, null, null ];
  $('.tile').html('').removeClass('added-class');
  $('.playerturn').html("It's Player 1's turn");
  turn = player1;
  player1TileArray.length = 0;
  player2TileArray.length = 0;
  winningCombo.length = 0;
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

  const checkCombos = function() {
    for (var i = 0; i < winCombos.length; i++) {
      if (
        player1TileArray.includes(winCombos[i][0]) && player1TileArray.includes(winCombos[i][1]) && player1TileArray.includes(winCombos[i][2]) ) {

        alert(`Player 1 is the winner`);
        playerOneScore++;
        $('.player1score').html(playerOneScore);
        resetBoard();
        break;
      } else if (
        player2TileArray.includes(winCombos[i][0]) && player2TileArray.includes(winCombos[i][1]) && player2TileArray.includes(winCombos[i][2]) ) {

        alert(`Player 2 is the winner`);
        playerTwoScore++;
        $('.player2score').html(playerTwoScore);
        resetBoard();
        break;
      } else if ((player1TileArray.length + player2TileArray.length) == 9){

        alert(`It's a draw! Reset?`);
        resetBoard();

        return;
      }
    }
  };

  $('.tile').on('click', function(event) {

    let clickedTile = Number(event.target.id);
    if (board[clickedTile-1]) {
      return;
    }

    board[clickedTile-1] = turn;

    $(this).html(turn);
    $(this).addClass('added-class');

    if (turn == player1) {
      player1TileArray.push(clickedTile);
      player1TileArray.sort();
    } else {
      player2TileArray.push(clickedTile);
      player2TileArray.sort();
    }

    if (player1TileArray.length >= 3) {
      checkCombos();
    } else if (player2TileArray.length >= 3) {
      checkCombos();
    }

    turnChange();
  });

  $('.reset').on('click', resetBoard);
});
