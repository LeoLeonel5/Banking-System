const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', function(req, res, next){
    let sql = 'SELECT * FROM transactions';
    db.query(sql, (error, data)=>{
        res.send(data);
    })
});

router.post('/', function(req, res, next){
    generateString = () => {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
        let s = ' ';
        const charactersLength = characters.length;
        for ( let i = 1; i <=10; i++ ) {
            s += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return s
    }
    let {RecipientUsername, Amount}=req.body;
    let s=generateString()
    let sql = 'INSERT INTO transactions (TransactionID, MailAdress, Amount) VALUES (?, ?, ?)';
    db.query(sql, [s, RecipientUsername, Amount], (error, result)=>{
        if(error){
            window.alert(error)
        }
    })
});

module.exports = router;