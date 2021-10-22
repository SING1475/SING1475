

const msg = document.getElementById("emoji");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

// Creates a default grid sized 16x16
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}
function emoji() {
   let msg= document.getElementById('msg');
   emoji.innerHTML =' ';
   for (let i = 127744; i <= 127844; i++) {
       emoji.innerHTML = emoji.innerHTML + '<br />' + ' &#' + i + ';   ( ' + i + ' )';
   }
}
// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    // Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};

