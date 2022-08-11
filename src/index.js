module.exports = function reverse (n) {
    if (Number(n) >= 0) {
        let str = String(n);
        return str.split("").reverse().join("");
    } else {
        let num = Number(n) * -1;
        let str = String(num);
        return str.split("").reverse().join("");
    }
}
