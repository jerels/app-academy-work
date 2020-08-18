#!/usr/bin/env node

const fs = require("fs");
let fileArr = process.argv.slice(2);

function del(arr) {
    for (let i = 0; i < arr.length; i++) {
        let file = arr[i];
        fs.unlink(file, err => {
            if (err) throw err;
        });
    }
}

del(fileArr);