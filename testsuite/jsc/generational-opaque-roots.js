

var Element = $vm.Element;
var Root = $vm.Root;
var getElement = $vm.getElement;

try {
    
    new (Element.bind());
} catch(e) {
}


var root = new Root();


var otherRoot = new Root();


edenGC();


var elem = new Element(root);
elem.customProperty = "hello";


elem = null;


var test = new Element(otherRoot);




edenGC();


var elem = getElement(root);
if (elem.customProperty != "hello")
    throw new Error("bad value of customProperty: " + elem.customProperty);
