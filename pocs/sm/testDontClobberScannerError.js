var caught = false;
try {
    Function("a, …", "");
} catch(e) {
    print(e.toString().search("SyntaxError: malformed formal parameter") == -1, true);
    print(e.toString().search("SyntaxError: illegal character")          == -1, false);
    caught = true;
}
print(caught, true);
