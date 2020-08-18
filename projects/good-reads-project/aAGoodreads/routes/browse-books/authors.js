const express = require('express');
const router = express.Router();
const { routeHandler } = require('../utils');
const { Op } = require("sequelize");
const { Book, Bookshelf, Author, Review, Publisher, Genre, Series } = require('../../db/models');

router.get('/', routeHandler(async (req, res) => {
    const authors = await Author.findAll({
        include: [{ model: Book }, { model: Series }],
    });
    res.render('authors-browse', { title: "Browse Authors", authors })
}));

router.get('/:id', routeHandler(async (req, res) => {
    const id = req.params.id;
    const authors = await Author.findAll({
        where: {
            [Op.or]: [
                {
                    lastName: {
                        [Op.substring]: id,
                    }
                },
                {
                    firstName: {
                        [Op.substring]: id,
                    }
                },
            ]
        },
        include: [{ model: Book }, { model: Series }],
    });
    if (authors.length === 0) {
        res.render('nothing-is-here', { title: "Nothing to Find" })
    } else {
        res.render('authors-browse', { title: "Browse Authors", authors })
    }
}));

module.exports = router;
