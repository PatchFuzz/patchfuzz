




function Hat(fabric, color) {
    this.fabric = fabric;
    this.color = color;

    
    return undefined;
}

Hat.prototype.Display = function() {
    WScript.Echo("Hat");
    WScript.Echo(this.fabric);
    WScript.Echo(this.color);
}

var hat = new Hat("felt", "gray");
hat.Display();



