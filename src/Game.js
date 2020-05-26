import React from 'react';
import {EditForm} from './EditForm.js';

class Game extends React.Component{
    constructor(props){
        super(props)
         this.state = {
            editForm:false
          }
    }
    handleEditBtnClick(){
        this.setState({editForm:true})
    } 
    render(){
        return(
            <div id={this.props.id}>
                <h1>{this.props.title}</h1>
                <img src={this.props.imageUrl} alt="game cover"/>
                <p>{this.props.description}</p>
                <button className="deleteBtn" 
                        onClick={() => this.props.onDeleteBtnClick(this.props.game)}>DELETE GAME</button>
                <button className="editBtn" 
                        onClick ={() => this.handleEditBtnClick()}>EDIT GAME</button>
                {this.state.editForm && <EditForm
                    id={this.props.id}
                    title={this.props.title}
                    imageUrl={this.props.imageUrl}
                    description={this.props.description}
                    onSaveChangesBtnClick={this.props.onSaveBtnClick}
                    ></EditForm>
                }
            </div>
        )
    }
}

export {Game}