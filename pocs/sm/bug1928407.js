var str = newString("12345678901234567890", {twoByte: true});


var segmenter = new Intl.Segmenter();
var segments = segmenter.segment(str);
var segment = segments.containing(0);

var obj = {};




print(obj[str], undefined);
