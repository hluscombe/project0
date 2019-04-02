const player1 = 'O';
const player2 = 'X';

const startGame = function() {
  $('.tile').html('')
};

let turn = player1;

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

console.log(winCombos[1][2]);


$( document ).ready( function() {
  //startGame();

  let player1TileArray = [];
  let player2TileArray = [];

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
      if ( player1TileArray == (winCombos[i][0] && winCombos[i][1] && winCombos[i][2]) ) {
        alert(`PLayer 1 is the winner`);
        break;
      } else if ( player2TileArray == (winCombos[i][0] && winCombos[i][1] && winCombos[i][2]) ) {
        alert(`PLayer 2 is the winner`);
        break;
      } else
        console.log("no match");
        break;
      }
    };
  };

  $('.tile').on('click', function(event) {

    let clickedTile = Number(event.target.id);
    $(this).html(turn);

    if (turn == player1) {
      player1TileArray.push(event.target.id);
    } else {
      player2TileArray.push(event.target.id);
    }
    console.log(player1TileArray);
    console.log(player2TileArray);

    if (player1TileArray.length >= 3) {
      console.log('there is 3');
      checkCombos();
    } else if (player2TileArray.length >= 3) {
      console.log('there is 3');
      checkCombos();
    }

    turnChange();
  });



// iterate through turns - display players turn?

// log id of clicked sqaure and add to array for player in js

//stop buttons from being able to double click

// once one players turns have reached 3, check combination of classes for winning combo with for loop

// if there is no match continue and check for win next turn

// if there is a match trigger animation? reset prompt? link to youtube?

// winner = true {reset game button appears}

// let winner = ;
// winMessage.html(`${winner} is the winner`);
});
