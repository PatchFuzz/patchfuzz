var a = undefined;
{
  class C {
    field = a.instantiate();
  }

  print(() => {
    let c = new C;
  }, TypeError);
}
