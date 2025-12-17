var errorToString = Error.prototype.toString;


print(errorToString.call({message: "", name: ""}), "");
print(errorToString.call({name: undefined, message: ""}), "Error");
print(errorToString.call({name: "Test", message: undefined}), "Test");
print(errorToString.call({name: "Test", message: ""}), "Test");
print(errorToString.call({name: "", message: "Test"}), "Test");
print(errorToString.call({name: "Test", message: "it!"}), "Test: it!");
