var o = {
  valueOf : function() {
    return {
      toString : function() { return "fail" }
    }
  },
  toString : function() { return "good" }
};

var p = {
  valueOf : function() {
    return {
      toString : function() { return "0" }
    }
  },
  toString : function() { return "7" }
};

var q = {
  toString : function() {
    return {
      valueOf : function() { return "0" }
    }
  },
  valueOf : function() { return "7" }
};

function print(b, s) {
    if (b)
        return;
    print("imacro produces incorrect result for " + s, "fail");
}

function run() {
    for (var i = 0; i < 5; ++i) {
        
        print(!(o == "fail"), "obj == any");
        print(!("fail" == o), "any == obj");
        print(!(o != "good"), "obj != any");
        print(!("good" != o), "any != obj");

        
        print(!((p | 3) != 7), "obj | any");
        print(!((3 | p) != 7), "any | obj");
        print(!((p | p) != 7), "obj | obj");
        print(!((p & 3) != 3), "obj & any");
        print(!((3 & p) != 3), "any & obj");
        print(!((p & p) != 7), "obj & obj");
        print(!((p * 3) != 21), "obj * any");
        print(!((3 * p) != 21), "any * obj");
        print(!((p * p) != 49), "obj * obj");

        
        print(!(o + "" != "good"), "obj + any");
        print(!("" + o != "good"), "any + obj");
        print(!(o + o != "goodgood"), "any + any");

        
        print(!(-p != -7), "-obj");
        print(!(+p != 7), "+obj");

        
        print(!(String(q) != "7"), "String(obj)");
        print(!(new String(q) != "7"), "new String(obj)");
    }
    return true;
}

run();
