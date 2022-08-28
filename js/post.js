function addPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(post => postDisplay(post))

}

function postDisplay(posts) {
    const addPostPosition = document.getElementById('post-container');

    for (let post of posts) {
        console.log(post);
        const div = document.createElement('div');
        div.classList.add('postStyle');
        div.innerHTML = `
        <h3> ${post.userId}</h3>
        <h3> ${post.id}</h3>
        <h3> ${post.title}</h3>
        <p>${post.body}</p>
        
        `
        addPostPosition.appendChild(div);
    }

}