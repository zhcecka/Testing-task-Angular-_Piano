const express = require('express');
const fs = require('fs');
const router = express.Router();
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const users = require('../data/users');

router.get('/login', (req, res) => {
    let foundUser = users.find((user) => user.username === req.query.email);
    
    if (foundUser) {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'evgeniiGlavatskikh@gmail.com',      
                pass: 'crash214441'
            }
          });
          
        let mailOptions = {
            from: '"Stackoverflow" <nodejs@example.com>',
            to: foundUser.username,
            subject: "Password recovery",
            html: "Your password is <strong>" + foundUser.password + "</strong>."
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                res.status(401).send("Server error, try again later")
            } else {
                res.status(200).send(JSON.stringify(info));
            }
          });
    } else {
        res.status(401).send("User with this email does not exist ")
    }
})

router.put('/login', (req, res) => {
    let foundUser = users.find((user) => user.username === req.body.username);
    if (foundUser) {
        res.status(401).send("User has already registered")
    } else {
        const signature = 'MySuP3R_z3kr3t';
        const expiration = '2h';
        
        foundUser = {
            "id": users.length ? users[users.length - 1].id + 1 : 1,
            "name": req.body.name,
            "username": req.body.username,
            "password": req.body.password
        }
        users.push(foundUser);
        fs.writeFile('./data/users.json', JSON.stringify(users), (err) => {
            if (err) throw err;
        });
        
        let token = jwt.sign(foundUser, signature, { expiresIn: expiration });
        res.status(200).send(JSON.stringify(token));

    }

})
  
router.post('/login', (req, res) => {
    let foundUser = users.find((user) => user.username === req.body.username && user.password === req.body.password)

    if (foundUser) {
        const signature = 'MySuP3R_z3kr3t';
        const expiration = '2h';
        let token = jwt.sign(foundUser, signature, { expiresIn: expiration });

        res.status(200).send(JSON.stringify(token));
    } else {
        res.status(401).send("Login error, check your email and password")
    }
})

module.exports = router;