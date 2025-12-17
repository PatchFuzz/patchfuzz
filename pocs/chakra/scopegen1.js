let print = function(x) { print(x) }

try {
    throw "level1";
} catch (level_1_identifier_0) {
    eval("var level_1_identifier_3 = 'level1'");

    function level2Func(level_2_identifier_0) {
        level_1_identifier_3 += "level2"; 
    }
    level2Func("level2");
    print(level_1_identifier_3);
}

with({ }) {
    
    
    const level_1_identifier_2= "level1";     

    with({ }) {        
        eval("var level_2_identifier_3 = 'level2'");
        eval("print(level_2_identifier_3);");
        eval("print(level_1_identifier_2);");
    }  
}

function evalcaller() {
    eval("\
        var level_1_identifier_0= \"level1\";\n\
        try {\n\
             throw \"level2\";\n\
        }catch(e) {  \n\
            let level_2_identifier_1= \"level2\";\n\
            function level3Func(level_3_identifier_0) {      \n\
                level_1_identifier_0 += \"level3\";          \n\
                level_2_identifier_1 += \"level3\";          \n\
            }\n\
            level3Func(\"level3\");\n\
            print(level_2_identifier_1);\n\
        }\n\
    ");
    print(level_1_identifier_0);
}
evalcaller();
