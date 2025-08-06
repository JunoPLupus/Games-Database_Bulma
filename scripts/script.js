//#region Variables
const url = `https://api.rawg.io/api/games/clair-obscur-expedition-33?key=${APIKEY}`
//const url = `https://api.rawg.io/api/games?key=${APIKEY}&dates=2025-01-01,2025-08-01&ordering=-added`
const gameList = document.getElementById("gameList");

//#endregion

//#region Connection-API
const loadGames = (url) => {
    const result = fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); //'data.results' quando pesquisa geral e só 'data' quando jogo específico

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
