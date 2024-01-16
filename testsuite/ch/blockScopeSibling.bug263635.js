









function baselineVerify(act, msg) { if(typeof WScript !== "undefined") { WScript.Echo(msg + ": " + act);} else { print(msg + ": " + act); } }
function verify(act, exp, msg) { if(act !== exp) { if(typeof WScript !== "undefined") { WScript.Echo(msg + ": " + act + " = " + exp);} else { print(msg + ": " + act + " = " + exp); } } }
var level_0_identifier_0 = "level0";
let level_0_identifier_1= "level0";
const level_0_identifier_2= "level0";

function level1Func(level_1_identifier_0) {
    
    var level_1_identifier_1 = arguments;
    
    let level_1_identifier_2= "level1";
const level_1_identifier_3= "level1";

    
    var level_1_identifier_4 = "level1";

    
    verify(level_0_identifier_0, "level0", "[Function Declaration with Args - With] level_0_identifier_0 at level 1");;
    
    verify(level_0_identifier_1, "level0", "[Function Declaration with Args - With] level_0_identifier_1 at level 1");;
    
    verify(level_0_identifier_2, "level0", "[Function Declaration with Args - With] level_0_identifier_2 at level 1");;
    
    verify(level_1_identifier_0, "level1", "[Function Declaration with Args - With] level_1_identifier_0 at level 1");;
    
    verify(arguments[0], "level1", "[Function Declaration with Args - With] arguments[0] at level 1");;
    
    verify(level_1_identifier_1[0], "level1", "[Function Declaration with Args - With] level_1_identifier_1 at level 1");;
    
    verify(level_1_identifier_2, "level1", "[Function Declaration with Args - With] level_1_identifier_2 at level 1");;
    
    verify(level_1_identifier_3, "level1", "[Function Declaration with Args - With] level_1_identifier_3 at level 1");;
    
    verify(level_1_identifier_4, "level1", "[Function Declaration with Args - With] level_1_identifier_4 at level 1");;
    

    
    arguments[0] += "level1";
    level_1_identifier_1[0] += "level1";
    level_1_identifier_2 += "level1";

    with({ level_2_identifier_0: "level2" }) {
        let level_2_identifier_1= "level2";
const level_2_identifier_2= "level2";

    
    
        verify(level_0_identifier_0, "level0", "[Function Declaration with Args - With] level_0_identifier_0 at level 2");;
    
        verify(level_0_identifier_1, "level0", "[Function Declaration with Args - With] level_0_identifier_1 at level 2");;
    
        verify(level_0_identifier_2, "level0", "[Function Declaration with Args - With] level_0_identifier_2 at level 2");;
    
        verify(level_1_identifier_0, "level1level1level1", "[Function Declaration with Args - With] level_1_identifier_0 at level 2");;
    
        verify(arguments[0], "level1level1level1", "[Function Declaration with Args - With] arguments[0] at level 2");;
    
        verify(level_1_identifier_1[0], "level1level1level1", "[Function Declaration with Args - With] level_1_identifier_1 at level 2");;
    
        verify(level_1_identifier_2, "level1level1", "[Function Declaration with Args - With] level_1_identifier_2 at level 2");;
    
        verify(level_1_identifier_3, "level1", "[Function Declaration with Args - With] level_1_identifier_3 at level 2");;
    
        verify(level_1_identifier_4, "level1", "[Function Declaration with Args - With] level_1_identifier_4 at level 2");;
    
        verify(level_2_identifier_0, "level2", "[Function Declaration with Args - With] level_2_identifier_0 at level 2");;
    
        verify(level_2_identifier_1, "level2", "[Function Declaration with Args - With] level_2_identifier_1 at level 2");;
    
        verify(level_2_identifier_2, "level2", "[Function Declaration with Args - With] level_2_identifier_2 at level 2");;
    

    
        level_0_identifier_0 += "level2";
        level_1_identifier_0 += "level2";
        arguments[0] += "level2";
        level_1_identifier_2 += "level2";
        level_2_identifier_1 += "level2";

    
    
        verify(level_2_identifier_0, "level2", "[Function Declaration with Args - With] level_2_identifier_0 after assignment at level 2");; 
        verify(level_2_identifier_1, "level2level2", "[Function Declaration with Args - With] level_2_identifier_1 after assignment at level 2");; 
        verify(level_2_identifier_2, "level2", "[Function Declaration with Args - With] level_2_identifier_2 after assignment at level 2");; 

    }

    
    verify(level_1_identifier_0, "level1level1level1level2level2", "[Function Declaration with Args - With] level_1_identifier_0 after assignment at level 1");; 
    verify(arguments[0], "level1level1level1level2level2", "[Function Declaration with Args - With] arguments[0] after assignment at level 1");; 
    verify(level_1_identifier_1[0], "level1level1level1level2level2", "[Function Declaration with Args - With] level_1_identifier_1[0] after assignment at level 1");; 
    verify(level_1_identifier_2, "level1level1level2", "[Function Declaration with Args - With] level_1_identifier_2 after assignment at level 1");; 
    verify(level_1_identifier_3, "level1", "[Function Declaration with Args - With] level_1_identifier_3 after assignment at level 1");; 
    verify(level_1_identifier_4, "level1", "[Function Declaration with Args - With] level_1_identifier_4 after assignment at level 1");; 

}
level1Func("level1");
level1Func = undefined;


verify(level_0_identifier_0, "level0level2", "[Function Declaration with Args - With] level_0_identifier_0 after assignment at level 0");; 
verify(level_0_identifier_1, "level0", "[Function Declaration with Args - With] level_0_identifier_1 after assignment at level 0");; 
verify(level_0_identifier_2, "level0", "[Function Declaration with Args - With] level_0_identifier_2 after assignment at level 0");; 

WScript.Echo("PASSED");
