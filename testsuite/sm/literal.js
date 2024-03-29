load(libdir + "asserts.js");

source = `var y = {
    x;
}`;
assertErrorMessage(() => eval(source), SyntaxError, /./);







source = `var y = {
    #x;
}`;
assertErrorMessage(() => eval(source), SyntaxError, /./);

source = `var y = {
    #x
}`;
assertThrowsInstanceOf(() => eval(source), SyntaxError);

source = `var y = {
    x = 2;
}`;
assertErrorMessage(() => eval(source), SyntaxError, /./);

source = `var y = {
    x = 2
}`;
assertErrorMessage(() => eval(source), SyntaxError, /./);

source = `var y = {
    #x = 2;
}`;
assertErrorMessage(() => eval(source), SyntaxError, /./);

source = `var y = {
    #x = 2
}`;
assertErrorMessage(() => eval(source), SyntaxError, /./);

if (typeof reportCompare === "function")
  reportCompare(true, true);
