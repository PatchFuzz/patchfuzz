
ignoreUnhandledRejections();

var g = newGlobal({ newCompartment: true });
var ccwPullMethod = new g.Function("return 17;");

new ReadableStream({ pull: ccwPullMethod });
