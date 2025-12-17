let useArgs = undefined;
function f(arg) {
    useArgs = 'result' + arguments[0] + arg;
}

Intl.NumberFormat.__proto__ = { [Symbol.hasInstance]: f };

new Intl.NumberFormat();
