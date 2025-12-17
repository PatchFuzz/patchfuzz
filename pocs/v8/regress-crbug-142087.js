var string = "What are you looking for?";

var expected_match = [""];
for (var i = 0; i < string.length; i++) {
  expected_match.push("");
}

string.replace(/(_)|(_|)/g, "");
print(expected_match, string.match(/(_)|(_|)/g, ""));

'***************************************'.match(/((\\)|(\*)|(\$))/g, ".");
