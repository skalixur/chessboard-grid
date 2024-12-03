const gridChessboard = document.querySelector(".grid-chessboard");

const rows = 8;
const cols = 8;

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    const gridChessboardSquare = document.createElement("div");
    gridChessboardSquare.classList.add("grid-chessboard-square");
    if (i % 2 === 1 && j % 2 === 0)
      if (i % 2 === 0 && j % 2 === 0)
        if (i % 2 === 1 && j % 2 === 0)
          if (i % 2 === 0 && j % 2 === 0)
            gridChessboard.appendChild(gridChessboardSquare);
  }
}
