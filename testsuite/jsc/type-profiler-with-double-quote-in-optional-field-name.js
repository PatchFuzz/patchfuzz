

var findTypeForExpression = $vm.findTypeForExpression;

function wrapper() {
    var x;
    var Proto = function() {};
    var oldProto;
    for (var i = 0; i < 100; i++) {
        
        x = new Proto;
        x['"' + i + '"'] = 20;
        x = x
        oldProto = Proto;
        Proto = function() {};
        Proto.prototype.__proto__ = oldProto.prototype;
    }
    x = {};
}
wrapper();

var types = findTypeForExpression(wrapper, "x;"); 
JSON.stringify(types);
