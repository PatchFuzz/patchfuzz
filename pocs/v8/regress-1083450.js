const source = "(?<=(?=ab)(|)abc)"
const re = new RegExp(source);
print(re.exec("abc"));
