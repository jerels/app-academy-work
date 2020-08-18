const pro = process.argv.slice(2);
const [TARGET_FILE, OLD_STR, NEW_STR] = pro;
const fs = require("fs");
fs.readFile(TARGET_FILE, "utf8", (err, data) => {
    if (err) {
        throw err;
    }
    const newData = replace(data, OLD_STR, NEW_STR);

    fs.writeFile(TARGET_FILE, newData, "utf8", (err) => {
        if (err) {
            throw err;
        }
    })
});


const replace = (str1, str2, str3) => {
    if (str1.includes(str2)) {
        return str1.split(str2).join(str3);
    }
}
