



var a = undefined;
{
  class C {
    field = a.instantiate();
  }

  assertThrows(() => {
    let c = new C;
  }, TypeError);
}
