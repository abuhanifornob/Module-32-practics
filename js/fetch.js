// featch Documentation Link: JSON Placeholder

fetch('https://jsonplaceholder.typicode.com/todos/1')
    //.then(response => console.log(response))

/*The callback to execute when the Promise is resolved.
Attaches callbacks for the resolution and/or rejection of the Promise */

.then(response => response.json()) // .json is not to similar JSON.parse but Close to JSON.parse

//.then(json => console.log(json))



const url = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(url)
    .then(response => response.json())
    //  .then(json => console.log(json))


//Use The Function of 

function getObject() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json())
        // .then(json => console.log(json))
}