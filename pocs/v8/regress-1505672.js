const re = /(?<a>.)/;

re.prototype = new Proxy(RegExp.prototype, {});
print('','a'.replace(re, '$<0>'));
