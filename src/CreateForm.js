import React from 'react';

class CreateGameForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            newGameTitle: '',
            newGameImageUrl:'',
            newGameDescription:''
        }
    }
    encodeFormData(){
        const urlencoded = new URLSearchParams();

        urlencoded.append("title", this.state.newGameTitle);
        urlencoded.append("imageUrl", this.state.newGameImageUrl);
        urlencoded.append("description", this.state.newGameDescription);
    
        return urlencoded   
    }
    render(){
        return(
            <form className="creationForm">
            <div className = "element-wrapper">
                <label htmlFor ="gameTitle">Title*</label>
                <input type="text" 
                       id="gameTitle"
                       value= {this.state.newGameTitle} 
                       onChange={(data) => { this.setState({ newGameTitle: data.target.value }) }}/>
            </div>
    
            <div className = "element-wrapper">
                <label htmlFor ="gameDescription">Description*</label>
                <textarea id="gameDescription" rows="5" 
                          value= {this.state.newGameDescription}
                          onChange={(data) => { this.setState({ newGameDescription: data.target.value }) }}></textarea>
            </div>
    
            <div className = "element-wrapper">
                <label htmlFor ="gameGenre">Genre</label>
                <select id="gameGenre">
                    <option value="">-</option>
                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                </select>
            </div>
    
            <div className = "element-wrapper">
                <label htmlFor ="gamePublisher">Publisher</label>
                <input type="text" id="gamePublisher" value="Self" readOnly/>
            </div>
    
            <div className = "element-wrapper">
                <label htmlFor ="gameImageUrl">Image URL*</label>
                <input type="text" 
                       id="gameImageUrl" 
                       value= {this.state.newGameImageUrl} 
                       onChange={(data) => { this.setState({ newGameImageUrl: data.target.value }) }} />
            </div>
    
            <div className = "element-wrapper">
                <label htmlFor ="gameRelease">Release Date*</label>
                <input type="text" id="gameRelease" value="30032020" readOnly/>
            </div>
            <button type="submit" className="submit-btn" 
                    onClick={() => this.props.onCreateBtnClick(this.encodeFormData())}>
                    CREATE GAME</button>
        </form>
    
        )
    }
}

export { CreateGameForm }

