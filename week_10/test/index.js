const myForm = document.getElementById('myForm');
const email = document.getElementById('email')
const name = document.getElementById('name')

let id = 2;

let rowIndex = 2;

let myTable = document.querySelector('#table')


function createRow() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(rowIndex++);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = `${id++}`;
    cell2.innerHTML = document.getElementById('name').value
    cell3.innerHTML = document.getElementById('email').value
}



myForm.addEventListener('submit', (event) => {
    event.preventDefault();

    createRow();

    myForm.reset();

})