






const blah = {"\0":"hi","\0\0":"hello"};
for (var i in new Proxy(blah, {})) console.log(blah[i]);
