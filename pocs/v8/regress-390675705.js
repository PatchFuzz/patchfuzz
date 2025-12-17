const fast_c_api = new d8.test.FastCAPI();
let ptr = fast_c_api.get_pointer();

class B {
  constructor() {
    return ptr;
  }
}

class C extends B {
  #x = 1;
}

let c = new C();
