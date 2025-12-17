function foo(a) {
    return 0 in a;
}
for (let i = 0; i < testLoopCount; i++) {
    const str = new String('asdf');
    str[42] = 'x'; 
    foo(str);
}
