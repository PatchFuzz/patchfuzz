;

class C {
  #f = 1;
  static test() {
    print(
      () => [].#f,
      "can't access private field or method: object is not the right class"
    );
    print(
      () => "ok".#f,
      "can't access private field or method: object is not the right class"
    );
    print(
      () => { [].#f = 3; },
      "can't set private field: object is not the right class"
    );
    print(
      () => { [].#f += 3; },
      "can't set private field: object is not the right class"
    );
    print(
      () => { [].#f++; },
      "can't set private field: object is not the right class"
    );

    print(
      () => "".#f,
      "can't access private field or method: object is not the right class"
    );
    print(
      () => { "".#f = 3; },
      "can't set private field: object is not the right class"
    );
  }
}

C.test();

