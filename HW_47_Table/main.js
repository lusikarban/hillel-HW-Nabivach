function createCell(number) {
    var cell = document.createElement('td');
    var cellText = document.createTextNode(number);
    cell.appendChild(cellText);
    return cell;
}

function createRow(start, end) {
    var row = document.createElement('tr');
    for (var i = start; i <= end; i++) {
        var cell = createCell(i);
        row.appendChild(cell);
    }
    return row;
}

function createTable(start, end) {
    var table = document.createElement('table');
    for (var i = start; i <= end; i += 10) {
        var row = createRow(i, i + 9);
        table.appendChild(row);
    }
    return table;
}

function appendTableToContainer(table, containerId) {
    var container = document.getElementById(containerId);
    container.appendChild(table);
}


function main() {
    var table = createTable(1, 100);
    appendTableToContainer(table, 'table-container');
}

window.onload = main;
