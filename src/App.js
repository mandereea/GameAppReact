import React from 'react';
import logo from './logo.svg';
import { CreateGameForm} from './CreateForm.js'
import {Game} from './Game.js';
import {FetchApi} from './FetchApi.js'
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props)
    this.fetchApi = new FetchApi();
    this.state = {
          games: []
    }
    //this.displayGames()
  }
  componentDidMount(){
    this.displayGames();
    
  }
  handleCreateBtnClick =(urlencoded) =>{
    this.fetchApi.createNewGameRequest(urlencoded).then(() => {
    this.displayGames();
    })
  }
  handleDeleteBtnClick = (game) => {
    
   // document.getElementById(game._id).remove();
    this.fetchApi.deleteGameOnServer(game._id).then(() => {
    this.displayGames();
    //console.log('game removed');
    })
  }
  handleSaveChangesBtnClick = (id, urlencoded) => {
    this.fetchApi.requestGameUpdate(id, urlencoded).then(()=>{
    this.displayGames();
    })
  }
  async displayGames(){
      const gamesList = await this.fetchApi.fetchGamesList()
      this.setState({ games: gamesList })
  }
  renderGamesList(){
      return this.state.games.map(game => ( 
          <Game
            key={game._id}
            id={game._id}
            game={game}
            title ={game.title}
            description = {game.description} 
            imageUrl = {game.imageUrl}
            onDeleteBtnClick={this.handleDeleteBtnClick}
            onSaveBtnClick={this.handleSaveChangesBtnClick}
          ></Game> ))
  }
  render(){
      return (
        <div className = "page-container">
          <CreateGameForm 
            onCreateBtnClick= {this.handleCreateBtnClick}/>
          <div className="games-list">
            {this.renderGamesList()}
          </div>
        </div>
      )
  }
}


export default App;
