




var NeedLoad = 'ValueX';
function runAnimation(obj) {
    
        switch (obj) {
       case NeedLoad:
            break;
        case 'ValueY':
            WScript.Echo('ValueY');
            break;
        case 'Blah':
            WScript.Echo('Blah');
            break;
        default:
            if (obj === 'ValueY') {
                WScript.Echo('Bug');
            }
            WScript.Echo('default');
            break;
        }
    
}

runAnimation('ValueX');
runAnimation('ValueY');