



let str = "";



for (var i = 0; i < 0x2000; i++) str += "(?<a"+i+">)|";
str += "(?<b>)";

const regexp = new RegExp(str);
const result = "xxx".match(regexp);

assertNotNull(result);
