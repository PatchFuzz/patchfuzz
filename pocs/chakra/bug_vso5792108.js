function func1() {
    function func11() {
      var y = 1;
    }var x = 1; 
    func11();
}
func1();



function func2() {
    function func22() {
      var y = 1;
    }
    
    var x = 1;
    func22();
}
func2();



function func3() {
    function func33() {
      var y = 1;
    }
    
    var x = 1;
    func33();
}
func3();



function func4(){function func44(){var y=1;}var x=1;func44();}func4();



function func5() {
    var a = 1;
    function func55() {
      var y = 1;
    }var x = 1;
    func55();
}
func5();



function func6() {
    var a = 1;
    
    function func66() {
      var y = 1;
    }var x = 1;
    func66();
}
func6();

print("pass");