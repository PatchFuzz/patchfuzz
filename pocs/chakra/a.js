if (true) 
{
    const c = 1;
    print(c);
}

print((function(x) {
    let y = arguments;
    return y;
})(1)[0]);

let a = 'a';
(function(a) { print(a) })();
print(a);