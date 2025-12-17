function NPList() {}
NPList.prototype = new Array;

var list = new NPList();
list.push('a');

var cut = list.splice(0, 1);

print(cut[0], 'a');
print(cut.length, 1);
print(list.length, 0);

var desc = Object.getOwnPropertyDescriptor(list, "0");
print(desc, undefined);
print("0" in list, false);
