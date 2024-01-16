




function verify(){}
function Run(){
    function verify(act, exp, msg) { }
    var level_0_identifier_0 = "level0";
    
    
    {
        let level_1_identifier_0= "level1_0";  
        const level_1_identifier_1= "level1_1";   
        let level_1_identifier_2;    
        
		function level2Func(level_2_identifier_0) {
            eval("");
            var level_2_identifier_1 = "level2";  
            verify(level_1_identifier_0, "level1level1", "[Let Const - Function Declaration] level_1_identifier_0 at level 2"); 
            level_1_identifier_2;  
        }
        level2Func("level2");
        level2Func = undefined;
        level_1_identifier_2 = "test";
    }
}
Run.apply({});
WScript.Echo("PASSED");