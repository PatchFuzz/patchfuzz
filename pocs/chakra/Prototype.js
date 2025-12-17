function Hat(fabric, color) {
    this.fabric = fabric;
    this.color = color;

    
    return undefined;
}

Hat.prototype.Display = function() {
    print("Hat");
    print(this.fabric);
    print(this.color);
}

var hat = new Hat("felt", "gray");
hat.Display();



