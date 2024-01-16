






var P = function () {
    this.top = 1; 
    this.bottom = 2;
};

function run() {
    var obj1 = new P();
    var obj2 = new P();
    var obj2 = new P();
}
run();
WScript.Attach(run);
WScript.Detach(run);
WScript.Echo("Pass");
