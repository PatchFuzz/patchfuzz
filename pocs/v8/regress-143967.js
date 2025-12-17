var functionWithoutProto = [].filter;
var obj = Object.create(functionWithoutProto);
functionWithoutProto.__proto__ = function() {};
print(functionWithoutProto.prototype, obj.prototype);
