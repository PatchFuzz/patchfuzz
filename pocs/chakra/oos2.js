function echo(m) { print ? print(m) : print(m); }

function oos() {
    oos();
}

try {
    try {
        oos();
    } finally {
        try {
            oos();
        } catch (e) {
        } finally {
        }
    }
    
    
    
    
    
    
    
    
} catch (e) {
    if (e) {
        echo("pass");
    }
}
