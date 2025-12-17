class Base {}
class Derived extends Base {
    constructor() {
        var fun = async() => {
            for (var i = 0; i < 20; i++) {} 
            super();
        };
        fun();
    }
}
d = new Derived();
