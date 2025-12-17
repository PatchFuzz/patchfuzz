function f() {
    ({a = () => {
        let arguments;
    }} = 1);

    arguments.x;
}

f();

function g() {
    ({a = ([arguments]) => {}} = 1);

    arguments.x;
}

g();

print('pass');
