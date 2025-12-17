class C {
  static {
    const evil = eval.bind();
    print(() => { evil("C = 0"); });
  }
}
