#!/usr/bin/env node

const fs = require("fs");
let newfileArr = process.argv.slice(2);

function touch(arr) {
    for (let i = 0; i < arr.length; i++) {
        let newfile = arr[i];
        fs.writeFile(newfile, "", err => {
            if (err) throw err;
        });
    }
}

touch(newfileArr);