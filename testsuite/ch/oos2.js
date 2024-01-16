




function echo(m) { this.WScript ? WScript.Echo(m) : console.log(m); }

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
