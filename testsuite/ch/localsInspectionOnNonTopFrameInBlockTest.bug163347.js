









function topFrame() {
    ; 
}

function secondFrame() {
    {
        let y = 100;
        topFrame();
    }
}

secondFrame();

WScript.Echo("PASSED");