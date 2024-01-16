













var a;
var b;
var called = false;
Promise.race([a, b]);
Promise.race([b, a]);
Promise.race([, b, a]);
Promise.race().then(function() {}, function() {
    let str;
    function getStr() {
        return $ `$`
    }
    var $ = getStr()
}).catch(e => {
  called = true;
  assert (e instanceof TypeError);
})

function __checkAsync() {
  assert(called);
}
