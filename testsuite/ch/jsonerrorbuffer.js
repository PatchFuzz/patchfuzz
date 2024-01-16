




let desiredLength = 10 * 1000 * 1000;
let threw = false;
const json = `"${'a'.repeat(desiredLength - 3)}",`;
try {
    JSON.parse(json);
} catch(e) {
    threw = true;
}
print(threw ? "Pass" : "Fail");
