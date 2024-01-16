





gczeal(2);
function testCallProtoMethod() {
    function X() {
        this.valueOf = new testCallProtoMethod( "return this.value" );
    }
    X.prototype.getName = function () { return "X"; }
    var a = [new X, new X, new getName, new new this, new Y];
}
testCallProtoMethod();
