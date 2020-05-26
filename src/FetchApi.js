class FetchApi{
    constructor(){
    this.baseUrl = 'https://games-app-siit.herokuapp.com';
    }
    async fetchGamesList(){
        const responseServer = await fetch(`${this.baseUrl}/games`);
        const gamesArray = await responseServer.json();
        return gamesArray;
    }
    async createNewGameRequest(game){
        const response = await fetch(`${this.baseUrl}/games`,{
                    method: "POST",
                    headers:{
                        "Content-type":"application/x-www-form-urlencoded"
                    },
                    body:game
        });
        const newGameJson = await response.json();
        return newGameJson;
    }
    async deleteGameOnServer(gameId){
        await fetch(`${this.baseUrl}/games/${gameId}`, {
            method:"DELETE"
        });
    }
    async requestGameUpdate(gameId, gameEncoded){
        const response = await fetch(`${this.baseUrl}/games/${gameId}`, { 
            method:"PUT",
            headers:{
                "Content-type":"application/x-www-form-urlencoded"
            },
            body:gameEncoded
        });
        const gameUpdatedJson = await response.json();
        return gameUpdatedJson;
    }
}

export {FetchApi}