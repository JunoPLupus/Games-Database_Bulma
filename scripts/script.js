//#region Variables
//const url = `https://api.rawg.io/api/games/clair-obscur-expedition-33?key=${APIKEY}`
const url = `https://api.rawg.io/api/games?key=${APIKEY}&dates=2025-01-01,2025-08-01&ordering=-added`
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
                    <div class="card">
                          <div class="card-image">
                            <figure class="image is-4by3">
                              <img
                                src="${game.background_image}"
                                alt="${game.name} image"
                              />
                            </figure>
                          </div>
                          <div class="card-content">
            
                              <div class="media-content">
                                <p class="title is-4">${game.name}</p>
                                <p class="subtitle is-6">${getPlatformStr(game.parent_platforms)}</p>
                              </div>
                            </div>
                        
                            <div class="content">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                              iaculis mauris. 
                            </div>
                          </div>
                        </div>
                    `
                gameList.insertAdjacentHTML("beforeend", gameItemEl);
            });
        });

    return result;
}

loadGames(url);
//#endregion

const getPlatformStr = (platforms) => {
    const platformStr = platforms.map(pl => pl.platform.name).join(", ");
    if (platformStr.length > 30) {
        return platformStr.substring(0, 30) + "...";
    }
    return platformStr;
}
