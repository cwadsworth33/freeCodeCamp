//global object containing the game setup information
var gameSetup = {
  isTwoPlayer: true,
  gameStarted: false,
  player1: "X",
  player2: "O",
  empty: "_",
};

var interval;

//global object containing the game state
var gameState = {
  isP1Turn: true,
  board: ["_","_","_","_","_","_","_","_","_"],
  moves: 0
};

/*
 * One player was selected from the start menu
 */
function one(){
  gameSetup.isTwoPlayer = false;
  interval = setInterval(computerMove, 1000);
  $("#selectX").show();
  $("#one-player").hide();
  $("#two-player").hide();
  $("#new-game").html("Select X or O");
}

/*
 * Two player was selected from the start menu
 */
function two(){
  gameSetup.isTwoPlayer = true;
  $("#selectX").show();
  $("#one-player").hide();
  $("#two-player").hide();
  $("#new-game").html("Player 1: Select X or O");
}

/*
 * X was selected from the start menu for player 1
 */
function X(){
  gameSetup.gameStarted = true;
  gameSetup.player1 = "X";
  gameSetup.player2 = "O";
  gameState.isP1Turn = true;
  clearBoard();
  $("#turn-player2").hide();
  $("#menu").hide();
}

/*
 * O was selected from the start menu for player 1
 */
function O(){
  gameSetup.player1 = "O";
  gameSetup.player2 = "X";
  gameSetup.gameStarted = true;
  gameState.isP1Turn = true;
  clearBoard();
  $("#turn-player2").hide();
  $("#menu").hide();
}

/*
 * plays a new letter at the specified index and then checks
 * if the game is over
 *
 * @param index the location on the board
 */
function play(index){
  //only does something if the game has started
  if(gameSetup.gameStarted){
    //check if index is at an open square on the board
    if(gameState.board[index] == gameSetup.empty){
      //player 1 marks the board at index
      if(gameState.isP1Turn){
        gameState.board[index] = gameSetup.player1;
        draw(gameSetup.player1, index);
      }
      //alternatively, player 2 marks the board at index
      else{
        gameState.board[index] = gameSetup.player2;
        draw(gameSetup.player2, index);
      }
      gameState.moves = gameState.moves + 1;
      //game over?
      if(isGameOver(gameState.board)){
        var hasWon1 = hasWon(gameSetup.player1, gameState.board);
        var hasWon2 = hasWon(gameSetup.player2, gameState.board);
        if(hasWon1.won){
          winningRow(hasWon1, gameSetup.player1);
        }
        else if(hasWon2.won){
          winningRow(hasWon2, gameSetup.player2);
        }
        else{
          $("#new-game").html("Draw! New Game?");
        }
        $("#menu").show();
        $("#one-player").show();
        $("#two-player").show();
        $("#selectX").hide();
        $("#turn-player1").show();
        $("#turn-player2").show();
        gameState.isP1Turn = true;
        gameSetup.gameStarted = false;
        clearInterval(interval);
      }
      //game is not over
      else{
        //flip turn
        gameState.isP1Turn = !gameState.isP1Turn;
        toggleTurn();
      }
    }
  }
}

/*
 * Draws a shape at the specified index on the board
 *
 * @param shape the shape that is being drawn on the board
 * @param index the location on the board
 */
function draw(shape, index){
  var color;
  if(shape == "X"){
    color = "gold";
  }
  else if(shape == "O"){
    color = "silver";
  }
  else{
    color = "brown";
  }
  var divID = "" + index;
  var text = $('<h2>'+shape+'</h2>');
  text.css("color", color);
  $("#"+divID).html(text);
}

/*
 * Checks if the specified player has won the game
 *
 * @param player the player being checked for a win ("X" or "O")
 * @return an object representing the win conditions for that player
 *         in the form { squares: array,
 *                       won: boolean }
 *         won is true if the game was won by the specified player
 *         squares contains all of the winning squares in an array
 */
