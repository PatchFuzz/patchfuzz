




let str1 = "external string turned into two byte";
let str2 = str1.substring(1);
try {
  
  
  print(str1, true);
} catch (e) { }
print(
  ["x", "t", "e", "r", "n", "a", "l", " ",
  "s", "t", "r", "i", "n", "g", " ",
  "t", "u", "r", "n", "e", "d", " ",
  "i", "n", "t", "o", " ",
  "t", "w", "o", " ",
  "b", "y", "t", "e"], str2.split(""));
