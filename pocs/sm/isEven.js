import { isOdd } from "isOdd.js"

export function isEven(x) {
    if (x < 0)
        throw "negative";
    if (x == 0)
        return true;
    return isOdd(x - 1);
}

print(isEven(4), true);
print(isOdd(5), true);
