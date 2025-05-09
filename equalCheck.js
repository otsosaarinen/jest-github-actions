function equalCheck(number) {
    if (typeof number === "number" && number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = equalCheck;
