const width = parseInt(readline()); // the number of cells on the X axis
const height = parseInt(readline()); // the number of cells on the Y axis
let rect = [];
// I initially used let nodeRows = new Array(height).fill([]);
// this created an issue with the fact that due to the use of the .fill() method, all arrays inside nodeRows
// had the same reference, because of which changing one of them was changing all of them

let nodeRows = new Array(height); // nodeRows contains horizontal lines of input
// nodeRows[i] is a line, nodeRows[i][j] is a node on that line
for (let i =0; i < height; i++) {
    nodeRows[i] = [];
}

// originally: let nodeColumns = new Array(width).fill([]);
let nodeColumns = new Array(width);  // nodeColumns contains vertical lines of input
// nodeColumns[i] is a line, nodeColumns[i][j] is a node on that line
for (let i =0; i < width; i++) {
    nodeColumns[i] = [];
}

for (let i = 0; i < height; i++) {
    const line = readline(); // width characters, each either 0 or .
    rect.push(line);
}
for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        if (rect[i][j] == '0') {
            let indexInNodeColumns = nodeColumns[j].length;
            nodeRows[i].push([j, i, indexInNodeColumns]);
            nodeColumns[j].push([j, i]);
        }
    }
}


for (let i = 0; i < height; i++) {
    let rowSize = nodeRows[i].length;
    if (rowSize > 0) {
        for (let j = 0; j < rowSize; j++) {
            let node = nodeRows[i][j];
            let nodeCoord = node.slice(0,2);
            let columnIndex = node[0];
            let indexInColumn = node[2];
            let rightNeighbor = '';
            let downNeighbor = '';
            if (j < rowSize - 1) {
                rightNeighbor = nodeRows[i][j+1]
                .slice(0,2)
                .join(" ");
            } else {
                rightNeighbor = '-1 -1';
            }
            if (nodeColumns[columnIndex].length > indexInColumn + 1) {
                downNeighbor = nodeColumns[columnIndex][indexInColumn + 1]
                .slice(0,2)
                .join(" ");
            } else {
                downNeighbor = '-1 -1';
            }
            let answerString = nodeCoord.join(" ") + " " + rightNeighbor + " " + downNeighbor;
            console.log(answerString);
        }
    }
}