;

let x = 10;
let g = 4;

print(eval(`
a => {}
/x/g;
`).toString(), "/x/g");
print(eval(`
a => {}
/x/;
`).toString(), "/x/");
print(() => eval(`
a => {} /x/g;
`), SyntaxError);

print(eval(`
a => {},
/x/;
`).toString(), "/x/");
print(eval(`
a => {}
,
/x/;
`).toString(), "/x/");

print(eval(`
false ?
a => {} :
/x/;
`).toString(), "/x/");
print(eval(`
false ?
a => {}
:
/x/;
`).toString(), "/x/");

print(eval(`
a => {};
/x/;
`).toString(), "/x/");
print(eval(`
a => {}
;
/x/;
`).toString(), "/x/");

print(eval(`
a => 200
/x/g;
`) instanceof Function, true);
print(eval(`
a => 200
/x/g;
`)(), 5);
print(eval(`
a => 200 /x/g;
`)(), 5);

print(eval(`
a => 1,
/x/;
`).toString(), "/x/");
print(eval(`
a => 1
,
/x/;
`).toString(), "/x/");

print(eval(`
false ?
a => 1 :
/x/;
`).toString(), "/x/");
print(eval(`
false ?
a => 1
:
/x/;
`).toString(), "/x/");

print(eval(`
a => 1;
/x/;
`).toString(), "/x/");
print(eval(`
a => 1
;
/x/;
`).toString(), "/x/");
