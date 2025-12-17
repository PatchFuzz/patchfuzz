"p".match(/(p)/);
print(RegExp.$1, "p");
print(RegExp.$2, "");

"x\ny\n".replace(/(^\n*)/, "");
print(RegExp.$1, "");
print(RegExp.$2, "");
