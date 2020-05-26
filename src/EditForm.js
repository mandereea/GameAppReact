import React from 'react';
class EditForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: props.title,
            imageUrl:props.imageUrl,
            description:props.description,
        }    
    }
    encodeFormData(){
        const urlencoded = new URLSearchParams();

        urlencoded.append("title", this.state.title);
        urlencoded.append("imageUrl", this.state.imageUrl);
        urlencoded.append("description", this.state.description);
       
        return urlencoded;
    }
    render(){
        return(
            <form className="updateForm">
                <div className="element-wrapper">
                   <label htmlFor="updateTitle">Edit Title</label>
                   <input type="text" 
                          id="updateTitle" 
                          value={this.state.title} 
                          onChange={(data) => { this.setState({title: data.target.value }) }}/>
                </div>
                <div className="element-wrapper">
                    <label htmlFor="updateImageUrl">Edit Image URL</label>
                    <input type="text" 
                           id="updateImageUrl" 
                           value={this.state.imageUrl} 
                           onChange={(data) => { this.setState({imageUrl: data.target.value }) }}/>
                </div>
                <div className="element-wrapper">
                    <label htmlFor="updateDescription">Edit Description</label>
                    <textarea id="updateDescription" rows="5" 
                              value={this.state.description} 
                              onChange={(data) => { this.setState({description: data.target.value }) }}></textarea>
                </div>
                <div className="buttons-wrapper">
                    <button type="submit" className="update-btn"
                            onClick={()=>this.props.onSaveChangesBtnClick(this.props.id, this.encodeFormData())}>
                            Save Changes</button>
                    <button className="cancel-btn">Cancel</button>
                </div>
            </form>
        )
    }
}

export {EditForm}