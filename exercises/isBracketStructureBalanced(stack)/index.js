const isBracketStructureBalanced = (str) => {
    if (str.length === 0) {
        return true;
    } else {
    const brackets = ["()", "<>", "[]", "{}"];
    const BracketReverse = (LastSymbol) => {
            for (const bracket of brackets) {
                if (bracket[0] === LastSymbol) {
                    return bracket[1];
                } else if (bracket[1] === LastSymbol) {
                    return bracket[0];
                }
            }
        }
    const CheckBrackets = (symbol) => {
        for (const bracket of brackets) {
            if (bracket[0] === symbol || bracket[1] === symbol) {
            return bracket[0] === symbol;
            }
            }
        }
    const stack = [];
        for (const bracket of brackets) {
            for (const symbol of str) {
         const LastSymbol = stack[stack.length - 1];
        if (symbol === bracket[0]) {
            stack.push(symbol);
        } else if (stack.length === 0 && symbol === bracket[1]) {
            return false;
        } else if (symbol === bracket[1] && symbol === BracketReverse(LastSymbol)) {
            stack.pop();
        }
    }
}
return stack.length === 0;
    }

};
module.exports = { isBracketStructureBalanced, isOpenedBacket, reverseBacketType };