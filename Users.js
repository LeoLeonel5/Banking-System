import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import './Users.css';

class Users extends React.Component{
    constructor(props){
        super(props)
        this.state=({items:[],
        DataisLoaded: false,
        RecipientUsername:'',
        Amount:'',
    })
    }
    componentDidMount(){
        axios.get('http://localhost:3001/cities')
        .then((res) => res.data)
        .then((data) => {
            this.setState({
                items: data,
                DataisLoaded: true,
            });
        })
    }

    validate(){
        let x = document.getElementById("amount").value;
        let y = this.state.Amount
        if(x>y){
            window.alert("Insufficient funds");
        }
    }

    openPopup(){
        document.getElementById('add-user').classList.add("open-popup")
    }
    openTransactions(){
        window.alert("Please reload the page to view recent transactions");
    }
    closePopup(){
        document.getElementById('add-user').classList.remove("open-popup")
    }
    handleChangeSenderUsername = (event) =>{
        this.setState({SenderUsername:event.target.value});
    }
    handleChangeRecipientUsername = (event) =>{
        this.setState({RecipientUsername:event.target.value+"@gmail.com"});
    }
    handleChangeAmount = (event) =>{
        this.setState({Amount:event.target.value});
    }
    handleSubmit = (event) =>{
        const {RecipientUsername, SenderUsername, Amount} = this.state;
        if(!SenderUsername || !RecipientUsername || !Amount){
            event.preventDefault(); 
            window.alert("Please fill all the required fields");
        }
        else{
        axios.post("http://localhost:3001/cities", {RecipientUsername, Amount})
        .then((res)=>window.alert(res.data))
        window.alert("Data Added Successfully");
        document.getElementById('add-user').classList.remove("open-popup")
        }
        }
    render(){
        const {DataisLoaded, items} = this.state;
        if(!DataisLoaded) return <div><h1>Please wait while we fetch information.....</h1></div>
        return(
            <div>
                <ul>
                    <li><button onClick={this.openPopup}>SEND</button></li>
                    <li><Link to="/"><button>BACK</button></Link></li>
                    </ul>
            <div>
                <form className='add-user' id="add-user">
                    <br></br>
                    <label className="label">Recipient's Username</label>
                    <input type='text' className="inp" onChange={this.handleChangeRecipientUsername}></input><br></br>
                    <br></br>
                    <label className="label">Enter Amount</label>
                    <input type='text' className="inp" onChange={this.handleChangeAmount}></input>
                    <button onClick={this.handleSubmit}>SEND MONEY</button>
                    <button onClick={this.closePopup}>CLOSE</button>
                </form>
            </div>
            <table className="users">
            <tr>
                <th>S.NO</th>
                <th>Transaction ID</th>
                <th>Mail Adress</th>
                <th>Amount</th>
            </tr>
            {
            items.map((item, Count) => (
                    <tr>
                        <td>{Count+1}</td>
                        <td>{item.TransactionID}</td>
                        <td>{item.MailAdress}</td>
                        <td>{item.Amount}</td>
                    </tr>
            ))
            }
            </table>
            </div>
        );
    }
}

export default Users;