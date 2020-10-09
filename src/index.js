module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) {
        return false;
    }

    let brackets = [];
    bracketsConfig.forEach((element) => {
        brackets.push(element.join(""));
    });

    for (let i = 0; i < brackets.length; i++) {
        if (str.includes(brackets[i])) {
            str = str.split(brackets[i]).join("");
            i = -1;
        }
    }

    if (str === "") {
        return true;
    } else {
        return false;
    }
};
