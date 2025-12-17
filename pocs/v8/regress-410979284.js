let smiley = '\u{D83D}\u{DE0A}';
let obj1 = {[smiley]: undefined};
let obj2 = {[smiley]: {}};
print('{}', JSON.stringify(obj1));
print(`{"${smiley}":{}}`, JSON.stringify(obj2));
