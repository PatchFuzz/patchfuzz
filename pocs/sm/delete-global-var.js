let assert = assertEq;

this.x = "OK";
this.y = "FAIL";

for (let i = 0; i < 50; i++) {
  print(x, "OK");
  if (i === 40) {
    this.x = "FAIL";
    delete this.x;
    this.x = "OK";
  }
}
