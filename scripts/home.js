//#region Variables
const url = `${URL_BASE}${_GAMES}${KEY}&dates=2025-01-01,2025-08-01&ordering=-added`
const gameList = document.getElementById("gameList");
//#endregion

//#region Connection-API
const loadGames = (url) => {
    const result = fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.results); //'data.results' quando pesquisa geral e só 'data' quando jogo específico

            const games = data.results;

            games.forEach(game => {
                const gameItemEl = `
                    <div class="card" onclick="window.location.href = 'info.html';">

                              <div class="card-image">
                                <figure class="image is-5by3">
                                  <img
                                    src="${game.background_image}"
                                    alt="${game.name} image"
                                  />
                                </figure>
                              </div> <!-- Fim "card-image" -->

                              <div class="card-content">
                                        <div class="media-content">
                                            <h5 class="title is-5 card-title">${game.name}</h5>
                                            <h6 class="subtitle is-6">${getPlatformStr(game.parent_platforms)}</h6>
                                          </div> <!-- Fim "media-content" -->
                                        <br>
                                        <div class="content">
                                          <span class="icon-text">
                                              <span class="icon has-text-warning"> <i class="fa-slab fa-regular fa-star"></i> </span>
                                              <span>${game.rating}</span>
                                            </span>
                                        </div> <!-- Fim "content" -->
                              </div> <!-- Fim "card-content" -->

                    </div> <!-- Fim "card" -->
                    `
                gameList.insertAdjacentHTML("beforeend", gameItemEl);
            });
        });

    return result;
}
//#endregion

loadGames(url);


