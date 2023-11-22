//Create Web Server
function CreateWebServer() {
const http = require('http');

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment');

// controllers/comment.js

// Liste des commentaires
exports.comment_list = (req, res) => {
    // Logique pour récupérer et renvoyer la liste des commentaires
    res.send('Liste des commentaires');
};

// Ajouter un commentaire
exports.comment_add = (req, res) => {
    // Logique pour ajouter un commentaire
    res.send('Ajouter un commentaire');
};

// Autres méthodes (supprimer, modifier, etc.) peuvent être ajoutées ici
// Suite de votre fichier de routeur

// Route pour obtenir la liste des commentaires
router.get('/', commentController.comment_list);

// Route pour ajouter un commentaire
router.post('/add', commentController.comment_add);

// Vous pouvez ajouter d'autres routes pour des actions comme modifier ou supprimer
}

