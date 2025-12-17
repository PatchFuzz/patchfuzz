var NeedLoad = 'ValueX';
function runAnimation(obj) {
    
        switch (obj) {
       case NeedLoad:
            break;
        case 'ValueY':
            print('ValueY');
            break;
        case 'Blah':
            print('Blah');
            break;
        default:
            if (obj === 'ValueY') {
                print('Bug');
            }
            print('default');
            break;
        }
    
}

runAnimation('ValueX');
runAnimation('ValueY');