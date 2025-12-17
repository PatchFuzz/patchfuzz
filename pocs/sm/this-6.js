function Dog(name) {
    this.name = name;
    this.getName = () => eval("this.name");
    this.getNameHard = () => eval("(() => this.name)()");
}

var d = new Dog("Max");
print(d.getName(), d.name);
print(d.getNameHard(), d.name);
