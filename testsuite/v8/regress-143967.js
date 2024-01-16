





























var functionWithoutProto = [].filter;
var obj = Object.create(functionWithoutProto);
functionWithoutProto.__proto__ = function() {};
assertEquals(functionWithoutProto.prototype, obj.prototype);
