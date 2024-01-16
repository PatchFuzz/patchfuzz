













class MyObservedArray extends Array {
    constructor() {
        super('"use strict"; var x = "\\411";')
    } [Symbol]() {}
}

new MyObservedArray().slice()
