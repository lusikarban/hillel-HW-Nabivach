
var table = document.createElement('table');

var number = 1;
for (var i = 0; i < 10; i++) {
  var row = document.createElement('tr');
  for (var j = 0; j < 10; j++) {
    var term = document.createElement('td');
    term.textContent = number;
    row.appendChild(term);
    number++;
  }
  table.appendChild(row);
}


var tableAll = document.getElementById('table'); 
tableAll.appendChild(table);