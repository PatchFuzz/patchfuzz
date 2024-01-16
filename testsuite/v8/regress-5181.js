



var target = Object.create(null);
var proxy = new Proxy(target, {
  ownKeys: function() {
    return ['a'];
  }
});
for (var key in proxy) ;
