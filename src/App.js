import React, { Component } from "react";
import { connect } from "react-redux";
import * as contactAction from "./actions/contactAction";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleName = this.handleName.bind(this);
    this.handleNumber=this.handleNumber.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: "",
      number: ""
    };
  }

  handleName = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleNumber=e=>{
    this.setState({
      number: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    let contact = {
      name: this.state.name,
      number: this.state.number
    };
    this.props.createContact(contact);
    this.setState({
      name: "",
      number: ""
    })
  };

  deleteContact(e,index){
    e.preventDefault();
    this.props.deleteContact(index);
  }

  listView(data,index){
    return (
      
  
  
    <tr>
      <th scope="row">#</th>
      <td>{data.name}</td>
      <td>{data.number}</td>
      <td><button onClick={(e)=>this.deleteContact(e,index)} className="btn btn-danger">
            Remove
          </button></td>
    </tr>
      
    
    

      
      /* <div className="row">
        <div className="col-md-10">
          <li key={index} classname="list-group-item clearfix">
            {data.name}
            {data.number}
          </li>
        </div>
        <div className="col-md-2">
          <button onClick={(e)=>this.deleteContact(e,index)} className="btn btn-danger">
            Remove
          </button>
        </div>
      </div> */
    )
  }
 

  render() {

    return(
      <div className="container">
        <h1>Phonebook Directory</h1>
        <hr />
        <div>
          <h3>Add Contact Form</h3>
          <form onSubmit={this.handleSubmit}>
            <input required="true" type="text" onChange={this.handleName} className="form-control" value={this.state.name} placeholder="Contact Name"/><br />
            <input required="true" type="Number" onChange={this.handleNumber} className="form-control" value={this.state.number} placeholder="Contact Number"/><br />
            <input type="submit" className="btn btn-success" value="ADD"/>
          </form>
          <hr />
          <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Contact</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
            
              {this.props.contacts.map((contact, i) => this.listView(contact, i))}
            
        </tbody>
        
        </table>
        </div>

        
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    deleteContact: index =>dispatch(contactAction.deleteContact(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);