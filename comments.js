//Create web server
function CreateWebServer() {
const http = require('http');

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment');

exports.comment_list = (req, res) => {
    res.send('Liste des commentaires');
};

// Ajouter un commentaire
exports.comment_add = (req, res) => {
    res.send('Ajouter un commentaire');
};


router.get('/', commentController.comment_list);

router.post('/add', commentController.comment_add);
r
}

