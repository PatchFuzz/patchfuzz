print("foo".anchor());
print("foo".big());
print("foo".blink());
print("foo".bold());
print("foo".fixed());
print("foo".fontcolor("#FF00FF"));
print("foo".fontsize(12));
print("foo".italics());
print("foo".small());
print("foo".strike());
print("foo".sub());
print("foo".sup());

print("foo".anchor('"')); 
print("foo".anchor('<')); 

print("foo".anchor('aaa"bbbccc')); 

print("..\\UnitTestFramework\\UnitTestFramework.js", "self");
var wrappers = ["anchor", "big", "blink", "bold", "fixed", "fontcolor",  
                "fontsize", "italics", "small", "strike", "sub", "sup"];
var tests = {
  test01: {
    name: "Check that String.prototype.x.call throws a TypeError on null or undefined ",
    body: function () {
      for (var i in wrappers) {
        helpers.writeln("trying: ", wrappers[i], ": String.prototype." + wrappers[i] + ".call");
        print(function () { eval("String.prototype." + wrappers[i] + ".call(null);") }, TypeError);
        print(function () { eval("String.prototype." + wrappers[i] + ".call(undefined);") }, TypeError);
      }
    }
  }
}

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
