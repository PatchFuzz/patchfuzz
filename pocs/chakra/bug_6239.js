(function v2(a = function v2(){ +v2; }) {
    a();
    print('pass');
})();

(function v2(a = function v3(){ function v4(b = (function v4() {v4; print('pass');})()){}; v4(); }) {
    a();
    print('pass');
})();

(function a() {
    a = function a(a=function(a){}){}
    function a(){
        var a = "a";
    }
    print('pass');
})();
