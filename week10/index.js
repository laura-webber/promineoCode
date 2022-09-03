const myForm = document.getElementById('myForm');
const email = document.getElementById('email')
const name = document.getElementById('name')
let id = 1;

let myTable = document.querySelector('#myTable')

const myList = [];

const headers = ['ID','Name' ,'Email' ];

let num = 1;

function removeTable(){
    document.getElementById(`${num-1}`).remove()

}

myForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let tbody = document.createElement('tbody')
    
    table.setAttribute('id', `${num}`)
    table.setAttribute("class", "table table-bordered table-striped table-hover")

    thead.setAttribute("class", "table-dark")
    
    let headerRow = document.createElement('tr')

    headers.forEach(headerText => {
        let header = document.createElement('th')
        let textNode = document.createTextNode(headerText)
        header.appendChild(textNode)
        headerRow.appendChild(header)
    });


    thead.appendChild(headerRow)
    
    let checkName = document.getElementById('name').value
    let checkEmail = document.getElementById('email').value

    if(checkName != '' && checkEmail != ''){
        
        const data = {
            id: id++,
            name: name.value,
            email: email.value
        };
        
        myList.push(data);

        myList.forEach(person => {
            let row = document.createElement('tr')
            
            Object.values(person).forEach(text => {
                let cell = document.createElement('td')
                let textNode = document.createTextNode(text)
                cell.appendChild(textNode)
                row.appendChild(cell)
            })
            tbody.appendChild(row)
        })
        
        if(num > 1){
        removeTable();   
            
        }
        
        if(num == 1){
            let place = document.querySelector('#support')
            let h3 = document.createElement('h3')
            let text = document.createTextNode('Our supporters:')
            h3.appendChild(text)
            place.appendChild(h3)
        }
        
        num++;
        
        table.appendChild(thead)
        table.appendChild(tbody)
        
        myTable.appendChild(table)
    
        myForm.reset();

    }else{alert("You left something blank")}
    
})
