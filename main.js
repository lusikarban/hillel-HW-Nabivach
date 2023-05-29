function* getPartsOfWord(string) {
    let newString = '';
    let symbol = ''

    for (let i = 0; i < string.length; i++) {
        newString += string[i]
        symbol = yield newString + symbol;

        if (symbol === undefined) {
            symbol = '';
        };
    };
    return newString;
};

///commit /// new commit ///