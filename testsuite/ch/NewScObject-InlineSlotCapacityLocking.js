




(function testInlineSlotCapacityLocking1() {
    WScript.Echo("Test: testInlineSlotCapacityLocking1...");
    
    
    var Namespace = {
        
        ConstructedObject1: function () {
            this.a = 0;
            this.b = 0;
            this.c = 0;
            this.d = 0;
            this.e = 0;
            this.f = 0;
            this.g = 0;
            this.h = 0;
        },

        
        
        ConstructedObject2: function () {
            this.a = 0;
            this.b = 0;
            this.c = 0;
            this.d = 0;
            this.e = 0;
            this.f = 0;
        }
    };

    
    Namespace.ConstructedObject2.prototype = Namespace.ConstructedObject1.prototype;

    var construct1 = function () {
        
        
        return new Namespace.ConstructedObject1();
    }

    
    var o1 = construct1();

    
    
    
    var o2 = construct1();

    
    
    var o3 = new Namespace.ConstructedObject2();

    
    
    
    
    
    o3.g = 1;
    o3.h = 1;

    WScript.Echo("Passed");
})();