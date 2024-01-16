



const source = "(?<=(?=ab)(|)abc)"
const re = new RegExp(source);
assertNotNull(re.exec("abc"));
