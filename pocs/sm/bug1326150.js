this.x = [];
Function.apply(null, this.x);
Object.defineProperty(this, "x", {get: valueOf});
print(evaluate("this.x;"), this);
