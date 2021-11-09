function createBlankMaze() {
  document.getElementById("maze_container").innerHTML = "";

  var rowIndex, colIndex;

  var table = document.createElement("table");
  var tbody = document.createElement("tbody");

  for (rowIndex = 0; rowIndex < mazeHeight; rowIndex++) {
    var row = document.createElement("tr");

    for (colIndex = 0; colIndex < mazeWidth; colIndex++) {
      var col = document.createElement("td");
      if (rowIndex == 0 && colIndex == 0) {
        col.style.backgroundColor = "rgb(244,0,0)";
        col.setAttribute("type", "start");
      } else if (rowIndex == mazeHeight - 1 && colIndex == mazeWidth - 1) {
        col.style.backgroundColor = "rgb(0,244,0)";
        col.setAttribute("type", "finish");
      } else {
        col.style.backgroundColor = "rgb(255,255,255)";
      }
      col.setAttribute("id", "cell_" + rowIndex + "_" + colIndex);
      // attach a listener that listens to that id...
      col.addEventListener("click", (e) => toggleWall(e.target.id));
      row.appendChild(col);
    }

    tbody.appendChild(row);
  }

  table.appendChild(tbody);

  document.getElementById("maze_container").appendChild(table);
}

function toggleWall(id) {
  let cell = document.getElementById(id);
  // if cell is white or black (red or green do not change!)
  if (cell.style.backgroundColor == "rgb(255, 255, 255)") {
    cell.style.backgroundColor = "rgb(0, 0, 0)";
    let row = id.substring(id.indexOf("_") + 1, id.lastIndexOf("_"));
    let col = id.substring(id.lastIndexOf("_") + 1, id.length);
    maze[col][row] = false;
  } else if (cell.style.backgroundColor == "rgb(0, 0, 0)") {
    cell.style.backgroundColor = "rgb(255, 255, 255)";
    let row = id.substring(id.indexOf("_") + 1, id.lastIndexOf("_"));
    let col = id.substring(id.lastIndexOf("_") + 1, id.length);
    maze[col][row] = true;
  }
}
