function addUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => displayUsers(users))
}




function displayUsers(users) {
    const cards = document.getElementById('card-container');


    for (let user of users) {
        console.log(user);
        const div = document.createElement('div');
        div.classList.add('styleCard');
        div.innerHTML = `
        <div class="card" style="width: 18rem; background-color: darkslategrey;">
        <div class="card-body">
            <h5 class="card-title">Name:${user.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">User Name: ${user.username}</h6>

            <p class="card-text">
            <h3>Address </h3>
                <address>
                    City :${user.address.city} <br>
                    street:${user.address.street}  <br>
                    suite:${user.address.suite}    <br>
                    zipcode:${user.address.zipcode}  <br>                                
                </address>

                <p>Email: ${user.email} </p>
            </p>
            <a href="#" class="card-link">${user.website}</a>

        </div>
    </div>
       `
        cards.appendChild(div);

    }

}