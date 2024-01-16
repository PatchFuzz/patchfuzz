




let str1 = "external string turned into two byte";
let str2 = str1.substring(1);
try {
  
  
  externalizeString(str1, true);
} catch (e) { }
assertEquals(
  ["x", "t", "e", "r", "n", "a", "l", " ",
  "s", "t", "r", "i", "n", "g", " ",
  "t", "u", "r", "n", "e", "d", " ",
  "i", "n", "t", "o", " ",
  "t", "w", "o", " ",
  "b", "y", "t", "e"], str2.split(""));
