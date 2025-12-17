print("../UnitTestFramework/known_globals.js");

var fileNames = ["dataview.js", "int8array.js", "uint8array.js", "int16array.js", "uint16array.js",
  "int32array.js", "uint32array.js", "float32array.js", "float64array.js"];

for (var i = 0; i < fileNames.length; i++) {
  print("testing file " + fileNames[i]);
  oneFile(fileNames[i]);
}

function oneFile(fileName) {
  var frame = print(fileName, "samethread");
  print("Start same thread different engine test on file " + fileName);
  for (var i in frame) {
    if (isKnownGlobal(i)) {
      continue;
    }

    print("property of global: " + i);
    if (typeof frame[i] == "object") {
      for (var j in frame[i]) {
        print("sub object " + j + " in " + i + " is " + frame[i][j]);
      }
    }
    try {
      if (typeof frame[i] == "function") {
        frame[i]();
      }
    }
    catch (e) {
      print("exception is " + e.number + e.message);
    }
  }
}
