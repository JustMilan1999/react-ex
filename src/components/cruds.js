import React, { Component } from "react";

export default class cruds extends Component {
  constructor() {
    super();
    this.state = {
      userDetails: {
        fname: "",
        lname: "",
        country: "",
      },
      userData:[],
      index:"",
    };
  }
  handlechange = (e) => {
    this.setState({
      userDetails: {
        ...this.state.userDetails,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleEdit = (i) =>{
    const{userData} =this.state;
    this.setState({userDetails:userData[i], index: i});
  }
  handleDelete = (i) =>{
    const{userData} =this.state;
    const updateUserData =userData.filter((user,index)=>index !==i);
    this.setState({userData:updateUserData});
  }
  handleSubmit = () => {
    const {userData,userDetails,index} = this.state;
    if(index !== ""){
        userData[index] = userDetails;
        this.setState({userData:userData});
    }else{
        this.setState({userData:[...userData,userDetails]})
    }
    this.handleReset();
}
handleReset = () =>{
    this.setState({
        userDetails:{
            fname:"",
            lname:"",
            country:"",
        },
        index:"",
    });
};
 
  render() {
    const { userDetails } = this.state;
    return (
      <>
        <form action="/action_page.php">
          <label for="fname">First name:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            value={userDetails.fname}
            onChange={(e) => this.handlechange(e)}
          />
          <br />
          <label for="lname">Last name:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            value="Doe"
            value={userDetails.lname}
            onChange={(e) => this.handlechange(e)}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={() => this.handleSubmit()}
          />
        </form>
        <table style="width:100% border:3px solid black">
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th>Country</th>
            <th>action</th>
          </tr>
          {userData.map((item,index) => (
            <tr key={index}>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.country}</td>
                <td>
                    <button onClick={() => this.handleEdit(index)}>edit</button>
                    <button onClick={() => this.handleDelete(index)}>delete</button>
                </td>
            </tr>
          ))}
        </table>
      </>
    );
  }
}
