#!/usr/bin/env node

const fs = require("fs");
let [one, two, src, dest] = process.argv;

if (src === undefined && dest === undefined) {
    console.error("Must include a source AND destination.");
    process.exit();
};

if (src === undefined) {
    console.error("Source file MUST exist.");
    process.exit(9);
};

fs.stat(src, function (err, stats) {
    if (stats.isDirectory()) {
        process.exit(10);
    }
})

fs.copyFile(src, dest, () => {



})