





class C {
    get #a() { }
    getA() { return this.#a; }
}

new C().getA();
