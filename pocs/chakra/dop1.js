const x = "let x";

Object.seal(this);
try {
Object.defineProperty(this, 'x', {value:'20', configurable: true });
}
catch(e) {
    print("exception: " + e);
}
print(x);
print(this.x);
print(Object.isSealed(this));

