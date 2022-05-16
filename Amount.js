import React from "react";
import {Link} from "react-router-dom";
import './Users.css';

class Amount extends React.Component{
    constructor(props){
        super(props)
        this.state=({
        RecipientUsername:'',
        Amount:'',
    })
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
        const {RecipientUsername, Amount} = this.state;
        if(!RecipientUsername || !Amount){
            event.preventDefault(); 
            window.alert("Please fill all the required fields");
        }
        else{
        window.alert("Data Added Successfully");
        document.getElementById('add-user').classList.remove("open-popup")
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

    render(){
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
            <tr>
                <td>1</td>
                <td>PS78BQ65EZ</td>
                <td>leonel@gmail.com</td>
                <td>11111</td>
            </tr>
            <tr>
                <td>2</td>
                <td>9PQHUCKBYY</td>
                <td>prasannakumar@gmail.com</td>
                <td>55555</td>
            </tr>
            <tr>
                <td>3</td>
                <td>663BRXM48R</td>
                <td>avengers@gmail.com</td>
                <td>10000</td>
            </tr>
            <tr>
                <td>4</td>
                <td>AFKIYW3LW7</td>
                <td>marvel@gmail.com</td>
                <td>5000</td>
            </tr>
            <tr>
                <td>5</td>
                <td>RRK6QEJKB8</td>
                <td>spiderman@gmail.com</td>
                <td>100000</td>
            </tr>
            <tr>
                <td>6</td>
                <td>B3A9LDKNU1</td>
                <td>tonystark@gmail.com</td>
                <td>50000</td>
            </tr>
            <tr>
                <td>7</td>
                <td>LGSSKD1Z89</td>
                <td>captainamerica@gmail.com</td>
                <td>10000</td>
            </tr>
            <tr>
                <td>8</td>
                <td>8AB7CWYPAS</td>
                <td>thor@gmail.com</td>
                <td>7000</td>
            </tr>
            <tr>
                <td>9</td>
                <td>EJ6HDGNJMZ</td>
                <td>rowdy@gmail.com</td>
                <td>10000</td>
            </tr>
            <tr>
                <td>10</td>
                <td>7EJ8BUIQ1W</td>
                <td>superman@gmail.com</td>
                <td>100000</td>
            </tr>
            </table>
            </div>
        );
    }
}

export default Amount;