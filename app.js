const table = document.getElementById('dynamic-table');
const addRowBtn = document.getElementById('addRow');

var count = 1;
function insertRow() {
const tr = document.createElement('tr');
const td = document.createElement('td');
const td2 = document.createElement('td');
td.textContent = `cell${count}`;
count +=1;
td2.textContent = `cell${count}`;
tr.appendChild(td);
tr.appendChild(td2);
table.appendChild(tr);
count +=1;
}

addRowBtn.addEventListener('click', insertRow);