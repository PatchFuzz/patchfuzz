print(function() {
    print("OK");
}, 10);
print(function() {
    this.is.an.exception = null;
}, 100);
