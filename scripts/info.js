//#region Variables
const gameDetails = document.getElementById("game-details");

const gameSlug = `clair-obscur-expedition-33`;
//#endregion
const getGameDetails = (gameId) => {

    const result = fetch(`${URL_BASE}${_GAMES}/${gameId}${KEY}`)
        .then(response => response.json())
        .then(data => {

            const game = data; //'data.results' quando pesquisa geral e só 'data' quando jogo específico

            const gameItemEl = `
                            <!-- Fundo e Overlay -->
                            <div class="hero-background ">
                                    <img
                                            src="${game.background_image}"
                                            alt="${game.name} image"
                                            class="background-image"
                                    >
                                    <div class="background-overlay"></div>
                        
                            </div> <!-- fim 'hero-background' -->
                        
                            <!-- Conteúdo Principal -->
                            <div class="hero-body">
                                <div class="container">
                                    <div class="columns">
                        
                                        <!-- Coluna Central (card) -->
                                        <section class="section">
                                            <div class="container">
                                                <h1 class="title is-1">${game.name}</h1>
                                                <span class="icon-text">
                                                        <span class="icon has-text-warning"> <i class="fa-slab fa-regular fa-star"></i> </span>
                                                        <span>${game.rating}</span>
                                                    </span>
                                                <br>
                                                <br>
                                                <br>
                        
                                                <!-- Metadados principais -->
                                                <article class="content">
                                                    <h3 class="subtitle is-3">Overview</h3>
                        
                                                    <div class="field">
                                                        <p>Once a year, the Paintress wakes and paints upon her monolith. Paints her cursed number.
                                                            And everyone of that age turns to smoke and fades away. Year by year, that number
                                                            ticks down and more of us are erased. Tomorrow she’ll wake and paint “33.” And
                                                            tomorrow we depart on our final mission - Destroy the Paintress, so she can never
                                                            paint death again.</p>
                                                        <br>
                                                        <p>We are Expedition 33.</p>
                                                    </div> <!-- fim 'field' -->
                        
                                                    <br>
                        
                                                    <div class="grid is-col-min-12">
                                                        <div class="content">
                                                            <h5 class="subtitle is-5"> Genres </h5>
                                                            <span class="tag is-size-5"> RPG </span>
                                                        </div>
                        
                                                        <div class="content">
                                                            <h5 class="subtitle is-5"> Tags </h5>
                        
                                                            <span class="tag is-size-5"> Singleplayer </span>
                                                            <span class="tag is-size-5"> RPG </span>
                                                            <span class="tag is-size-5"> Story Rich </span>
                                                        </div>
                        
                        
                                                    </div> <!-- fim 'grid' -->
                                                </article> <!-- fim 'content' -->
                        
                                                <article class="content">
                                                    <div id="media" class="content tab-content is-hidden">
                                                        <p><strong>Video</strong>
                                                            <a href="https://www.youtube.com/watch?v=e4k14M7nnSk" target="_blank">
                                                                Watch on YouTube
                                                            </a>
                                                        </p>
                        
                                                        <div class="columns is-multiline">
                                                            <div class="column is-3">
                                                                <figure class="image is-128x128">
                                                                    <img src="" alt="Logo">
                                                                </figure>
                                                            </div>
                                                            <div class="column is-3">
                                                                <figure class="image is-3by5">
                                                                    <img src="" alt="Box Front Fanart">
                                                                </figure>
                                                            </div>
                                                            <div class="column is-3">
                                                                <figure class="image is-16by9">
                                                                    <img src="" alt="Screenshot - Game Title">
                                                                </figure>
                                                            </div>
                                                            <div class="column is-3">
                                                                <figure class="image is-16by9">
                                                                    <img src="" alt="Screenshot - Gameplay">
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </div> <!-- fim 'media' -->
                                                </article> <!-- fim 'content' -->
                                            </div> <!-- fim 'container' -->
                                        </section> <!-- fim 'section' -->
                        
                        
                                        <!-- Coluna 2 (lateral) -->
                                        <aside class="column is-one-quarter has-text-light">
                                            <div class="content">
                                                <div class="content">
                                                    <p class="subtitle is-6"> Released </p>
                                                    <h5 class="subtitle is-5"><strong> ${game.released} </strong></h5>
                                                </div>
                        
                                                <hr>
                        
                                                <div class="content">
                                                    <p class="subtitle is-6"> Updated </p>
                                                    <h5 class="subtitle is-5"><strong> ${game.updated} </strong></h5>
                                                </div>
                        
                                                <hr>
                        
                                                <div class="content">
                                                    <p class="subtitle is-6"> Platforms </p>
                                                    <h5 class="subtitle is-5"><strong> ${getPlatformStr(game.parent_platforms)} </strong></h5>
                                                </div>
                        
                                                <hr>
                        
                                                <div class="content">
                                                    <p class="subtitle is-6"> Developers </p>
                                                    <h5 class="subtitle is-5"><strong> ${getDevelopersStr(game.developers)} </strong></h5>
                                                </div>
                        
                        
                                                <hr>
                        
                                                <div class="content">
                                                    <p class="subtitle is-6"> Publisher </p>
                                                    <h5 class="subtitle is-5"><strong> ${getPublishersStr(game.publishers)} </strong></h5>
                                                </div>
                        
                                            </div> <!-- fim 'content' -->
                                        </aside> <!-- fim 'column' -->
                        
                                    </div> <!-- fim 'columns' -->
                                </div> <!-- fim 'container' -->
                            </div> <!-- fim 'hero-body' -->
                    `
            gameDetails.insertAdjacentHTML("beforeend", gameItemEl);
        });
    return result;
}

getGameDetails(gameSlug);
