const http = require('http');
const { readFile } = require('fs').promises;
const path = require('path');
const { Item } = require('../models');

const port = 8081;

const server = http.createServer(async (req, res) => {
    if (req.url.startsWith('/images/')) {
        try {
            const imgPath = './assets' + req.url;
            const imgFile = await readFile(imgPath);
            const fileExt = path.extname(imgPath);
            const imgType = 'image/' + fileExt.substring(1);
            res.statusCode = 200;
            res.setHeader('Content-Type', imgType);
            res.end(imgFile);
            return;
        } catch {
            res.statusCode = 404;
            res.end();
            return;
        }
    }

    if (req.url === '/items/new') {
        const htmlPath = './views/add-item.html';
        const htmlFile = await readFile(htmlPath);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(htmlFile);
        return;
    }

    if (req.url === '/items' && req.method === 'POST') {
        let body = '';
        for await (let chunk of req) {
            body += chunk;
        }

        let pairs = body.split('&');
        let pairsArr = pairs.map(el => el.split('='));
        let pairsObj = pairsArr.reduce((acc, [key, value]) => {
            acc[key] = decodeURIComponent(value.replace(/\+/g, ' '));
            return acc;
        }, {});


    }

    const items = await Item.findAll();

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<div><a href="/items/new">Add a new item</a></div> I have ${items.length} items`);
});

server.listen(port, () => {
    console.log(`Server listening on ${port}`);
});