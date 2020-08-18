const reverseString = str => {
    if (typeof str !== "string") {
        throw new TypeError("this function only accepts string args!!");
    }
    return str
        .split("")
        .reverse()
        .join("");
};

module.exports = reverseString;