const lastPost = JSON.parse(localStorage.getItem('latest')) || [];

loadLastPost();

function loadLastPost() {
    const container = document.getElementById("container");

    const lastPostTitleContainer = container.firstElementChild;

    const lastPostContentContainer = document.querySelector("article");

    if (lastPost.player && lastPost.time && lastPost.description) {
        lastPostTitleContainer.innerHTML = `Último post atualizado: ${lastPost.player}`;

        const lastPostTime = lastPost.time;

        const lastPostTitle = lastPostTitleContainer.innerHTML;

        lastPostTitleContainer.innerHTML = `${lastPostTitle} - ${lastPostTime}`;

        lastPostContentContainer.innerHTML = `<p>${lastPost.description}</p>`;
    } else {
        lastPostTitleContainer.innerHTML = "Crie uma postagem para um jogador para que ela apareça aqui";

        lastPostContentContainer.innerHTML = `<p>Aqui vai toda a história do jogador, escrita livremente por você, em formato wiki</p>`;
    }
    
}