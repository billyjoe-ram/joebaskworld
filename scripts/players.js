let latestEdit = {};

const posts = [];

const api = "https://jsonplaceholder.typicode.com/posts";

function loadPosts() {
    const mainEl = document.querySelector("#posts");

    mainEl.innerHTML = '';

    const req = new XMLHttpRequest();

    console.log(posts);

    for (let index = 0; index < posts.length; index++) {
        const element = posts[index];

        req.open("GET", `${api}/${index + 1}`);

        req.send(null);
    }

    req.addEventListener("loadend", () => {
        for (let index = 0; index < posts.length; index++) {
            const element = posts[index];

            const liEl = document.createElement("li");

            liEl.innerHTML = element.player;

            mainEl.appendChild(liEl);
        }

    });

}

function postData($event) {
    const form = document.querySelector("#playersform");

    $event.preventDefault();

    const data = { player: form.elements.player.value, description: form.elements.description.value, id: posts.length + 1, time: new Date() };

    const req = new XMLHttpRequest();

    req.open("POST", api);

    req.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

    req.send(JSON.stringify(data));

    req.addEventListener("load", () => {
        const response = JSON.parse(req.response);

        posts.push(response);

        latestEdit = response;

        localStorage.setItem('latest', JSON.stringify(latestEdit));

        form.reset();

        loadPosts();

        console.log("Post request sent!")
    });

}

function deleteData() {
    const mainEl = document.querySelector("#posts");

    const req = new XMLHttpRequest();

    console.log(posts);

    if (posts.length > 0) {
        for (let index = 0; index < posts.length; index++) {
            const element = posts[index];

            posts.pop()

            req.open("DELETE", `${api}/${index + 1}`);

            req.send(null);

            req.addEventListener("load", () => {
                console.log("Posts deleted! " + req.response);
            });
        }

        localStorage.clear('latest');
    } else {
        alert("Adicione algo primeiro para poder excluir!");
    }
}
