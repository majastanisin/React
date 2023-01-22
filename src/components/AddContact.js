import React from "react";

class AddContact extends React.Component {
    state = {
        name: "",
        phone: "",
    };
    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.phone === "" ){
            alert("Try agagin!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name: "", phone: ""});
    };
render() {
    return (
        <div className="ui main">
            <h1></h1>
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={this.add} >
                <div className="field">
                    <label>Name</label>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={this.state.name}
                    onChange={ (e) => this.setState({name: e.target.value})}/>
                </div>
                <div className="field">
                    <label>Phone</label>
                    <input 
                    type="text" 
                    name="phone" 
                    placeholder="Phone"
                    value={this.state.phone}
                    onChange={ (e) => this.setState({phone: e.target.value})}/>
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    );
 }
}

export default AddContact;