function hasWon(player, board){
  var winningSquares = [];
  var gameWon = false;
  if(board[0] == player && board[1] == player && board[2] == player){
    gameWon = true;
    winningSquares.push(0);
    winningSquares.push(1);
    winningSquares.push(2);
  }
  if(board[3] == player && board[4] == player && board[5] == player){
    gameWon = true;
    winningSquares.push(3);
    winningSquares.push(4);
    winningSquares.push(5);
  }
  if(board[6] == player && board[7] == player && board[8] == player){
    gameWon = true;
    winningSquares.push(6);
    winningSquares.push(7);
    winningSquares.push(8);
  }
  if(board[0] == player && board[4] == player && board[8] == player){
    gameWon = true;
    winningSquares.push(0);
    winningSquares.push(4);
    winningSquares.push(8);
  }
  if(board[2] == player && board[4] == player && board[6] == player){
    gameWon = true;
    winningSquares.push(2);
    winningSquares.push(4);
    winningSquares.push(6);
  }
  if(board[0] == player && board[3] == player && board[6] == player){
    gameWon = true;
    winningSquares.push(0);
    winningSquares.push(3);
    winningSquares.push(6);
  }
  if(board[1] == player && board[4] == player && board[7] == player){
    gameWon = true;
    winningSquares.push(1);
    winningSquares.push(4);
    winningSquares.push(7);
  }
  if(board[2] == player && board[5] == player && board[8] == player){
    gameWon = true;
    winningSquares.push(2);
    winningSquares.push(5);
    winningSquares.push(8);
  }
  var obj = {
    squares: winningSquares,
    won: gameWon
  };
  return obj;
}

/*
 * Finds the winning row(s) and changes the css
 *
 * @param conditions an object returned from hasWon() reflecting the game state
 * @param player the player being tested for the win
 */
function winningRow(conditions, player){
  var color;
  var num;
  if(player == gameSetup.player1){
    color = "purple";
    num = 1;
  }
  else{
    color = "blue";
    num = 2;
  }
  if(conditions.won){
    for(i=0; i<conditions.squares.length; i++){
      $("#" + conditions.squares[i]).css("background-color", color);
    }
    $("#new-game").html("Player " + num + " Wins! New Game?");
  }
}

/*
 * Finds if the game has reached a terminal position
 *
 * @return true if the game is over, false if not
 */
function isGameOver(board){
  if(hasWon(gameSetup.player1, board).won || hasWon(gameSetup.player2, board).won){
    return true;
  }
  else{
    return gameState.moves == 9;
  }
}

/*
* Controls the player turn tags after every move. This
* function only changes the DOM
*/
function toggleTurn(){
  if(gameState.isP1Turn){
    $("#turn-player1").show();
    $("#turn-player2").hide();
  }
  else{
    $("#turn-player1").hide();
    $("#turn-player2").show();
  }
}

/*
* Clears the board (The DOM and the gameState variable)
*/
function clearBoard(){
  for(i=0; i<9; i++){
    gameState.board[i] = "_";
    $("#"+i).html("");
    $("#"+i).css("background-color","");
  }
  gameState.moves = 0;
}
/////////////////////////////////////////////////////////////////
// AI functions
/////////////////////////////////////////////////////////////////

/*
* Finds all of the possible moves on the board
*
* @param board a game state
* @return an array of the indexes of the possible moves
*/
function actions(board){
  var moves = [];
  for(i=0; i<board.length; i++){
    if(board[i] != gameSetup.player1 && board[i] != gameSetup.player2){
      moves.push(i);
    }
  }
  return moves;
}

/*
* Determines whose move it is from a given board state
*
* @param state a game state
* @return the player whose turn it is (X or O)
*/
function player1(state){
  var c1 = 0;
  var c2 = 0;
  for(i=0; i<state.length; i++){
    if(state[i] == gameSetup.player1){
      c1 = c1 + 1;
    }
    else if(state[i] == gameSetup.player2){
      c2 = c2 + 1;
    }
  }
  if(c1 > c2){
    return gameSetup.player2;
  }
  else{
    return gameSetup.player1;
  }
}

/*
* Finds the state after a move
*
* @param board a beginning game state
* @param move the index of a move
* @return the state after a move has occured
*/
function result(board, move){
  var newState = board.slice();
  var player = player1(board);
  newState[move] = player;
  return newState;
}

function findMove(board){
  var block = -1;
  var moves = actions(board);
  for(var i=0; i<moves.length; i++){
    var newBoard = result(board, moves[i]);
    if(isGameOver(newBoard)){
      return moves[i];
    }
    var moves2 = actions(newBoard);
    for(var j=0; j<moves.length; j++){
      var newNewBoard = result(newBoard, moves2[j]);
      if(isGameOver(newNewBoard)){
        block = moves2[j];
      }
    }
  }
  if(block >= 0){
    return block;
  }
  return moves[Math.floor(Math.random()*moves.length)];
}

function computerMove(){
  if(!gameState.isP1Turn){
    var move = findMove(gameState.board);
    play(move);
  }
}
