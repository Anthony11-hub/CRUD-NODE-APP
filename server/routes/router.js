const express = require('express');
const route = express.Router();
const controller = require('../controller/controller')
const axios = require('axios')


route.get('/', (req, res) => {
    axios.get('http://localhost:3000/api/users').then(function (response) {
        console.log(response.data);
        res.render('index', {users: response.data});
    })
    .catch(function (err) {
        res.send(err)
    })
    
});


route.get('/add-user', (req, res) => {
    res.render('add-user')
});

route.get('/update_user', (req, res) => {
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
});


// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route;