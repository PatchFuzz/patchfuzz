
















var not_called = 0;
var called = 0;

function accessor_proto() {
  Object.defineProperty(this, "prop",
    { get: function() { return 3.5 }, set: function(v) { called++ } }
  )
}

function data_proto() {
  Object.defineProperty(this, "prop",
    { value:7, writable:true }
  )
}

accessor_proto.prototype = { get prop() { not_called++ }, set prop(v) { not_called++ } }
data_proto.prototype = accessor_proto.prototype

function create_accessor() {}
function create_data() {}

create_accessor.prototype = new accessor_proto();
create_data.prototype = new data_proto();

var o = new create_accessor()
o.prop = 1
assert(o.prop === 3.5)
assert(Object.getPrototypeOf(o) === create_accessor.prototype)

o = new create_data()
o.prop = 'X'
assert(o.prop === 'X')
assert(Object.getPrototypeOf(o) === create_data.prototype)

assert(not_called === 0)
assert(called === 1)
