with(evalcx('')) {
    delete eval;
    eval("x", this.__defineGetter__("x", Function));
}



