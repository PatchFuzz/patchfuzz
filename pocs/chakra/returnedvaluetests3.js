function test1() {
    
    Date.toString();
    "zxw"();
    var a = Date(); 
    print("Pass") + print("1", 10);
}
test1();

Array.prototype.ucase = function () {
    for(var i =0; i < this.length;i++) {
        this[i] = this[i].toUpperCase();
    }
}
function test2() {
    var arr = new Array("a","b"); 
    arr.push("c");
    var str = arr.join();
    arr.ucase();
    var str1 = "All caps " + arr.join();
}
test2();

