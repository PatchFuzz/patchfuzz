;

source = `var y = {
    x;
}`;
print(() => eval(source), SyntaxError, /./);







source = `var y = {
    #x;
}`;
print(() => eval(source), SyntaxError, /./);

source = `var y = {
    #x
}`;
print(() => eval(source), SyntaxError);

source = `var y = {
    x = 2;
}`;
print(() => eval(source), SyntaxError, /./);

source = `var y = {
    x = 2
}`;
print(() => eval(source), SyntaxError, /./);

source = `var y = {
    #x = 2;
}`;
print(() => eval(source), SyntaxError, /./);

source = `var y = {
    #x = 2
}`;
print(() => eval(source), SyntaxError, /./);

if (typeof reportCompare === "function")
  reportCompare(true, true);
