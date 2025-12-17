let assert = assertEq;

this.x = "OK";

for (let i = 0; i < 50; i++) {
  print(x, "OK");
  if (i === 40) {
    this.x = "FAIL";
    Object.defineProperty(this, "x", {
      get() { return "OK"; }
    });
  }
}
