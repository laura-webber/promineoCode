const myForm = document.getElementById('myForm')
const email = document.getElementById('email')
const name = document.getElementById('name')

const content = document.getElementById('content')

const emailInfo = [
    {email: 'test@email.com', name: 'Rodrigo'},
    {email: 'email@email.com', name: 'Joe'}
];

emailInfo.forEach(person => {
    const infoBox = document.createElement('div');
    infoBox.classList.add('info-box');

    infoBox.innerText = `${person.email} ${person.name}`;
    content.append('infoBox');
})

const buildInfoList = () => {
    content.innerHTML = '';
    emailInfo.forEach(person => {
        const infoBox = document.createElement('div');
        infoBox.classList.add('info-box');

        infoBox.innerText = `${person.email} ${person.name}`;
        content.append(infoBox);
    })
}

buildInfoList();

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
        email: email.value,
        name: name.value
    };
    //console.log(data)
    emailInfo.push(data);
    buildInfoList();
    myForm.reset();
})

// Build a form that has a title and a body input 
    // when pressing submit the form should make a post request to 
    // https://jsonplaceholder.typicode.com/posts
    // console.log the response
    // the API should respond with you title and body and an id: 101
