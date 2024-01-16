




RegExp.prototype[Symbol.search] = function search() {
    return undefined; 
}
'string'.search(/./);

RegExp.prototype[Symbol.match] = function match() {
    return undefined; 
}
'string'.match(/./);

RegExp.prototype[Symbol.split] = function split() {
    return undefined; 
}
'string'.split(/./);

RegExp.prototype[Symbol.replace] = function replace() {
    return undefined; 
}
'string'.replace(/./, '-');

print("Pass");
