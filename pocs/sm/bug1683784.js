class C {
  #x() { }
  constructor() { this.#x = 1; }
}

try {
  new C
} catch (e) {
  print(e.message, "cannot assign to private method");
}
